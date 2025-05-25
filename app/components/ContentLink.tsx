import clsx from "clsx";

function ContentWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ContentLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div>
      <div>
        <span className="text-lg font-semibold leading-none text-text-primary">
          {title}
        </span>
      </div>
      <p className="text-text-secondary">{description}</p>
      {href ? (
        <a
          className="mt-2 flex items-center text-sm font-medium text-indigo-600"
          href={href}
        >
          View
          <svg
            className="relative ml-2.5 mt-px overflow-visible"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </a>
      ) : null}
    </div>
  );

  return (
    <div className="flow-root">
      <ContentWrapper>{content}</ContentWrapper>
    </div>
  );
}
