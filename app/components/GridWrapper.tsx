import clsx from "clsx";

export function GridWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "relative w-full",
        "before:absolute before:top-0 before:h-px before:bg-border-primary/50",
        "before:inset-x-0",
        "after:inset-x-0",
        "after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
      )}
    >
      {children}
    </div>
  );
}
