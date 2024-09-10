"use client";

import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { usePathname } from "next/navigation";

const navigationLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Speaking",
    link: "/speaking",
  },
  {
    name: "Toolbox",
    link: "/toolbox",
  },
];

const Navbar: React.FC = () => {
  const path = usePathname();

  function determineActiveClass(link: string) {
    return path === link ? "text-text-primary" : "text-gray-500";
  }

  return (
    <nav className="w-full flex items-center justify-between h-16 px-4 bleed-border-b bleed-border-primary/50">
      <span className="w-2 h-px bg-slate-400 absolute right-[-4.25px] top-[63px] z-10"></span>
      <span className="w-px h-2 bg-slate-400 absolute right-[-1px] top-[59.6px] z-10"></span>

      <span className="w-2 h-px bg-slate-400 absolute left-[-4.50px] top-[63px] z-10"></span>
      <span className="w-px h-2 bg-slate-400 absolute left-[-1px] top-[59.6px] z-10"></span>
      <div className="w-[104px]">
        {/* Need to match the size of the social bar so that everything correctly centers */}
        <Link href="/">
          <img
            className="w-6 h-6"
            src="/bcoyerlogo_dark.svg"
            alt="Braydon's Logo"
          />
        </Link>
      </div>
      <ul className="flex place-items-center space-x-4 border border-border-primary px-5 py-2 rounded-full text-sm text-gray-500">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.link}
              className={`${determineActiveClass(
                link.link
              )} hover:text-text-primary font-medium`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <SocialPill />
    </nav>
  );
};

export default Navbar;
