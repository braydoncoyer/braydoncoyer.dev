import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

const themes = [{ name: 'light' }, { name: 'dark' }, { name: 'emerald' }];

export function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;

  return (
    <div className="bg-white dark:bg-dark">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-9 h-9 bg-gray-300 rounded-lg dark:bg-grey-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-red-500 dark:text-white"
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
      <main className="flex flex-col mx-auto max-w-4xl justify-center px-4 bg-white dark:bg-dark prose md:prose-lg dark:prose-dark">
        {children}
      </main>
    </div>
  );
}
