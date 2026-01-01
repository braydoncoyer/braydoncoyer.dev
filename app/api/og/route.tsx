import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get the query parameters
    const title = searchParams.get("title") || "Blog Post";
    const imageName = searchParams.get("image") || "";

    // Read images directly from the filesystem
    const publicDir = path.join(process.cwd(), "public");

    // Read the blog image
    let blogImageSrc = "";
    if (imageName) {
      const blogImagePath = path.join(publicDir, "blog", imageName);
      if (fs.existsSync(blogImagePath)) {
        const blogImageBuffer = fs.readFileSync(blogImagePath);
        const ext = path.extname(imageName).toLowerCase().slice(1);
        const mimeType = ext === "jpg" ? "jpeg" : ext;
        blogImageSrc = `data:image/${mimeType};base64,${blogImageBuffer.toString("base64")}`;
      }
    }

    // Read the overlay image
    const overlayPath = path.join(publicDir, "braydoncoyer_og_overlay.png");
    const overlayBuffer = fs.readFileSync(overlayPath);
    const overlaySrc = `data:image/png;base64,${overlayBuffer.toString("base64")}`;

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "blue",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "left",
            position: "relative",
          }}
        >
          {blogImageSrc && (
            <img
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={blogImageSrc}
              alt="article background image"
            />
          )}
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={overlaySrc}
            alt="Gradient overlay"
          />

          <h1
            style={{
              position: "absolute",
              bottom: -48,
              left: 0,
              paddingLeft: 88,
              width: "100%",
              color: "white",
              fontSize: 60,
              lineHeight: 1.2,
              maxWidth: 896,
            }}
          >
            {title}
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
