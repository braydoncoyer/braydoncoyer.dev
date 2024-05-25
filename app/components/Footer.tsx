import Link from "next/link";
import { HorizontalLine } from "./HorizontalLine";

export function Footer() {
  return (
    <>
      <div className="max-w-7xl border-border-primary/50 relative">
        <HorizontalLine />
        <div className="max-w-6xl lg:mx-auto flex divide-x">
          <div className="flex flex-col text-xs w-full py-6">
            <div className="space-y-6 flex-grow">
              <Link className="inline-block" href="/">
                <img
                  className="w-10 h-10"
                  src="/bcoyerlogo_dark.svg"
                  alt="Braydon's Logo"
                />
              </Link>
              <p className="w-60 text-gray-500">
                I’m Braydon - a senior front-end developer, blogger and public
                speaker. Thanks for checking out my site!
              </p>
            </div>
            <p className="mt-6 text-gray-500">
              © {new Date().getFullYear()} Braydon Coyer
            </p>
          </div>
          <div className="flex flex-col text-xs w-full py-6 items-end pl-16">
            <div className="flex w-full justify-between">
              <div>
                <span className="text-base font-semibold mb-4 inline-block  text-text-primary">
                  General
                </span>
                <ul className="text-xs space-y-2 text-gray-500">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-base font-semibold mb-4 inline-block  text-text-primary">
                  Specifics
                </span>
                <ul className="text-xs space-y-2 text-gray-500">
                  <li>
                    <Link href="/toolbox">Toolbox</Link>
                  </li>
                  <li>
                    <Link href="/speaking">Speaking</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/stats">Stats</Link>
                  </li>
                  <li>
                    <Link href="/community-wall">Community Wall</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-base font-semibold mb-4 inline-block text-text-primary">
                  Extra
                </span>
                <ul className="text-xs space-y-2 text-gray-500">
                  <li>
                    <Link href="/changelog">Changelog</Link>
                  </li>
                  <li>
                    <Link href="/connections">Connections</Link>
                  </li>
                  <li>
                    <Link href="/resume">Resume</Link>
                  </li>
                  <li>
                    <Link href="/snippets">Snippets</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <HorizontalLine />
      </div>
      <div className="h-16 w-full"></div>
    </>
  );
}
