export async function fetchSpotifyData() {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
      },
      // Add cache: 'no-store' to disable caching
      cache: "no-store",
    }
  );
  if (!res.ok) {
    console.error("Failed to fetch Spotify data:", res.status, res.statusText);
    throw new Error("Failed to fetch Spotify data");
  };
  return res.json();
}
