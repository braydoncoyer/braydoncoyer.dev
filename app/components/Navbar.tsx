"use client";

import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { usePathname } from "next/navigation";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { useEffect, useState } from "react";

type NavigationLink = {
  name: string;
  link: string;
};

const navigationLinks: readonly NavigationLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Projects", link: "/projects" },
  { name: "Speaking", link: "/speaking" },
  { name: "Toolbox", link: "/toolbox" },
] as const;

const Navbar: React.FC = () => {
  return (
    <header role="banner">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

function DesktopNav() {
  const path = usePathname();

  const determineActiveClass = (link: string): string => {
    return path === link ? "text-text-primary" : "text-gray-500";
  };

  return (
    <nav
      aria-label="Desktop navigation"
      className="hidden w-full md:flex items-center justify-between h-16 px-4 bleed-border-b bleed-border-primary/50"
    >
      <span className="w-2 h-px bg-slate-400 absolute right-[-4.25px] top-[63px] z-10"></span>
      <span className="w-px h-2 bg-slate-400 absolute right-[-1px] top-[59.6px] z-10"></span>

      <span className="w-2 h-px bg-slate-400 absolute left-[-4.50px] top-[63px] z-10"></span>
      <span className="w-px h-2 bg-slate-400 absolute left-[-1px] top-[59.6px] z-10"></span>
      <div className="w-[104px]">
        <Link href="/" aria-label="Home">
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
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <nav
      aria-label="Mobile navigation"
      className="flex items-center gap-2.5 md:hidden h-16 px-3 justify-between"
    >
      <NavLogo onClickCallback={setIsOpen} />

      <CircleBtn
        onClickCallback={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      />

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 bg-bg-primary focus:outline-none md:hidden z-50 py-1"
      >
        <DialogPanel id="mobile-menu" className="size-full overflow-y-auto">
          <div className="flex h-14 items-center justify-between px-3">
            <NavLogo onClickCallback={setIsOpen} />
            <CloseButton className="rounded-full border border-border-primary p-2">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
                <path
                  fill="#3C3C3F"
                  d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
                ></path>
              </svg>
            </CloseButton>
          </div>
          <div className="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
            {navigationLinks.map(({ name, link }) => (
              <Link
                href={link}
                key={link}
                className={`rounded-lg px-3 py-2 text-xl/9 font-medium ${
                  path === link ? "text-text-primary" : "text-text-secondary"
                } data-active:bg-gray-950/5`}
                aria-current={path === link ? "page" : undefined}
              >
                {name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}

interface NavLogoProps {
  onClickCallback: (value: boolean) => void;
}

const NavLogo: React.FC<NavLogoProps> = ({ onClickCallback }) => {
  return (
    <Link href="/" onClick={() => onClickCallback(false)} aria-label="Home">
      <img
        className="w-8 h-8"
        src="/bcoyerlogo_dark.svg"
        alt="Braydon's Logo"
      />
    </Link>
  );
};

interface CircleBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClickCallback: () => void;
  "aria-expanded": boolean;
  "aria-controls": string;
  "aria-label": string;
}

const CircleBtn = ({
  onClickCallback,
  className = "",
  ...props
}: CircleBtnProps): JSX.Element => {
  return (
    <button
      className={`rounded-full border border-border-primary p-2 ${className}`}
      onClick={onClickCallback}
      {...props}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 4.99599C0 4.77599 0.105357 4.56501 0.292893 4.40945C0.48043 4.2539 0.734784 4.1665 1 4.1665H19C19.2652 4.1665 19.5196 4.2539 19.7071 4.40945C19.8946 4.56501 20 4.77599 20 4.99599C20 5.21598 19.8946 5.42696 19.7071 5.58252C19.5196 5.73808 19.2652 5.82547 19 5.82547H1C0.734784 5.82547 0.48043 5.73808 0.292893 5.58252C0.105357 5.42696 0 5.21598 0 4.99599ZM5 9.99942C5 9.77943 5.10536 9.56845 5.29289 9.41289C5.48043 9.25733 5.73478 9.16994 6 9.16994H19C19.2652 9.16994 19.5196 9.25733 19.7071 9.41289C19.8946 9.56845 20 9.77943 20 9.99942C20 10.2194 19.8946 10.4304 19.7071 10.586C19.5196 10.7415 19.2652 10.8289 19 10.8289H6C5.73478 10.8289 5.48043 10.7415 5.29289 10.586C5.10536 10.4304 5 10.2194 5 9.99942ZM11.8333 14.1742C11.5681 14.1742 11.3138 14.2616 11.1262 14.4172C10.9387 14.5727 10.8333 14.7837 10.8333 15.0037C10.8333 15.2237 10.9387 15.4347 11.1262 15.5902C11.3138 15.7458 11.5681 15.8332 11.8333 15.8332H19C19.2652 15.8332 19.5196 15.7458 19.7071 15.5902C19.8946 15.4347 20 15.2237 20 15.0037C20 14.7837 19.8946 14.5727 19.7071 14.4172C19.5196 14.2616 19.2652 14.1742 19 14.1742H11.8333Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default Navbar;
