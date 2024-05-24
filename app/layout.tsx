import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { siteMetadata } from "./data/siteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg-primary">
      {/* <head>Test</head> */}

      <body className="flex flex-col max-w-6xl mx-4 mb-40 md:flex-row lg:mx-auto">
        <main
          className={cx("border-x border-border-primary/50", inter.className)}
        >
          <Navbar />
          {/* Nav to go here */}
          {children}
        </main>
      </body>
    </html>
  );
}
