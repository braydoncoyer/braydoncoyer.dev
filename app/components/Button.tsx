import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import { Link } from "./Link";

const variants = {
  primary: clsx(
    "group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]",
    "before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity rounded-full shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)]",
    "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100",
    "after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-full after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm px-4 py-2.5 ring-1 bg-indigo-600 text-white ring-indigo-600",
  ),
  secondary: clsx(
    "group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium",
    "transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)]",
    "before:transition-opacity rounded-full shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)]",
    "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-white/20",
    "before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-full",
    "after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm px-4 py-2.5 ring-1 bg-dark-primary text-white ring-dark-primary",
  ),
  outline: clsx(
    "inline-flex items-center justify-center px-4 py-2.5",
    "rounded-full border border-transparent shadow ring-1 ring-black/10",
    "whitespace-nowrap text-sm font-medium text-gray-950",
    "data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40",
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant]);

  if (typeof props.href === "undefined") {
    return <Headless.Button {...props} className={className} />;
  }

  return <Link {...props} className={className} />;
}
