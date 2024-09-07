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
  const {
    data: playing,
    error,
    isLoading,
  } = useSWR("/api/listening", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 60000,
  });

  return (
    <>
      <div className="p-6 rounded-2xl col-span-5 row-span-6 h-[220px] border border-border-primary flex flex-col hover:bg-white group">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <div className="flex-grow">
              {playing ? (
                <div>
                  <h2 className="text-base font-semibold mb-4">
                    Currently Playing
                  </h2>
                  <Link
                    href={playing.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-medium text-sm">{playing.title}</h3>
                  </Link>
                  <p className="mt-2 text-xs">{playing.artist}</p>
                </div>
              ) : (
                <div>
                  <h2 className="text-base font-semibold mb-4">
                    Recent Favorite
                  </h2>
                  <h3 className="font-medium text-sm">{favorite.title}</h3>
                  <p className="mt-2 text-xs">{favorite.artist}</p>
                </div>
              )}
            </div>
          </div>
          {playing ? (
            <div className="flex justify-end">
              <img
                className="h-[170px] w-[170px] rounded-full object-cover ring-1 ring-slate-500 p-2 animate-spin-slow bg-black"
                src={playing.albumImageUrl}
                alt={`${playing.title} album cover`}
              />
            </div>
          ) : (
            <div className="flex justify-end">
              <img
                className="h-[170px] w-[170px] rounded-full object-cover ring-1 ring-border-primary p-2"
                src={favorite.albumImageUrl}
                alt={`${favorite.title} album cover`}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
