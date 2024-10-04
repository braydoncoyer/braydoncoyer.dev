import type { Metadata } from "next";
import "./globals.css";
import Navbar from "app/components/Navbar";
import { siteMetadata } from "app/data/siteMetadata";
import { Footer } from "./components/Footer";
import { BgGradient } from "./components/BgGradient";
import { cx } from "./lib/utils";
import { HorizontalLine } from "./components/HorizontalLine";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-bg-primary ${GeistMono.variable} ${GeistSans.variable}`}
    >
      <head></head>
      <body className="max-w-7xl md:flex-row lg:mx-auto font-sans">
        <main className={cx("border-x border-border-primary/50 relative")}>
          <Navbar />
          <HorizontalLine />
          <div className="grid grid-cols-[32px_1fr_32px]">
            <div className="w-full border-r border-border-primary opacity-75 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
            <div className="col-span-1 relative">
              <BgGradient />
              {children}
            </div>
            <div className="w-full border-l border-border-primary opacity-75 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
