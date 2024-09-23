"use client";
import { useState } from "react";
import { softwareData } from "../data/toolbox";
import Marquee from "./Marque";
import { ShadowBox } from "./ShadowBox";

const items = softwareData.map((item) => (
  <a
    key={item.title}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline"
  >
    <ShadowBox width={120} height={120} label={item.title}>
      <img
        className="w-10 h-10 hover:w-11 hover:h-11 transition-all"
        alt={item.title}
        src={item.imgSrc}
      />
    </ShadowBox>
  </a>
));

export function ToolboxBento() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-6 rounded-2xl col-span-5 row-span-7 h-[300px] border border-border-primary flex flex-col hover:bg-white group relative overflow-hidden"
    >
      <div className="text-center">
        <h2 className="text-base font-medium">Toolbox</h2>
        <p className="mt-1 text-text-secondary">
          Check out my favorite tools and spots around the web.
        </p>
      </div>
      <div
        className="-ml-6 relative overflow-hidden mt-11"
        style={{ width: 1000, position: "relative", overflow: "hidden" }}
      >
        <Marquee
          isHovered={isHovered}
          itemSize={160}
          gap={20}
          items={items}
          speed={100}
          bgColorStart="rgba(255, 255, 255, 1)"
          bgColorEnd="rgba(255, 255, 255, 0)"
          shadowWidth={200}
        />
      </div>
    </div>
  );
}
