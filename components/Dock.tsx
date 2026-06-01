"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHideOnScroll } from "@/components/useHideOnScroll";

type IconProps = { className?: string };

function HomeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    </svg>
  );
}
function JournalIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M9 7h7" />
    </svg>
  );
}
function JourneyIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </svg>
  );
}
function ProfileIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const LINKS = [
  { href: "/", label: "首頁", Icon: HomeIcon },
  { href: "/journal", label: "JOURNAL", Icon: JournalIcon },
  { href: "/journey", label: "JOURNEY", Icon: JourneyIcon },
  { href: "/profile", label: "PROFILE", Icon: ProfileIcon },
];

export default function Dock() {
  const pathname = usePathname();
  const hidden = useHideOnScroll();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="dock" data-hidden={hidden} aria-label="主導覽">
      {LINKS.map(({ href, label, Icon }) => {
        const active = isActive(href);
        return (
          <Link
            key={href}
            href={href}
            className="dock-link"
            data-active={active}
            aria-label={label}
            aria-current={active ? "page" : undefined}
          >
            <span className="dock-tip">{label}</span>
            <Icon className="h-[22px] w-[22px]" />
          </Link>
        );
      })}
    </nav>
  );
}
