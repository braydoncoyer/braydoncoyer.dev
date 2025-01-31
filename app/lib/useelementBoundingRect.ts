import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function useElementBoundingRect(
  ref: React.RefObject<HTMLElement>,
): Position {
  const [boundingRect, setBoundingRect] = useState<Position>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function updateRect() {
      const rect = ref.current?.getBoundingClientRect();
      setBoundingRect({
        x: rect?.left ?? 0,
        y: rect?.top ?? 0,
        width: rect?.width ?? 0,
        height: rect?.height ?? 0,
      });
    }

    updateRect();

    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, [ref]);

  return boundingRect;
}
