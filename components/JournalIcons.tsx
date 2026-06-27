// 日誌用的內嵌 SVG 圖示(沿用專案 hand-rolled SVG 慣例,不引入 CDN)。
// 分類圖示對應 Template 的 lucide 名稱:
//   diary→pen-line・web→code・ai→cpu・unbox→package・movie→clapperboard

import { useId } from "react";
import type { CategoryKey } from "@/lib/posts";

type IconProps = { className?: string; style?: React.CSSProperties };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function PenLine({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}
function Code({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}
function Cpu({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}
function Package({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
function Clapperboard({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
      <path d="m6.2 5.3 3.1 3.9" />
      <path d="m12.4 3.4 3.1 4" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

const CAT_ICON: Record<CategoryKey, (p: IconProps) => React.ReactElement> = {
  diary: PenLine,
  web: Code,
  ai: Cpu,
  unbox: Package,
  movie: Clapperboard,
};

export function CategoryIcon({
  cat,
  className,
  style,
}: { cat: CategoryKey } & IconProps) {
  const Cmp = CAT_ICON[cat];
  return <Cmp className={className} style={style} />;
}

export function ArrowRight({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
export function ArrowLeft({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}
export function Clock({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
export function Send({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="M3 11.5 21 3l-8.5 18-2.5-7.5L3 11.5Z" />
    </svg>
  );
}

/** 星等:fill 用 currentColor,半顆用 linear-gradient 遮罩 */
export function Stars({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1 ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i)); // 0 / 0.5 / 1
        return <Star key={i} fill={fill} />;
      })}
    </span>
  );
}

function Star({ fill }: { fill: number }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
      style={{ color: "var(--sc-wood)" }}
    >
      {fill > 0 && fill < 1 && (
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.55l-5.9 3.1 1.12-6.57L2.45 9.44l6.6-.96L12 2.5Z"
        fill={fill >= 1 ? "currentColor" : fill > 0 ? `url(#${id})` : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
