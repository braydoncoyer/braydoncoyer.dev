"use client";

import useSWR from "swr";

import { type CurrentlyPlaying } from "app/db/spotify";
import Link from "next/link";
import { BentoCard } from "./BentoCard";
import { CirclePattern } from "./SpeakingBento";
import { getCurrentlyPlaying } from "@/app/db/actions";

const favorite: CurrentlyPlaying = {
  artist: "Bear McCreary",
  albumName: "The Lord of the Rings: The Rings of Power",
  albumId: "2Oe6kYDU9YQhun0YrXL9eV",
  artistId: "2ifvIECHAlEgPMBuBOJ0lG",
  title: "The Sun Yet Shines",
  albumImageUrl:
    "https://i.scdn.co/image/ab67616d0000b2735cf2a1df961de6e7d7d3c113",
  songUrl: "https://open.spotify.com/track/5hcRWT88VLlbhEMh4efCMy",
  isPlaying: false,
};

export function CurrentlyPlayingBento() {
  const { data: playing, isLoading } = useSWR(
    "currently-playing",
    getCurrentlyPlaying,
    {
      revalidateOnFocus: true,
      refreshInterval: 60000,
    },
  );

  const currentTrack = playing || favorite;
  const isCurrentlyPlaying = !!playing;

  if (isLoading) {
    return (
      <div className="group relative col-span-5 row-span-6 flex h-[220px] flex-col overflow-hidden rounded-2xl border border-border-primary p-6 hover:bg-white">
        <p className="animate-pulse text-base text-text-primary">
          Loading music...
        </p>
      </div>
    );
  }

  return (
    <BentoCard height="h-[300px]">
      <div className="flex flex-col">
        <div className="z-10 h-full">
          <div className="flex h-full flex-col justify-between">
            <h2 className="mb-2 text-base font-medium">
              {isCurrentlyPlaying ? "Currently Playing" : "Recent Favorite"}
            </h2>
            <p className="max-h-[150px] overflow-hidden text-base text-text-secondary">
              <span className="line-clamp-4 text-ellipsis">
                I&apos;m listening to{" "}
                <a className="font-semibold" href={currentTrack.songUrl}>
                  {currentTrack.title}
                </a>{" "}
                by{" "}
                <a
                  className="font-semibold"
                  href={`https://open.spotify.com/artist/${currentTrack.artistId}`}
                >
                  {currentTrack.artist}
                </a>{" "}
                from the album{" "}
                <a
                  className="font-semibold"
                  href={`https://open.spotify.com/album/${currentTrack.albumId}`}
                >
                  {currentTrack.albumName}
                </a>
              </span>
            </p>
          </div>
          <div className="user-select-none pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:-bottom-1">
            <Record
              albumImageUrl={currentTrack.albumImageUrl}
              isPlaying={isCurrentlyPlaying}
            />
          </div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2">
            <div
              className="h-[210px] w-[210px] rounded-sm bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url(${currentTrack.albumImageUrl})` }}
            ></div>
          </div>
        </div>
        <span className="absolute -bottom-32 left-1/2 -translate-x-1/2">
          <CirclePattern />
        </span>
      </div>
    </BentoCard>
  );
}

