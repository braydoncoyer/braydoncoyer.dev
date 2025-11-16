"use client";

interface TocItem {
  depth: number;
  value: string;
  id: string;
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  // Don't render if there are no headings
  if (!toc || toc.length === 0) {
    return null;
  }

  return (
    <nav className="toc-container group fixed right-0 top-32 z-30 hidden xl:block">
      <div className="toc-content">
        {/* Collapsed tab - visible by default */}
        <div className="toc-tab">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="toc-tab-text">Contents</span>
        </div>

        {/* Expanded content - visible on hover */}
        <div className="toc-expanded">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
            On This Page
          </h2>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li
                key={item.id}
                style={{
                  paddingLeft: item.depth === 3 ? "1rem" : "0",
                }}
              >
                <a
                  href={`#${item.id}`}
                  className="toc-link block text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .toc-container {
          max-height: calc(100vh - 8rem);
          overflow-y: auto;
        }

        .toc-content {
          position: relative;
          margin-right: 2rem;
          width: 280px;
          transform: translateX(calc(100% - 3rem));
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toc-container:hover .toc-content {
          transform: translateX(0);
        }

        .toc-tab {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 0.5rem;
          background: linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(139, 92, 246) 100%);
          color: white;
          border-radius: 0.5rem 0 0 0.5rem;
          box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
          opacity: 1;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toc-container:hover .toc-tab {
          opacity: 0;
          pointer-events: none;
        }

        .toc-tab-text {
          font-size: 0.75rem;
          font-weight: 600;
          writing-mode: vertical-rl;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .toc-expanded {
          background: white;
          border: 1px solid rgb(228, 228, 231);
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: -8px 0 24px rgba(0, 0, 0, 0.08);
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .toc-container:hover .toc-expanded {
          opacity: 1;
          pointer-events: auto;
        }

        .toc-link {
          position: relative;
          line-height: 1.5;
        }

        .toc-link::before {
          content: "";
          position: absolute;
          left: -1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: rgb(99, 102, 241);
          transition: width 0.2s ease;
        }

        .toc-link:hover::before {
          width: 0.5rem;
        }

        /* Scrollbar styling for the TOC */
        .toc-container::-webkit-scrollbar {
          width: 4px;
        }

        .toc-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .toc-container::-webkit-scrollbar-thumb {
          background: rgb(212, 212, 216);
          border-radius: 2px;
        }

        .toc-container::-webkit-scrollbar-thumb:hover {
          background: rgb(161, 161, 170);
        }

        @media (prefers-color-scheme: dark) {
          .toc-expanded {
            background: rgb(24, 24, 27);
            border-color: rgb(63, 63, 70);
          }
        }
      `}</style>
    </nav>
  );
}
