"use client";

import { useState, useRef, MouseEvent, useMemo } from "react";
import { CommunityWallCard } from "./CommunityWallCard";

type Message = {
  id: string;
  message: string;
  patternindex: number;
  rotation: number;
  creator_name: string;
  creator_avatar_url: string;
};

type Position = {
  x: number;
  y: number;
};

type InfiniteCanvasProps = {
  messages: Message[];
  children?: React.ReactNode;
};

// Card dimensions - accounting for rotation
const CARD_WIDTH = 250;
const CARD_HEIGHT = 300;
const CARD_PADDING = 80; // Extra space between cards (increased to account for rotation)

type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

// Better deterministic random number generator
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Normalize to 0-1 range
  return Math.abs(hash % 10000) / 10000;
}

// Check if two bounding boxes overlap
function checkCollision(box1: BoundingBox, box2: BoundingBox): boolean {
  return !(
    box1.x + box1.width < box2.x ||
    box2.x + box2.width < box1.x ||
    box1.y + box1.height < box2.y ||
    box2.y + box2.height < box1.y
  );
}

// Generate consistent random position for a message using radial distribution
// Cards are placed in a true 360-degree bloom from center with collision detection
// Optimized for compact but explorable clustering
function generatePosition(
  messageId: string,
  totalMessages: number,
  currentIndex: number,
  existingPositions: Position[],
): Position {
  const maxAttempts = 100; // Increased attempts to find good spots in tighter space

  // Tighter distribution parameters - optimized to prevent overlap
  const baseRadius = 250; // Closer minimum distance (increased slightly)
  const cardsPerLayer = 8; // Cards per layer (balanced for spacing)
  const layerSpacing = 380; // Tighter layer spacing with better clearance
  const layerRadius = Math.floor(currentIndex / cardsPerLayer) * layerSpacing;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    // Create unique seeds for angle and radius by appending attempt number
    const angleSeed = messageId + "_angle_" + attempt;
    const radiusSeed = messageId + "_radius_" + attempt;

    // Get random angle (0 to 2π) - full 360 degrees
    const angle = seededRandom(angleSeed) * Math.PI * 2;

    // Distance from center - tighter variation
    const radiusVariation = seededRandom(radiusSeed) * 200; // Reduced from 400px
    const radius = baseRadius + radiusVariation + layerRadius;

    // Convert polar to cartesian coordinates
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // Create bounding box for this potential position
    const newBox: BoundingBox = {
      x: x - CARD_WIDTH / 2,
      y: y - CARD_HEIGHT / 2,
      width: CARD_WIDTH + CARD_PADDING,
      height: CARD_HEIGHT + CARD_PADDING,
    };

    // Check collision with existing cards
    let hasCollision = false;
    for (const existingPos of existingPositions) {
      const existingBox: BoundingBox = {
        x: existingPos.x - CARD_WIDTH / 2,
        y: existingPos.y - CARD_HEIGHT / 2,
        width: CARD_WIDTH + CARD_PADDING,
        height: CARD_HEIGHT + CARD_PADDING,
      };

      if (checkCollision(newBox, existingBox)) {
        hasCollision = true;
        break;
      }
    }

    // If no collision, use this position (rounded for consistency)
    if (!hasCollision) {
      return { x: Math.round(x), y: Math.round(y) };
    }
  }

  // If we couldn't find a collision-free spot, place it in next available layer
  const fallbackAngle = seededRandom(messageId + "_fallback") * Math.PI * 2;
  const fallbackRadius = baseRadius + layerRadius + layerSpacing; // Just one layer out
  const x = Math.cos(fallbackAngle) * fallbackRadius;
  const y = Math.sin(fallbackAngle) * fallbackRadius;

  return { x: Math.round(x), y: Math.round(y) };
}

export function InfiniteCanvas({ messages, children }: InfiniteCanvasProps) {
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate positions for all messages with collision detection - memoized to prevent recalculation
  // The last card in the array (first entry chronologically) is always centered
  const messagePositions = useMemo(() => {
    const positions: Position[] = [];
    return messages.map((message, index) => {
      let position: Position;

      // Last card in array is always at center
      if (index === messages.length - 1) {
        position = { x: 0, y: 0 };
        console.log(
          `Card ${index} (FIRST MESSAGE): Positioned at center (0, 0)`,
        );
      } else {
        // All other cards bloom around it
        position = generatePosition(
          message.id,
          messages.length,
          index,
          positions,
        );
      }

      positions.push(position); // Add to existing positions for next iteration
      return {
        ...message,
        position,
      };
    });
  }, [messages]);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const newOffset = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    };
    setOffset(newOffset);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleRecenter = () => {
    setIsTransitioning(true);
    setOffset({ x: 0, y: 0 });

    // Remove transition after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Check if canvas has moved from center
  const hasMoved = offset.x !== 0 || offset.y !== 0;

  // Debug: Log message count
  if (messages.length > 0 && messagePositions.length === messages.length) {
    console.log(`Infinite Canvas: ${messages.length} cards positioned`);
  }

  return (
    <div
      className="relative w-full"
      style={{ height: "600px", minHeight: "600px" }}
    >
      {/* Interactive canvas area */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px]" />

        {/* Canvas container that gets transformed */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
            willChange: isDragging ? "transform" : "auto",
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {/* Render all cards at their random positions */}
          {messagePositions.map((message) => (
            <div
              key={message.id}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${message.position.x}px), calc(-50% + ${message.position.y}px))`,
                pointerEvents: "auto",
              }}
            >
              <CommunityWallCard
                message={message.message}
                patternIndex={message.patternindex}
                author={message.creator_name}
                profilePicture={message.creator_avatar_url}
                rotation={message.rotation}
                className="h-[300px] w-[250px] shadow-[12px_12px_0px_0px_rgba(214,218,222,0.3)]"
              />
            </div>
          ))}
        </div>

        {/* Recenter button - floating in top right, fades in when canvas moves */}
        <button
          onClick={handleRecenter}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-dark-primary shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          style={{
            opacity: hasMoved ? 1 : 0,
            pointerEvents: hasMoved ? "auto" : "none",
          }}
          aria-label="Recenter canvas"
          title="Return to center"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="text-gray-400"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M11.25 4.75L8.75 7L11.25 9.25"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.75 19.25L15.25 17L12.75 14.75"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.75 7H13.25C16.5637 7 19.25 9.68629 19.25 13V13.25"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M14.25 17H10.75C7.43629 17 4.75 14.3137 4.75 11V10.75"
            />
          </svg>
        </button>
      </div>

      {/* Children (e.g., modal) - rendered outside canvas for fixed positioning */}
      {children && children}
    </div>
  );
}
