import Link from "next/link";

const FEATURED = [
  {
    href: "/journey/kyoto-autumn",
    kind: "JOURNEY",
    title: "京都秋日散步",
    meta: "京都 · 5 日",
    excerpt: "清水寺的早晨,人聲還沒醒,只有掃落葉的聲音。",
    tone: "forest" as const,
  },
  {
    href: "/journal/nextjs-16-rewrite",
    kind: "JOURNAL",
    title: "用 Next.js 16 重寫部落格",
    meta: "技術 · 8 分鐘",
    excerpt: "從 App Router 到 Tailwind 4,記錄這次重寫的取捨。",
    tone: "wood" as const,
  },
  {
    href: "/journal/slow-morning",
    kind: "JOURNAL",
    title: "關於慢下來的早晨",
    meta: "日記 · 3 分鐘",
    excerpt: "把咖啡煮慢一點,把句子寫短一點。",
    tone: "deep" as const,
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[1160px] px-6 sm:px-10">
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="overline mb-6">HOME</p>
          <p className="mb-2 text-sm tracking-wide text-ink-mute">Begin 2026 · Taoyuan, Taiwan</p>
          <h1 className="text-[clamp(44px,7.6vw,84px)] font-medium leading-[1.08] tracking-tight">
            在<span className="text-forest">漫遊</span>的路上
            <br />
            留下<span className="text-forest">痕跡</span>
          </h1>
          <p className="mt-6 mb-3 text-sm tracking-wide text-ink-soft">
            —— 漫 遊 刻 痕 // 技術筆記 · 旅行隨筆 · 生活日記 ——
          </p>
          <p className="max-w-xl text-base leading-8 text-ink-soft">
            漫遊在城市與程式之間。紀錄路上的光影,螢幕前的思考,用理性的代碼與感性的日記,在流逝的時間裡刻下專屬的痕跡。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/journey"
              className="rounded-[var(--radius-pill)] bg-forest px-7 py-3.5 text-sm font-medium text-cream shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              開始旅程
            </Link>
            <Link
              href="/journal"
              className="rounded-[var(--radius-pill)] border border-forest px-7 py-3.5 text-sm font-medium text-forest transition-colors hover:bg-forest/5"
            >
              閱讀筆記
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {["旅遊", "日記", "技術", "攝影"].map((t) => (
              <span
                key={t}
                className="rounded-[var(--radius-pill)] bg-cream-2 px-4 py-1.5 text-xs text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* hero 視覺 */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-[var(--shadow-soft)]">
            <img
              src="/hero.png"
              alt="森林裡的小徑、皮革筆記本、羅盤與筆電 —— 漫遊在城市與程式之間"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 65%" }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[36px]"
              style={{
                boxShadow:
                  "inset 0 0 0 1px color-mix(in srgb, var(--sc-cream) 50%, transparent), inset 0 0 46px 10px color-mix(in srgb, var(--sc-cream) 40%, transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* 精選最新 */}
      <section className="py-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="overline mb-2">Latest</p>
            <h2 className="text-2xl font-medium tracking-tight">精選最新</h2>
          </div>
          <Link href="/journal" className="text-sm text-ink-soft hover:text-forest">
            看全部 →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED.map((p) => (
            <Link key={p.href} href={p.href} className="group nordic-card flex flex-col overflow-hidden">
              <div
                className="flex h-36 items-center justify-center"
                style={{ background: toneBg(p.tone) }}
              >
                <span
                  className="rounded-[var(--radius-pill)] bg-paper/85 px-3 py-1 text-[11px] font-medium tracking-[0.12em]"
                  style={{ color: toneFg(p.tone) }}
                >
                  {p.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-ink-mute">{p.meta}</p>
                <h3 className="mt-1.5 text-lg font-medium leading-7 transition-colors group-hover:text-forest">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function toneBg(tone: "forest" | "wood" | "deep") {
  return { forest: "#3e574b", wood: "#c89e69", deep: "#1f3b4d" }[tone];
}
function toneFg(tone: "forest" | "wood" | "deep") {
  return { forest: "#3e574b", wood: "#9c764a", deep: "#1f3b4d" }[tone];
}