function Record({
  albumImageUrl,
  isPlaying,
}: {
  albumImageUrl: string;
  isPlaying: boolean;
}) {
  return (
    <svg
      width="179"
      height="171"
      viewBox="0 0 179 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="89.5" cy="104.5" r="89.5" fill="#3C3C3F" />
      <circle
        cx="89.501"
        cy="104.5"
        r="87.06"
        stroke="#6C6D70"
        strokeWidth="1.3"
      />
      <circle
        cx="89.4992"
        cy="104.5"
        r="80.3"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <circle
        cx="89.4995"
        cy="104.5"
        r="69.56"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <circle
        cx="89.4995"
        cy="104.5"
        r="65.98"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <circle
        cx="89.4999"
        cy="104.5"
        r="49.87"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <g
        className={isPlaying ? "animate-spin-slow" : ""}
        style={{ transformOrigin: "89.5001px 104.5px" }}
      >
        <circle
          cx="89.5001"
          cy="104.5"
          r="39.13"
          fill="#4D4E52"
          stroke="#4D4E52"
          strokeWidth="0.5"
        />
        <clipPath id="albumClip">
          <circle cx="89.5001" cy="104.5" r="35" />
        </clipPath>
        <image
          href={albumImageUrl}
          x="54.5001"
          y="69.5"
          width="70"
          height="70"
          clipPath="url(#albumClip)"
        />
      </g>
      <circle cx="89.5009" cy="104.5" r="3.58" fill="#4D4E52" />
      <circle
        cx="89.5009"
        cy="104.5"
        r="3.33"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      />
      <g filter="url(#filter0_f_161_134)">
        <path
          d="M88.5 97L46 26C84.8 5.60003 121.833 18.5 135.5 27.5L88.5 97Z"
          fill="white"
          fillOpacity="0.15"
          style={{ mixBlendMode: "soft-light" }}
        />
      </g>
      <path
        d="M60 22.5C69.6667 18.6667 95.1 13.3 119.5 22.5"
        stroke="url(#paint0_linear_161_134)"
      />
      <path
        d="M59 46C73.5 38.5 96 34 118.5 45.5"
        stroke="url(#paint1_linear_161_134)"
        strokeOpacity="0.3"
      />
      <defs>
        <filter
          id="filter0_f_161_134"
          x="31"
          y="0.119873"
          width="119.5"
          height="111.88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.5"
            result="effect1_foregroundBlur_161_134"
          />
        </filter>
        <linearGradient
          id="paint0_linear_161_134"
          x1="60"
          y1="19.9601"
          x2="119.5"
          y2="19.9601"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.51" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_161_134"
          x1="60"
          y1="40.9601"
          x2="119.5"
          y2="40.9601"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.51" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TrackLink({
  track,
}: {
  track: Pick<CurrentlyPlaying, "title" | "songUrl">;
}) {
  return (
    <Link href={track.songUrl} target="_blank" rel="noopener noreferrer">
      <h3 className="text-base font-medium text-purple-primary/75 hover:text-purple-primary">
        {track.title}
      </h3>
    </Link>
  );
}

function RecordPlayer({
  albumImageUrl,
  isPlaying,
}: Pick<CurrentlyPlaying, "albumImageUrl" | "isPlaying">) {
  return (
    <div>
      {/* Record */}
      <div
        className={`flex h-28 w-28 items-center justify-center rounded-full bg-dark-primary shadow-md ring-1 ring-inset ring-[#6C6D70] ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        {/* Album Cover */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-cover bg-center ring-1 ring-inset ring-[#6C6D70]"
          style={{ backgroundImage: `url(${albumImageUrl})` }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}

function SpotifyLogo() {
  return (
    <svg
      className="absolute bottom-2 left-2 h-6 w-6 text-[#1CD760] opacity-50 hover:opacity-100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0931 13.5003C18.2645 17.4177 14.4171 19.9217 10.4997 19.0931C6.58231 18.2645 4.07835 14.4171 4.90695 10.4997C5.73555 6.58231 9.58294 4.07835 13.5003 4.90695C17.4177 5.73555 19.9217 9.58294 19.0931 13.5003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.3894 8.63697C9.3894 8.63697 10.5528 8.37197 12.6725 8.82034C14.7923 9.26871 15.7487 9.98208 15.7487 9.98208M9.74694 11.779C9.74694 11.779 10.7371 11.4773 12.0517 11.7554C13.3664 12.0335 14.1495 12.7102 14.1495 12.7102M10.3411 14.5728C10.6619 14.575 11.0314 14.606 11.4309 14.6905C11.8303 14.775 12.1807 14.8962 12.4749 15.0242"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
