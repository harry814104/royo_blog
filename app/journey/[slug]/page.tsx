import Link from "next/link";
import { notFound } from "next/navigation";
import DayRouteMap from "@/components/DayRouteMap";
import {
  JOURNEYS,
  type JourneyDay,
  type JourneyStatus,
  type TimeBlock,
  type TimeOfDay,
  dayCount,
  formatRange,
  getJourney,
  getStatus,
} from "@/lib/journeys";

export function generateStaticParams() {
  return JOURNEYS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const j = getJourney(slug);
  if (!j) return { title: "找不到行程 — FLÂNEUR : ROYO" };
  return { title: `${j.name} — FLÂNEUR : ROYO`, description: j.excerpt };
}

const STATUS_LABEL: Record<JourneyStatus, string> = {
  upcoming: "即將出發",
  ongoing: "旅途中",
  past: "已抵達",
};

const PERIOD_LABEL: Record<TimeOfDay, string> = {
  morning: "早上",
  afternoon: "下午",
  evening: "晚上",
};

const PERIOD_COLOR: Record<TimeOfDay, string> = {
  morning: "#c89e69",
  afternoon: "#c44e3c",
  evening: "#1f3b4d",
};

export default async function JourneyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  const status = getStatus(journey);
  const days = journey.days ?? [];

  return (
    <div className="mx-auto max-w-[860px] px-6 py-24 sm:px-10">
      {/* 返回 */}
      <Link
        href="/journey"
        className="text-sm text-ink-soft transition-colors hover:text-forest"
      >
        ← 回到行程河道
      </Link>

      {/* Hero */}
      <header className="mt-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className="rounded-[var(--radius-pill)] px-2.5 py-0.5 text-[11px] font-medium tracking-wide"
            style={
              status !== "past"
                ? { background: "var(--sc-forest)", color: "var(--sc-cream)" }
                : { background: "var(--sc-cream-2)", color: "var(--sc-fg-mute)" }
            }
          >
            {STATUS_LABEL[status]}
          </span>
          <span className="text-xs text-ink-mute">{journey.place}</span>
          <span className="text-xs text-ink-mute">· {dayCount(journey)} 天</span>
        </div>
        <h1 className="text-[clamp(28px,5vw,44px)] font-medium leading-tight tracking-tight">
          {journey.name}
        </h1>
        <p className="mt-2 text-sm text-ink-mute">{formatRange(journey)}</p>
        <p className="mt-4 max-w-xl leading-8 text-ink-soft">{journey.excerpt}</p>

        {journey.highlights && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {journey.highlights.map((h) => (
              <div key={h.label} className="nordic-card px-4 py-3">
                <p className="overline mb-1">{h.label}</p>
                <p className="text-sm font-medium">{h.value}</p>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* 日程快速導覽 */}
      {days.length > 1 && (
        <nav className="mt-10 flex flex-wrap gap-2">
          {days.map((d) => (
            <a
              key={d.day}
              href={`#day-${d.day}`}
              className="rounded-[var(--radius-pill)] border border-[color:var(--sc-line)] bg-paper px-3.5 py-1.5 text-xs text-ink-soft transition-colors hover:border-forest hover:text-forest"
            >
              Day {d.day}
            </a>
          ))}
        </nav>
      )}

      {/* 每日行程 */}
      <div className="mt-12 space-y-16">
        {days.map((d) => (
          <DaySection key={d.day} day={d} />
        ))}
      </div>

      {/* 住宿 */}
      {journey.hotels && journey.hotels.length > 0 && (
        <section className="mt-20">
          <p className="overline mb-2">Stay</p>
          <h2 className="text-2xl font-medium tracking-tight">住宿建議</h2>
          <div className="mt-6 grid gap-4">
            {journey.hotels.map((h) => (
              <div key={h.name} className="nordic-card p-5">
                <p className="text-xs font-medium text-wood-dark">{h.area}</p>
                <h3 className="mt-1 text-lg font-medium">{h.name}</h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-mute">
                  {h.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 預算 */}
      {journey.budget && journey.budget.length > 0 && (
        <section className="mt-20">
          <p className="overline mb-2">Budget</p>
          <h2 className="text-2xl font-medium tracking-tight">每日預算總覽</h2>
          <div className="mt-6 overflow-x-auto rounded-[var(--radius-md)] border border-[color:var(--sc-line)]">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-cream-2 text-left text-ink-soft">
                  <th className="px-3 py-2.5 font-medium">日期</th>
                  <th className="px-3 py-2.5 font-medium">交通</th>
                  <th className="px-3 py-2.5 font-medium">門票/活動</th>
                  <th className="px-3 py-2.5 font-medium">餐飲</th>
                  <th className="px-3 py-2.5 font-medium">住宿</th>
                  <th className="px-3 py-2.5 font-medium">單日小計</th>
                </tr>
              </thead>
              <tbody>
                {journey.budget.map((r) => (
                  <tr
                    key={r.date}
                    className="border-t border-[color:var(--sc-line)]"
                    style={
                      r.isTotal
                        ? { background: "var(--sc-forest)", color: "var(--sc-cream)" }
                        : undefined
                    }
                  >
                    <td className="px-3 py-2.5">{r.date}</td>
                    <td className="px-3 py-2.5">{r.transport}</td>
                    <td className="px-3 py-2.5">{r.tickets}</td>
                    <td className="px-3 py-2.5">{r.food}</td>
                    <td className="px-3 py-2.5">{r.lodging}</td>
                    <td className="px-3 py-2.5 font-medium">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {journey.budgetNote && (
            <p className="mt-3 text-xs leading-6 text-ink-mute">{journey.budgetNote}</p>
          )}
        </section>
      )}

      {/* 小撇步 */}
      {journey.tips && journey.tips.length > 0 && (
        <section className="mt-20">
          <p className="overline mb-2">Tips</p>
          <h2 className="text-2xl font-medium tracking-tight">行前小撇步</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {journey.tips.map((t, i) => (
              <div key={t.title} className="nordic-card p-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm text-wood-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium">{t.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function DaySection({ day }: { day: JourneyDay }) {
  return (
    <section id={`day-${day.day}`} className="scroll-mt-24">
      <div className="border-l-2 border-forest pl-4">
        <p className="overline mb-1">Day {day.day}</p>
        {day.date && <p className="text-xs text-ink-mute">{day.date}</p>}
        <h2 className="mt-1 text-2xl font-medium tracking-tight">{day.title}</h2>
        {day.summary && (
          <p className="mt-2 text-sm leading-7 text-ink-soft">{day.summary}</p>
        )}
      </div>

      {/* 時段區塊 */}
      {day.blocks && (
        <div className="mt-6 space-y-5">
          {day.blocks.map((b, i) => (
            <BlockCard key={i} block={b} />
          ))}
        </div>
      )}

      {/* 餐飲 */}
      {day.meals?.map((meal, i) => (
        <div key={i} className="nordic-card mt-5 p-5">
          <p className="overline mb-3" style={{ color: "var(--sc-wood-dark)" }}>
            {meal.title}
          </p>
          <div className="space-y-4">
            {meal.restaurants.map((r) => (
              <div
                key={r.name}
                className="border-b border-[color:var(--sc-line)] pb-4 last:border-0 last:pb-0"
              >
                <h4 className="text-base font-medium">{r.name}</h4>
                {r.desc && (
                  <p className="mt-1 text-sm leading-7 text-ink-soft">{r.desc}</p>
                )}
                {r.prices && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {r.prices.map((p) => (
                      <span
                        key={p}
                        className="rounded-[var(--radius-pill)] bg-cream-2 px-2.5 py-1 text-[11px] text-wood-dark"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* 住宿 */}
      {day.lodging && (
        <p className="mt-5 flex items-center gap-2 text-sm text-ink-soft">
          <span className="text-wood-dark">🛏</span> 今晚住宿:{day.lodging}
        </p>
      )}

      {/* 地圖 + 路線 */}
      {day.points.length > 0 && (
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="overline">每日移動路線</p>
            {day.route?.mapUrl && (
              <a
                href={day.route.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-forest hover:underline"
              >
                在 Google Maps 開啟 →
              </a>
            )}
          </div>
          {day.route?.stops && (
            <p className="mb-3 text-sm leading-7 text-ink-soft">
              {day.route.stops.map((s, i) => (
                <span key={i}>
                  {s}
                  {i < day.route!.stops.length - 1 && (
                    <span className="mx-1.5 text-wood">→</span>
                  )}
                </span>
              ))}
            </p>
          )}
          <DayRouteMap points={day.points} />
        </div>
      )}
    </section>
  );
}

function BlockCard({ block }: { block: TimeBlock }) {
  return (
    <div className="nordic-card relative overflow-hidden p-5 pl-6">
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-1"
        style={{ background: PERIOD_COLOR[block.period] }}
      />
      <p
        className="mb-4 text-xs font-medium tracking-wide"
        style={{ color: PERIOD_COLOR[block.period] }}
      >
        {PERIOD_LABEL[block.period]} · {block.label}
      </p>

      <div className="space-y-4">
        {block.items.map((item, i) =>
          item.type === "spot" ? (
            <div
              key={i}
              className="border-b border-[color:var(--sc-line)] pb-4 last:border-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                {item.spot.no && (
                  <span className="font-mono text-sm text-wood-dark">
                    {item.spot.no}
                  </span>
                )}
                <h4 className="flex-1 text-base font-medium">{item.spot.name}</h4>
                {item.spot.time && (
                  <span className="rounded-[var(--radius-pill)] bg-cream-2 px-2.5 py-0.5 text-[11px] text-ink-soft">
                    {item.spot.time}
                  </span>
                )}
              </div>
              {item.spot.desc && (
                <p className="mt-2 text-sm leading-7 text-ink-soft">
                  {item.spot.desc}
                </p>
              )}
              {item.spot.meta && (
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-mute">
                  {item.spot.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              )}
              {item.spot.mapUrl && (
                <a
                  href={item.spot.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-forest hover:underline"
                >
                  📍 開啟 Google Map
                </a>
              )}
            </div>
          ) : (
            <div
              key={i}
              className="flex items-start gap-2 rounded-[var(--radius-sm)] bg-cream-2 px-3 py-2.5 text-sm leading-6 text-ink-soft"
            >
              <span className="text-wood-dark">►</span>
              <span>
                <strong className="font-medium text-ink">{item.note.mode}</strong>{" "}
                {item.note.text}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
