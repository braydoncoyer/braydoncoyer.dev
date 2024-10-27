import React from "react";
import Link from "next/link";

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  showHoverGradient?: boolean;
  linkTo?: string;
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  showHoverGradient = true,
  linkTo,
}: BentoCardProps) {
  const cardContent = (
    <div
      className={`bg-bg-primary p-6 rounded-2xl border border-border-primary flex flex-col group hover:bg-white relative overflow-hidden ${height} row-span-${rowSpan} col-span-${colSpan} ${className}`}
    >
      {showHoverGradient && (
        <div className="absolute inset-0 bg-gradient-to-tl from-[#6C47FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-30 user-select-none pointer-events-none"></div>
      )}
      {children}
    </div>
  );

  if (linkTo) {
    return linkTo.startsWith("/") ? (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    ) : (
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
