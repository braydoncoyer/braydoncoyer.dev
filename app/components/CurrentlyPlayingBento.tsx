"use client";

import useSWR from "swr";

import { type CurrentlyPlaying } from "app/db/spotify";
import Link from "next/link";

const favorite: CurrentlyPlaying = {
  artist: "Bear McCreary",
  title: "The Sun Yet Shines",
  albumImageUrl:
    "https://i.scdn.co/image/ab67616d0000b2735cf2a1df961de6e7d7d3c113",
  songUrl: "https://open.spotify.com/track/5hcRWT88VLlbhEMh4efCMy",
  isPlaying: false,
};

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function CurrentlyPlayingBento() {
  const { data: playing, isLoading } = useSWR("/api/listening", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 60000,
  });

  const currentTrack = playing || favorite;
  const isCurrentlyPlaying = !!playing;

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl col-span-5 row-span-6 h-[220px] border border-border-primary flex flex-col hover:bg-white group relative overflow-hidden">
        <p className="text-base animate-pulse text-text-primary">
          Loading music...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl col-span-5 row-span-6 h-[220px] border border-border-primary flex flex-col hover:bg-white group relative overflow-hidden">
      {isCurrentlyPlaying ? (
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-none animate-pulse z-0"
          src="/record_player_waves.png"
          alt="Music waves"
        />
      ) : null}
      <div className="grid grid-cols-2 gap-4 h-full relative z-10">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col h-full justify-between">
            <h2 className="text-base font-medium">
              {isCurrentlyPlaying ? "Currently Playing" : "Recent Favorite"}
            </h2>
            <div>
              <TrackLink track={currentTrack} />
              <p className="mt-1 text-sm text-text-secondary">
                {currentTrack.artist}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <RecordPlayer
            albumImageUrl={currentTrack.albumImageUrl}
            isPlaying={isCurrentlyPlaying}
          />
        </div>
      </div>
    </div>
  );
}

function TrackLink({
  track,
}: {
  track: Pick<CurrentlyPlaying, "title" | "songUrl">;
}) {
  return (
    <Link href={track.songUrl} target="_blank" rel="noopener noreferrer">
      <h3 className="font-medium text-base text-purple-primary/75 hover:text-purple-primary">
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
    <div className="w-[172px] h-[172px] rounded-lg border-2 border-border-primary p-3 relative">
      {/* Dot Pattern */}
      <span className="absolute -z-10">
        <img
          src="/record_player_dots.png"
          alt="Dot Pattern"
          width={114}
          height={114}
        />
      </span>
      {/* Record */}
      <div
        className={`bg-dark-primary ring-1 ring-inset ring-[#6C6D70] rounded-full w-28 h-28 flex items-center justify-center shadow-md ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        {/* Album Cover */}
        <div
          className="w-12 h-12 bg-white rounded-full bg-cover bg-center flex items-center justify-center ring-1 ring-inset ring-[#6C6D70]"
          style={{ backgroundImage: `url(${albumImageUrl})` }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Arm */}
      <img
        className={`absolute top-6 right-2 ${
          !isPlaying ? "-rotate-[30deg] -right-2" : ""
        }`}
        src="/record_player_arm.png"
        alt="Record player arm"
        width={58}
        height={68}
      />

      {/* Volume */}
      <div className="absolute bottom-3 right-3 w-1 h-11 bg-[#D9D9D9] rounded-full"></div>
      <div className="absolute bottom-8 right-2.5 rounded-full w-2 h-2 bg-dark-primary"></div>

      {/* Spotify Logo */}
      <SpotifyLogo />
    </div>
  );
}

function SpotifyLogo() {
  return (
    <svg
      className="w-6 h-6 absolute bottom-2 left-2 text-[#1CD760] opacity-50 hover:opacity-100"
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
