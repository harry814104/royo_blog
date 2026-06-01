"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/journal", label: "JOURNAL" },
  { href: "/journey", label: "JOURNEY" },
  { href: "/profile", label: "PROFILE" },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--sc-line)] bg-[color:var(--sc-cream)]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-6 sm:px-10">
        <Link href="/" className="flex items-center gap-2 text-lg font-medium tracking-tight">
          <Leaf className="h-5 w-5" />
          <span>
            FLÂNEUR<span className="text-forest"> : </span>ROYO
          </span>
        </Link>

        <ul className="flex items-center gap-5 sm:gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative text-[12px] tracking-[0.16em] transition-colors sm:text-[13px] ${
                  isActive(l.href)
                    ? "font-medium text-forest"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-forest" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <polygon
        points="10,7 30,7 26,30 14,30"
        fill="none"
        stroke="var(--sc-forest)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <line
        x1="20"
        y1="16"
        x2="20"
        y2="28"
        stroke="var(--sc-forest)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="35" r="2.6" fill="var(--sc-forest)" />
    </svg>
  );
}
