import Link from "next/link";
import { fetchSpotifyData } from "../db/fetchSpotifyData";

const defaultSong = {
  name: "Not currently playing",
  artists: [{ name: "Unknown Artist" }],
  external_urls: { spotify: null },
};

export async function CurrentlyPlaying() {
  const currentlyPlaying = await fetchSpotifyData().catch((error) => {
    console.error("Error fetching Spotify data:", error);
    return null;
  });

  const song = currentlyPlaying?.is_playing
    ? currentlyPlaying.item
    : defaultSong;

  return (
    <div>
      <h2>Currently Playing</h2>
      <div>
        {song.external_urls?.spotify ? (
          <Link
            href={song.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{song.name}</p>
          </Link>
        ) : (
          <p>{song.name}</p>
        )}
        <p>{song.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </div>
  );
}
