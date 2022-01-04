import { useEffect, useState } from 'react';

import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const links = [
  {
    name: 'Home',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: () => (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
        ></path>
      </svg>
    )
  },
  {
    name: 'About',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/about',
    icon: () => (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="8"
          r="3.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
        ></path>
      </svg>
    )
  },
  {
    name: 'Projects',
    description: "Your customers' data will be safe and secure.",
    href: '/projects',
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.75 13.25V10.25H8.25V11.25C8.25 11.8023 7.80228 12.25 7.25 12.25H5.75C5.19772 12.25 4.75 11.8023 4.75 11.25V5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H7.25C7.80228 4.75 8.25 5.19772 8.25 5.75V6.75H15C15 6.75 19.25 6.75 19.25 11.25C19.25 11.25 17 10.25 14.25 10.25V13.25M10.75 13.25H14.25M10.75 13.25V19.25M14.25 13.25V19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
  {
    name: 'Blog',
    description: "Connect with third-party tools that you're already using.",
    href: '/blog',
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 19.25L9 18.25L18.5625 8.6875C19.46 7.79004 19.46 6.33496 18.5625 5.4375C17.665 4.54004 16.21 4.54004 15.3125 5.4375L5.75 15L4.75 19.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
  {
    name: 'Stats',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '/stats',
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 11.75H8.25L10.25 4.75L13.75 19.25L15.75 11.75H19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
];

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
        } 'hidden md:inline-block p-1 sm:px-6 sm:py-2 rounded-full hover:bg-gray-100 dark:hover:bg-midnight transition-all`}
      >
        <span
          className={`${
            isActive
              ? 'py-1 border-b-2 border-teal-400 dark:border-teal-500'
              : 'capsize'
          }`}
        >
          {text}
        </span>
      </a>
    </NextLink>
  );
}

export function NavMenu({}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  let [isOpen, setIsOpen] = useState(false);

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative z-50 text-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto sm:px-6 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <span className="sr-only">Profile Picture</span>
          <Image
            alt="Braydon Coyer"
            height={48}
            width={48}
            src={siteMetadata.avatarImage}
            placeholder="blur"
            blurDataURL={siteMetadata.avatarImage}
            className="rounded-full"
          />
        </div>
        <div className="-my-2 -mr-2 md:hidden" onClick={() => setIsOpen(true)}>
          <div className="bg-gray-200 dark:bg-midnight text-gray-600 dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 focus:outline-none general-ring-state">
            <span className="sr-only">Open menu</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 18.25H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 12H19.25"
              ></path>
            </svg>
          </div>
        </div>
        <nav className="hidden space-x-6 text-lg md:flex">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/stats" text="Stats" />
        </nav>
        <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-midnight general-ring-state"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <div>
                {resolvedTheme === 'dark' ? (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="3.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 2.75V4.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 6.75L16.0659 7.93416"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.25 12.0001L19.75 12.0001"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 17.2501L16.0659 16.066"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 19.75V21.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.9341 16.0659L6.74996 17.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.25 12.0001L2.75 12.0001"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.93405 7.93423L6.74991 6.75003"
                    ></path>
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                    ></path>
                  </svg>
                )}
              </div>
            )}
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 md:hidden"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />

        <div className="fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span className="sr-only">Close navigation</span>
            <svg
              viewBox="0 0 10 10"
              className="w-2.5 h-2.5 overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <ul className="space-y-6">
            <li>
              <NextLink href="/">
                <a className="hover:text-sky-500 dark:hover:text-sky-400">
                  Home
                </a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/about">
                <a className="hover:text-sky-500 dark:hover:text-sky-400">
                  About
                </a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/projects">
                <a className="hover:text-sky-500 dark:hover:text-sky-400">
                  Projects
                </a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/blog">
                <a className="hover:text-sky-500 dark:hover:text-sky-400">
                  Blog
                </a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/stats">
                <a className="hover:text-sky-500 dark:hover:text-sky-400">
                  Stats
                </a>
              </NextLink>
            </li>
          </ul>
          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-200/10">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="flex items-center justify-center w-full py-4 bg-gray-200 rounded-full dark:bg-midnight-hover general-ring-state"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {mounted && (
                <>
                  <div>
                    {resolvedTheme === 'dark' ? (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                        <circle
                          cx="12"
                          cy="12"
                          r="3.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></circle>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 2.75V4.25"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.25 6.75L16.0659 7.93416"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M21.25 12.0001L19.75 12.0001"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.25 17.2501L16.0659 16.066"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 19.75V21.25"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.9341 16.0659L6.74996 17.25"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4.25 12.0001L2.75 12.0001"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.93405 7.93423L6.74991 6.75003"
                        ></path>
                      </svg>
                    ) : (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                        ></path>
                      </svg>
                    )}
                  </div>
                  {resolvedTheme === 'dark' ? (
                    <p className="ml-3 font-semibold">Change to light theme</p>
                  ) : (
                    <p className="ml-3 font-semibold">Change to dark theme</p>
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
