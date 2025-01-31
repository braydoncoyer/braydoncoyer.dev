import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const response = await fetch(
      "https://app.loops.so/api/v1/contacts/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
        },
        body: JSON.stringify({ email, userGroup: "Blogfolio" }),
      },
    );

    if (response.ok) {
      return NextResponse.json({ message: "contact created" });
    } else {
      return NextResponse.json(
        { message: "please try again" },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "please try again" }, { status: 500 });
  }
}
