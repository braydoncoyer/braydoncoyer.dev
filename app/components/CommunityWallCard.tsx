import { patterns } from "app/lib/communityWall/types";

type CommunityWallCardProps = {
  patternIndex: number;
  message?: string;
  rotation?: number;
  author?: string;
  profilePicture?: string;
  className?: string;
};

export function CommunityWallCard({
  patternIndex,
  message = "",
  rotation = 0,
  author = "",
  profilePicture = "",
  className = "",
}: CommunityWallCardProps) {
  const pattern = patterns[patternIndex % patterns.length];

  return (
    <div
      className={`flex flex-col items-start justify-between gap-2 rounded-xl border-2 border-[#A5AEB8/12] bg-[#F7F7F8] p-2.5 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`h-full w-full rounded-md bg-gradient-to-b ${pattern.gradient} relative flex items-center justify-center text-balance p-4 text-center`}
      >
        {pattern.svg}
        <p className="z-10 line-clamp-6 text-center text-xl font-bold">
          {message}
        </p>
      </div>
      <div className="flex w-full items-center space-x-2">
        <img
          src={profilePicture}
          className="p2 h-8 w-8 flex-shrink-0 rounded-full border-2 border-transparent ring-1 ring-slate-300"
          alt={`${author}'s avatar`}
        />
        <p className="truncate text-text-secondary">{author}</p>
      </div>
    </div>
  );
}
