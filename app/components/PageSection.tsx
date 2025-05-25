import type React from "react";
import { GridWrapper } from "./GridWrapper";

export function PageSection({
  title,
  children,
  ...props
}: Omit<React.ComponentProps<"section">, "title"> & {
  title: React.ReactNode;
}) {
  return (
    <GridWrapper {...props} className="grid grid-cols-4 sm:px-4">
      <div className="col-span-full sm:col-span-1">
        <div className="-mt-px inline-flex pt-px">
          <div className="text-sm/7 font-semibold text-text-primary">
            {title}
          </div>
        </div>
      </div>
      <div className="col-span-full sm:col-span-3">{children}</div>
    </GridWrapper>
  );
}
