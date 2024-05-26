import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "app/components/Navbar";
import { siteMetadata } from "app/data/siteMetadata";
import { Footer } from "./components/Footer";

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
          <div className="flex flex-col lg:mx-auto max-w-6xl mx-4">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
