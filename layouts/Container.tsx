import { useEffect, useState } from 'react';

import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const themes = [{ name: 'light' }, { name: 'dark' }, { name: 'emerald' }];

// type Props = {
//   children: React.ReactChildren,
//   articlePage: boolean;
//   ...customMeta;
// }

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`${
          isActive
            ? 'font-bold text-gray-900 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400'
        } 'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-midnight transition-all`}
      >
        <span
          className={`${
            isActive
              ? 'py-1 border-b-2 border-teal-400 dark:border-emerald-500'
              : 'capsize'
          }`}
        >
          {text}
        </span>
      </a>
    </NextLink>
  );
}

export function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;

  return (
    <div className="bg-white dark:bg-dark">
      <nav className="flex items-center justify-between w-full relative max-w-6xl px-4 border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-white  dark:bg-dark bg-opacity-60 dark:text-gray-100">
        {/* <div className="h-12 w-12 bg-gray-500 rounded-full"></div> */}
        <Image
          alt="Braydon Coyer"
          height={48}
          width={48}
          src="/avatar.jpeg"
          className="rounded-full"
        />

        <div className="space-x-4">
          {/* Mobile nav goes here */}
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/activity" text="Activity" />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-12 h-12 bg-gray-200 rounded-full dark:bg-midnight flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main
        className={`flex flex-col mx-auto ${
          props?.articlePage ? 'max-w-4xl' : 'max-w-6xl'
        } justify-center px-4 bg-white dark:bg-dark prose prose-lg md:prose-xl dark:prose-dark`}
      >
        {children}
      </main>
    </div>
  );
}
