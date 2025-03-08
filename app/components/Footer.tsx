import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";

export function Footer() {
  return (
    <>
      <div className="relative max-w-7xl border-border-primary/50">
        <GridWrapper>
          <div className="max-w-6xl divide-y px-4 lg:mx-auto lg:flex lg:divide-x lg:px-4 xl:px-0">
            <div className="flex w-full py-6 text-sm">
              <div>
                <div className="flex-grow space-y-6">
                  <Link className="inline-block" href="/">
                    <img
                      className="h-10 w-10"
                      src="/bcoyerlogo_dark.svg"
                      alt="Braydon's Logo"
                    />
                  </Link>
                  <p className="w-60 leading-5 text-gray-500">
                    I&apos;m Braydon - a senior front-end developer, blogger and
                    public speaker. Thanks for checking out my site!
                  </p>
                </div>
                <p className="mt-6 text-gray-500">
                  © {new Date().getFullYear()} Braydon Coyer
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <SocialPill />
              </div>
            </div>
            <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
              <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
                <div>
                  <span className="mb-4 inline-block text-base font-medium text-text-primary">
                    General
                  </span>
                  <ul className="space-y-2 text-sm text-gray-500">
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
                  <span className="mb-4 inline-block text-base font-medium text-text-primary">
                    Specifics
                  </span>
                  <ul className="space-y-2 text-sm text-gray-500">
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
                  <span className="mb-4 inline-block text-base font-medium text-text-primary">
                    Extra
                  </span>
                  <ul className="space-y-2 text-sm text-gray-500">
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
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}
