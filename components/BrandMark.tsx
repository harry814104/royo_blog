import Link from "next/link";

export default function BrandMark() {
  return (
    <Link
      href="/"
      aria-label="Royo blog 首頁"
      className="flex items-center gap-2 text-[15px] font-medium tracking-tight text-ink"
    >
      <svg viewBox="0 0 40 40" className="h-5 w-5" aria-hidden="true">
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
      <span>
        FLÂNEUR<span className="text-forest"> : </span>ROYO
      </span>
    </Link>
  );
}
