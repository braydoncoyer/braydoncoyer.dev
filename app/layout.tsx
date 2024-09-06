import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "app/components/Navbar";
import { siteMetadata } from "app/data/siteMetadata";
import { Footer } from "./components/Footer";
import { BgGradient } from "./components/BgGradient";

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
      <body className="max-w-7xl md:flex-row lg:mx-auto">
        <main
          className={cx(
            "border-x border-border-primary/50 relative",
            inter.className
          )}
        >
          <Navbar />
          <div className="grid grid-cols-[32px_1fr_32px]">
            <div className="column border-r border-border-primary/50"></div>
            <div className="col-span-1 relative">
              <BgGradient />
              {children}
            </div>
            <div className=" column border-l border-border-primary/50"></div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
