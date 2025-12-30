"use client";

import React, { useState, useRef, useEffect } from "react";

interface DetailsProps {
  summary?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

interface DetailsSummaryProps {
  children: React.ReactNode;
}

export function DetailsSummary({ children }: DetailsSummaryProps) {
  return <>{children}</>;
}

export function Details({
  summary,
  children,
  defaultOpen = false,
}: DetailsProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    undefined,
  );
  const contentRef = useRef<HTMLDivElement>(null);

  // Separate DetailsSummary from other children
  const childrenArray = React.Children.toArray(children);
  const summaryChild = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === DetailsSummary,
  ) as React.ReactElement | undefined;
  const contentChildren = childrenArray.filter(
    (child) => !React.isValidElement(child) || child.type !== DetailsSummary,
  );

  // Use either the summary prop or the DetailsSummary child
  const summaryContent = summaryChild ? summaryChild.props.children : summary;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  return (
    <details
      className={`group relative mb-8 overflow-hidden rounded-xl border bg-bg-primary transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-slate-400/30 focus-within:ring-offset-2 focus-within:ring-offset-bg-primary ${
        isOpen
          ? "drama-shadow border-border-primary"
          : "border-border-primary/60 hover:border-border-primary"
      }`}
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary
        className="relative flex cursor-pointer select-none items-center gap-3 px-5 py-4 text-base text-text-primary transition-colors duration-200 [&::-webkit-details-marker]:hidden"
        aria-expanded={isOpen}
      >
        {/* Expand/collapse indicator */}
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded transition-all duration-300 ${
            isOpen
              ? "bg-slate-800 dark:bg-slate-200"
              : "bg-slate-200 group-hover:bg-slate-300 dark:bg-slate-700 dark:group-hover:bg-slate-600"
          }`}
          aria-hidden="true"
        >
          <svg
            className={`h-3 w-3 transition-all duration-300 ease-out ${
              isOpen
                ? "text-white dark:text-slate-800"
                : "text-slate-500 dark:text-slate-400"
            }`}
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>

        <span
          className={`flex-1 leading-relaxed ${isOpen ? "font-medium" : "font-normal"}`}
        >
          {summaryContent}
        </span>
      </summary>

      <div
        ref={contentRef}
        className="relative overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? contentHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        role="region"
        aria-label="Expandable content"
      >
        {/* Subtle top border */}
        <div
          className="absolute left-5 right-5 top-0 h-px bg-border-primary/50"
          aria-hidden="true"
        />

        <div className="px-5 pb-5 pt-4 text-base leading-7 text-text-secondary [&>pre:last-child]:mb-0 [&>*:last-child>pre:last-child]:mb-0">
          {contentChildren}
        </div>
      </div>
    </details>
  );
}
