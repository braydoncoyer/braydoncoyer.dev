import "server-only";

export type CurrentlyPlaying = {
  albumImageUrl: string;
  albumName: string;
  albumId: string;
  artist: string;
  artistId: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

// Get the access token from Spotify
async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
  ).toString("base64");
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", process.env.SPOTIFY_REFRESH_TOKEN!);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const result = await response.json();
  return result.access_token;
}

// Get the currently playing song from Spotify
export async function getCurrentlyPlaying() {
  const access_token = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    { headers: { Authorization: `Bearer ${access_token}` }, cache: "no-store" },
  );

  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const albumName = song.item.album.name;
  const albumId = song.item.album.id;
  // @ts-ignore
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const artistId = song.item.artists[0]?.id || "";
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    albumName,
    albumId,
    artist,
    artistId,
    isPlaying,
    songUrl,
    title,
  } as CurrentlyPlaying;
}
