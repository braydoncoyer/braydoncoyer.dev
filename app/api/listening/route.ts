import { NextResponse } from "next/server";

import { getCurrentlyPlaying } from "app/db/spotify";

export async function GET() {
  const currentlyPlaying = await getCurrentlyPlaying();
  console.log(currentlyPlaying);
  return NextResponse.json(currentlyPlaying);
}

export const revalidate = 0;
