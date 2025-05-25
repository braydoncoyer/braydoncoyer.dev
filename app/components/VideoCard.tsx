"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function formatDuration(seconds: number): string {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;

  return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function VideoCard({
  url,
  target,
  thumbnailUrl,
  videoUrl,
  duration,
  title,
  subtitle,
}: {
  url: string;
  target?: string;
  thumbnailUrl: string;
  videoUrl?: string;
  duration: number;
  title: string;
  subtitle: string;
}) {
  let videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Link href={url} target={target}>
      {videoUrl ? (
        <div
          onPointerLeave={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
            }
          }}
          className="group relative"
        >
          <Image
            src={thumbnailUrl}
            width={400}
            height={225}
            alt=""
            className="aspect-video w-full rounded-lg bg-gray-950 object-cover group-hover:hidden dark:bg-gray-900"
          />
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="hidden aspect-video w-full rounded-lg bg-gray-950 object-cover group-hover:block dark:bg-gray-900"
          />
          <div className="absolute bottom-3 right-3 rounded-sm bg-gray-950/50 p-1 text-xs/3 font-semibold text-white">
            {formatDuration(duration)}
          </div>
        </div>
      ) : (
        <div className="relative">
          <Image
            src={thumbnailUrl}
            width={400}
            height={225}
            alt=""
            className="aspect-video w-full rounded-lg bg-gray-950 object-cover group-hover:hidden dark:bg-gray-900"
          />
          <div className="absolute bottom-3 right-3 rounded-sm bg-gray-950/50 p-1 text-xs/3 font-semibold text-white">
            {formatDuration(duration)}
          </div>
        </div>
      )}
      <p className="mt-4 text-sm/6 font-semibold text-text-primary">{title}</p>
      <p className="text-sm/6 text-text-secondary">{subtitle}</p>
    </Link>
  );
}
