export function BgGradient() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #6C47FF00 0%, #6C47FF 50%, #6C47FF00 100%)",
        opacity: "6%",
      }}
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-[840px] -translate-x-1/2 overflow-visible blur-3xl"
    ></div>
  );
}
