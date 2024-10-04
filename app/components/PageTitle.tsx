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
          "text-text-primary text-balance font-medium text-6xl leading-[64px] tracking-tighter",
          textAlign === "left"
            ? "text-left"
            : textAlign === "right"
            ? "text-right"
            : "text-center"
        )}
      >
        {title}
      </h1>
    </div>
  );
}
