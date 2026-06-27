"use client";

// 日誌河道(列表頁)— 版型 D:精選頭條 + 網格
// 最新一篇做成大張頭條,其餘排成雜誌感的雙欄網格;分類晶片可即時篩選。

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CATEGORIES,
  CATEGORY_ORDER,
  type CategoryKey,
  type Post,
  formatDate,
  readLabel,
  sortedPosts,
} from "@/lib/posts";
import { ArrowRight, CategoryIcon } from "@/components/JournalIcons";

type Filter = "all" | CategoryKey;

/** 8-digit hex:在分類色後接 alpha,做出淡色底 */
function tint(color: string, alpha = "1c") {
  return `${color}${alpha}`;
}

export default function JournalRiver({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    posts.forEach((p) => (c[p.cat] = (c[p.cat] ?? 0) + 1));
    return c;
  }, [posts]);

  const list = useMemo(() => {
    const filtered =
      filter === "all" ? posts : posts.filter((p) => p.cat === filter);
    return sortedPosts(filtered);
  }, [posts, filter]);

  const feat = list[0];
  const rest = list.slice(1);

  return (
    <div className="mx-auto max-w-[1160px] px-5 py-24 sm:px-10">
      {/* ── intro ── */}
      <section>
        <p className="overline mb-3">Journal · 所有日誌</p>
        <h1 className="text-[clamp(32px,4.6vw,52px)] font-medium leading-[1.08] tracking-tight">
          日誌 · 隨筆與技術
        </h1>
        <p className="mt-4 max-w-xl text-base font-light leading-8 text-ink-soft">
          順著時間往下走 —— 日記、技術、AI、開箱、電影,都是路上的刻痕。先讀最新的那一篇,其餘的慢慢挑。
        </p>
      </section>

      {/* ── 分類晶片(可篩選) ── */}
      <div className="mt-8 flex flex-wrap gap-2">
        <Chip active={filter === "all"} onClick={() => setFilter("all")}>
          全部
          <span className="ml-1.5 text-[11px] opacity-60">{posts.length}</span>
        </Chip>
        {CATEGORY_ORDER.map((key) => {
          const c = CATEGORIES[key];
          const active = filter === key;
          return (
            <Chip
              key={key}
              active={active}
              color={c.color}
              onClick={() => setFilter(active ? "all" : key)}
            >
              <CategoryIcon
                cat={key}
                className="h-[13px] w-[13px]"
                style={{ color: active ? undefined : c.color }}
              />
              {c.label}
              <span className="ml-0.5 text-[11px] opacity-60">
                {counts[key] ?? 0}
              </span>
            </Chip>
          );
        })}
      </div>

      {!feat ? (
        <p className="mt-16 text-center text-sm text-ink-soft">
          這個分類還沒有文章。
        </p>
      ) : (
        <>
          {/* ── 精選頭條 ── */}
          <FeaturedCard post={feat} />

          {/* ── 網格 ── */}
          {rest.length > 0 && (
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <GridCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Chip({
  active,
  color,
  onClick,
  children,
}: {
  active: boolean;
  color?: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
        active
          ? "border-transparent text-cream"
          : "border-[color:var(--sc-line)] bg-paper text-ink-soft hover:text-ink"
      }`}
      style={active ? { background: color ?? "var(--sc-forest)" } : undefined}
    >
      {children}
    </button>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  const c = CATEGORIES[post.cat];
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group nordic-card mt-7 block overflow-hidden transition-all hover:-translate-y-0.5 hover:border-forest/35"
    >
      {/* 封面 */}
      <div
        className="relative grid aspect-[21/9] place-items-center"
        style={{
          background: `linear-gradient(135deg, ${tint(c.color, "26")}, ${tint(
            c.color,
            "10"
          )}), repeating-linear-gradient(45deg, var(--sc-cream-2), var(--sc-cream-2) 11px, color-mix(in srgb, var(--sc-cream-2) 60%, #000 6%) 11px, color-mix(in srgb, var(--sc-cream-2) 60%, #000 6%) 22px)`,
        }}
      >
        <span
          className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-1 text-[11px] font-medium text-cream"
          style={{ background: c.color }}
        >
          <CategoryIcon cat={post.cat} className="h-[13px] w-[13px]" />
          {c.label}
        </span>
        <span className="font-mono text-[11px] tracking-[0.1em] text-ink-mute">
          封面 · COVER
        </span>
      </div>
      {/* 內容 */}
      <div className="p-5 sm:p-6">
        <p className="overline">最新一篇</p>
        <h2 className="mt-2 text-[clamp(20px,3vw,26px)] font-medium leading-[1.4] tracking-tight transition-colors group-hover:text-forest">
          {post.title}
        </h2>
        <p className="mt-2 text-sm leading-7 text-ink-soft">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-2.5 text-xs text-ink-mute">
          <span>{formatDate(post.date)}</span>
          <span className="text-stone">·</span>
          <span>{readLabel(post)}</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-forest">
            繼續讀
            <ArrowRight className="h-[14px] w-[14px]" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function GridCard({ post }: { post: Post }) {
  const c = CATEGORIES[post.cat];
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group nordic-card flex flex-col p-4 transition-all hover:-translate-y-0.5 hover:border-forest/35 sm:p-5"
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className="grid h-7 w-7 place-items-center rounded-[var(--radius-sm)]"
          style={{ background: tint(c.color), color: c.color }}
        >
          <CategoryIcon cat={post.cat} className="h-[14px] w-[14px]" />
        </span>
        <span className="text-[11px] font-semibold" style={{ color: c.color }}>
          {c.label}
        </span>
      </div>
      <h3 className="text-[15px] font-medium leading-[1.5] tracking-tight transition-colors group-hover:text-forest">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-ink-soft">
        {post.excerpt}
      </p>
      <div className="mt-auto flex items-center gap-2 pt-3.5 text-[11px] text-ink-mute">
        <span>{formatDate(post.date)}</span>
        <span className="text-stone">·</span>
        <span>{readLabel(post)}</span>
      </div>
    </Link>
  );
}
