import { Changelog } from "@/.velite";
import { fetchAndSortChangelogEntrees } from "app/lib/utils";
import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";

export function CurrentlyReadingBento() {
  return (
    <BentoCard height="h-full" className="group">
      <h2 className="font-medium mb-2">Currently Reading</h2>
      <div className="h-full relative">
        <div className="absolute h-full top-6 left-10 transition-transform duration-300 ease-in-out origin-bottom-left group-hover:-rotate-3">
          <BookCover />
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="w-full h-full bg-gradient-to-t from-white via-transparent to-transparent absolute inset-0"></div>
    </BentoCard>
  );
}

function BookCover() {
  return (
    <div className="aspect-video w-96 h-full bg-red-500 rounded overflow-hidden relative">
      <div className="h-full w-2 bg-slate-900/20 blur-sm absolute left-5"></div>
      <img
        src="/red_rising_cover.jpeg"
        alt="Dune book cover"
        className="h-full"
      />
    </div>
  );
}
