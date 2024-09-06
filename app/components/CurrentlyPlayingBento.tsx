import Link from "next/link";
import { fetchSpotifyData } from "../db/fetchSpotifyData";

const defaultSong = {
  name: "Not currently playing anything",
  artists: [{ name: "Check back later!" }],
  external_urls: { spotify: null },
};

export async function CurrentlyPlayingBento() {
  const currentlyPlaying = await fetchSpotifyData().catch((error) => {
    console.error("Error fetching Spotify data:", error);
    return null;
  });

  const song = currentlyPlaying?.is_playing
    ? currentlyPlaying.item
    : defaultSong;

  const albumImageUrl =
    song.album?.images.find((img) => img.height === 300)?.url ||
    "/default-album-cover.jpg";

  const songUrl = song.external_urls?.spotify;

  return (
    <>
      <div className="p-6 rounded-2xl col-span-5 row-span-6 h-[220px] border border-border-primary flex flex-col bg-gradient-to-tl hover:from-violet-100 hover:to-white hover:to-50% transition-all duration-200 group">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <div className="flex-grow">
              <h2 className="text-base font-semibold mb-4">
                Currently Playing
              </h2>
              {songUrl ? (
                <Link href={songUrl} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-medium text-sm">{song.name}</h3>
                </Link>
              ) : (
                <h3 className="font-medium text-sm">{song.name}</h3>
              )}
              <p className="mt-2 text-xs">
                {song.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
            <svg
              className="mt-auto" // Added mt-auto to push SVG to the bottom
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0931 13.5003C18.2645 17.4177 14.4171 19.9217 10.4997 19.0931C6.58231 18.2645 4.07835 14.4171 4.90695 10.4997C5.73555 6.58231 9.58294 4.07835 13.5003 4.90695C17.4177 5.73555 19.9217 9.58294 19.0931 13.5003Z"
                stroke="#0AD250"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.3894 8.63697C9.3894 8.63697 10.5528 8.37197 12.6725 8.82034C14.7923 9.26871 15.7487 9.98208 15.7487 9.98208M9.74694 11.779C9.74694 11.779 10.7371 11.4773 12.0517 11.7554C13.3664 12.0335 14.1495 12.7102 14.1495 12.7102M10.3411 14.5728C10.6619 14.575 11.0314 14.606 11.4309 14.6905C11.8303 14.775 12.1807 14.8962 12.4749 15.0242"
                stroke="#0AD250"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          {songUrl ? (
            <div className="flex justify-end">
              <img
                className="h-[170px] w-[170px] rounded-2xl object-cover ring-1 ring-border-primary p-2"
                src={albumImageUrl}
                alt={`${song.name} album cover`}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
