"use client";

// 日誌詳情頁(內頁)— 共用一套「閱讀骨架」,主題模組依文章類型加掛:
//   技術分享→程式碼區塊・日記/開箱→照片・電影→海報星等卡・任何主題→引言
// 骨架:[左:目錄] [右:文章] → 上下篇 → 留言

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  CATEGORIES,
  type Block,
  type Post,
  formatDate,
  neighbors,
  tocOf,
} from "@/lib/posts";
import {
  ArrowLeft,
  ArrowRight,
  CategoryIcon,
  Clock,
  Send,
  Stars,
} from "@/components/JournalIcons";

function tint(color: string, alpha = "1c") {
  return `${color}${alpha}`;
}

export default function JournalPost({ post }: { post: Post }) {
  const c = CATEGORIES[post.cat];
  const toc = useMemo(() => tocOf(post), [post]);
  const { prev, next } = useMemo(() => neighbors(post.slug), [post.slug]);
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");

  // 目錄高亮(scrollspy)
  useEffect(() => {
    if (toc.length === 0) return;
    const onScroll = () => {
      let cur = toc[0]?.id ?? "";
      for (const { id } of toc) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      }
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  return (
    <div className="pb-28">
      <div className="mx-auto grid max-w-[1040px] gap-0 px-5 pb-10 pt-24 sm:px-8 lg:grid-cols-[212px_minmax(0,724px)] lg:gap-[52px]">
        {/* ── 左側:目錄 ── */}
        <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
          <Link
            href="/journal"
            className="mb-8 inline-block text-sm text-ink-soft transition-colors hover:text-forest"
          >
            ← 回到日誌河道
          </Link>
          {toc.length > 0 && (
            <>
              <p className="overline mb-3.5">目錄</p>
              <nav className="flex flex-col border-l border-[color:var(--sc-line)]">
                {toc.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={`-ml-px border-l-2 py-[7px] pl-4 text-[13px] leading-6 transition-colors ${
                      activeId === h.id
                        ? "border-forest font-medium text-forest"
                        : "border-transparent text-ink-mute hover:text-ink"
                    }`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </>
          )}
          <div className="mt-6 flex items-center gap-2 text-[11px] text-ink-mute">
            <Clock className="h-[13px] w-[13px]" />
            <span>閱讀約 {post.read} 分鐘</span>
          </div>
        </aside>

        {/* ── 右側:文章本體 ── */}
        <article className="min-w-0">
          <Link
            href="/journal"
            className="mb-5 inline-block text-sm text-ink-soft transition-colors hover:text-forest lg:hidden"
          >
            ← 回到日誌河道
          </Link>

          {/* 標題區(所有主題共用) */}
          <div className="mb-3.5 flex items-center gap-2.5">
            <span
              className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-1 text-xs font-semibold"
              style={{ background: tint(c.color), color: c.color }}
            >
              <CategoryIcon cat={post.cat} className="h-[13px] w-[13px]" />
              {c.label}
            </span>
            <time className="text-xs text-ink-mute">{formatDate(post.date)}</time>
          </div>
          <h1 className="text-[clamp(28px,4.4vw,42px)] font-medium leading-[1.25] tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-ink-soft">{post.lead}</p>

          {/* 電影主題:海報＋星等卡 */}
          {post.movie && <MovieCard movie={post.movie} />}

          {/* 內文流 */}
          <div className="mt-2">
            {post.body.map((b, i) => (
              <BlockView key={i} block={b} accent={c.color} />
            ))}
          </div>

          {/* 上一篇 / 下一篇 */}
          <Pager prev={prev} next={next} />

          {/* 留言 */}
          <Comments slug={post.slug} />
        </article>
      </div>
    </div>
  );
}

function BlockView({ block, accent }: { block: Block; accent: string }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          id={block.id}
          className="mt-9 scroll-mt-24 text-[22px] font-medium leading-[1.4] tracking-tight"
        >
          {block.text}
        </h2>
      );
    case "para":
      return (
        <p className="mt-4 text-base leading-[1.95] text-ink-soft">{block.text}</p>
      );
    case "code":
      return (
        <div
          className="mt-5 overflow-hidden rounded-[13px] border"
          style={{ background: "#1b2024", borderColor: "rgba(245,240,230,.08)" }}
        >
          <div
            className="flex items-center gap-2 border-b px-3.5 py-2.5"
            style={{ borderColor: "rgba(245,240,230,.07)" }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--sc-wood)" }}
            />
            <span className="font-mono text-[11px] tracking-wide text-[#8e887c]">
              {block.lang}
            </span>
          </div>
          <pre className="overflow-x-auto px-[18px] py-4">
            <code className="font-mono text-[13px] leading-[1.75] text-[#d6cfc0]">
              {block.code}
            </code>
          </pre>
        </div>
      );
    case "figure":
      return (
        <figure className="mt-6">
          <div
            className="grid aspect-[16/10] place-items-center rounded-[14px] border border-[color:var(--sc-line)] font-mono text-[11px] tracking-[0.1em] text-ink-mute"
            style={{
              background:
                "repeating-linear-gradient(45deg, var(--sc-cream-2), var(--sc-cream-2) 11px, color-mix(in srgb, var(--sc-cream-2) 55%, #000 7%) 11px, color-mix(in srgb, var(--sc-cream-2) 55%, #000 7%) 22px)",
            }}
          >
            {block.label}
          </div>
          <figcaption className="mt-2 text-center text-xs text-ink-mute">
            {block.caption}
          </figcaption>
        </figure>
      );
    case "quote":
      return (
        <blockquote
          className="mt-7 border-l-[3px] py-1 pl-[22px]"
          style={{ borderColor: accent }}
        >
          <p className="text-[19px] leading-[1.7] text-ink">{block.text}</p>
          {block.cite && (
            <cite className="mt-2 block text-[13px] not-italic text-ink-mute">
              {block.cite}
            </cite>
          )}
        </blockquote>
      );
  }
}

function MovieCard({ movie }: { movie: NonNullable<Post["movie"]> }) {
  return (
    <div className="nordic-card mt-7 flex gap-5 p-5">
      <div
        className="grid aspect-[2/3] w-28 shrink-0 place-items-center rounded-[10px] border border-[color:var(--sc-line)]"
        style={{
          background:
            "repeating-linear-gradient(45deg, var(--sc-cream-2), var(--sc-cream-2) 9px, color-mix(in srgb, var(--sc-cream-2) 60%, #000 6%) 9px, color-mix(in srgb, var(--sc-cream-2) 60%, #000 6%) 18px)",
        }}
      >
        <span
          className="font-mono text-[10px] tracking-[0.1em] text-ink-mute"
          style={{ writingMode: "vertical-rl" }}
        >
          {movie.posterLabel ?? "海報 · POSTER"}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="flex items-center gap-2">
          <Stars rating={movie.rating} />
          <span className="ml-2 text-[22px] font-bold tracking-tight">
            {movie.rating}
          </span>
          <span className="text-xs text-ink-mute">/ 5</span>
        </div>
        <div className="mt-3.5 flex flex-col gap-1.5">
          {movie.rows.map((r) => (
            <div key={r.key} className="flex gap-2.5 text-[13px]">
              <span className="w-12 shrink-0 text-ink-mute">{r.key}</span>
              <span className="text-ink-soft">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pager({ prev, next }: { prev?: Post; next?: Post }) {
  return (
    <nav className="mt-12 grid grid-cols-1 gap-3.5 border-t border-[color:var(--sc-line)] pt-7 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/journal/${prev.slug}`}
          className="nordic-card flex flex-col gap-1.5 p-4 transition-colors hover:border-forest/40"
        >
          <span className="flex items-center gap-1.5 text-[11px] text-ink-mute">
            <ArrowLeft className="h-[13px] w-[13px]" />
            上一篇 · {CATEGORIES[prev.cat].label}
          </span>
          <span className="text-sm font-medium leading-[1.5]">{prev.title}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`/journal/${next.slug}`}
          className="nordic-card flex flex-col items-end gap-1.5 p-4 text-right transition-colors hover:border-forest/40"
        >
          <span className="flex items-center gap-1.5 text-[11px] text-ink-mute">
            下一篇 · {CATEGORIES[next.cat].label}
            <ArrowRight className="h-[13px] w-[13px]" />
          </span>
          <span className="text-sm font-medium leading-[1.5]">{next.title}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
    </nav>
  );
}

// ── 留言(存在 localStorage,純前端) ──────────────────

interface Comment {
  id: number;
  name: string;
  body: string;
  time: string; // ISO
}

const SEED: Record<string, Comment[]> = {
  "rewrite-blog-with-nextjs-16": [
    {
      id: 1,
      name: "小高",
      body: "Server Actions 真的把表單心智負擔砍半,推!",
      time: "2026-01-19T09:12:00",
    },
    {
      id: 2,
      name: "Ray",
      body: "請問 Tailwind 4 的設定檔有踩到什麼雷嗎?想跟進。",
      time: "2026-01-20T21:40:00",
    },
  ],
};

function fmtTime(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())} ${p(
    d.getHours()
  )}:${p(d.getMinutes())}`;
}

function Comments({ slug }: { slug: string }) {
  const storageKey = `royo_comments_${slug}`;
  const [list, setList] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const loaded = useRef(false);

  // 首載:讀 localStorage,沒有就用 seed(初值為空陣列,故僅在有內容時才 setState)
  useEffect(() => {
    let initial: Comment[] = SEED[slug] ?? [];
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) initial = JSON.parse(raw) as Comment[];
    } catch {
      /* ignore */
    }
    if (initial.length > 0) setList(initial);
    loaded.current = true;
  }, [storageKey, slug]);

  // 變動時寫回(略過首載)
  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(list));
    } catch {
      /* ignore */
    }
  }, [list, storageKey]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = body.trim();
    if (!text) return;
    setList((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim() || "訪客",
        body: text,
        time: new Date().toISOString(),
      },
    ]);
    setBody("");
  }

  return (
    <section className="mt-12">
      <div className="mb-4.5 flex items-baseline gap-2.5">
        <h2 className="text-xl font-medium">留言</h2>
        <span className="text-[13px] text-ink-mute">{list.length} 則</span>
      </div>

      <form onSubmit={submit} className="nordic-card p-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="暱稱(留空即為訪客)"
          maxLength={24}
          className="w-full border-none bg-transparent px-0.5 py-1 text-sm font-semibold text-ink outline-none placeholder:text-ink-mute"
        />
        <div className="my-2.5 h-px bg-[color:var(--sc-line)]" />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="留下你的想法⋯⋯"
          rows={3}
          className="w-full resize-y border-none bg-transparent text-[15px] leading-[1.7] text-ink-soft outline-none placeholder:text-ink-mute"
        />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[11px] text-ink-mute">
            留言儲存在這台裝置的瀏覽器
          </span>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-forest px-[18px] py-2.5 text-[13px] font-semibold text-cream"
          >
            <Send className="h-[14px] w-[14px]" />
            送出
          </button>
        </div>
      </form>

      <div className="mt-4.5 flex flex-col">
        {list.length === 0 ? (
          <div className="py-8 text-center text-[13px] text-ink-mute">
            還沒有留言,當第一個吧。
          </div>
        ) : (
          [...list].reverse().map((cm) => (
            <div
              key={cm.id}
              className="flex gap-3.5 border-b border-[color:var(--sc-line)] px-0.5 py-4"
            >
              <div
                className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full text-[15px] font-semibold text-forest"
                style={{
                  background: "color-mix(in srgb, var(--sc-forest) 16%, var(--sc-paper))",
                }}
              >
                {(cm.name || "?").slice(0, 1).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2.5">
                  <b className="text-sm font-semibold">{cm.name}</b>
                  <time className="text-[11px] text-ink-mute">
                    {fmtTime(cm.time)}
                  </time>
                </div>
                <p className="mt-1 whitespace-pre-wrap break-words text-[14.5px] leading-[1.7] text-ink-soft">
                  {cm.body}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
