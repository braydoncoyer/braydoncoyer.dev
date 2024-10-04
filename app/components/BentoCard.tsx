import React from "react";

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  showHoverGradient?: boolean;
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  showHoverGradient = true,
}: BentoCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl border border-border-primary flex flex-col group hover:bg-white relative overflow-hidden ${height} row-span-${rowSpan} col-span-${colSpan} ${className}`}
    >
      {showHoverGradient && (
        <div className="absolute inset-0 bg-gradient-to-tl from-[#6C47FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-30 user-select-none pointer-events-none"></div>
      )}
      {children}
    </div>
  );
}
