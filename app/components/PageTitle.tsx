import { cx } from "../lib/utils";

type PageTitleProps = {
  title: string;
  textAlign?: "left" | "center" | "right";
  className?: string;
};
export function PageTitle({
  title,
  textAlign = "center",
  className,
}: PageTitleProps) {
  return (
    <div className={cx("w-full", className)}>
      <h1
        className={cx(
          "text-balance text-5xl font-medium tracking-tighter text-text-primary md:text-6xl md:leading-[64px]",
          textAlign === "left"
            ? "text-left"
            : textAlign === "right"
              ? "text-right"
              : "text-center",
        )}
      >
        {title}
      </h1>
    </div>
  );
}
