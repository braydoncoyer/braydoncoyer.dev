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
      className={`rounded-xl gap-2 border-2 border-[#A5AEB8/12] bg-[#F7F7F8] p-2.5 flex flex-col justify-between items-start ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`w-full h-full rounded-md bg-gradient-to-b ${pattern.gradient} flex items-center text-center text-balance p-4 relative justify-center`}
      >
        {pattern.svg}
        <p className="font-bold text-xl line-clamp-6 z-10 text-center">
          {message}
        </p>
      </div>
      <div className="flex items-center space-x-2 w-full">
        <img
          src={profilePicture}
          className="rounded-full h-8 w-8 p2 flex-shrink-0 ring-1 ring-slate-300 border-2 border-transparent"
          alt={`${author}'s avatar`}
        />
        <p className="text-text-secondary truncate">{author}</p>
      </div>
    </div>
  );
}
