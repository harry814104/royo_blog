"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import DayRouteMap from "@/components/DayRouteMap";
import {
  type BudgetRow,
  type Journey,
  type JourneyDay,
  type JourneyStatus,
  type Spot,
  type TimeBlock,
  type TimeOfDay,
  dayCount,
  formatRange,
  getStatus,
} from "@/lib/journeys";

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

type TabKey = string; // "overview" | `day-${n}` | "info"

export default function JourneyDetail({ journey }: { journey: Journey }) {
  const status = getStatus(journey);
  const days = journey.days ?? [];
  const storageKey = `royo-tab-${journey.slug}`;

  const [tab, setTab] = useState<TabKey>("overview");
  const tabRowRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // restore last viewed tab
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved && (saved === "overview" || saved === "info" || days.some((d) => `day-${d.day}` === saved))) {
        setTab(saved);
      }
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activate = useCallback(
    (name: TabKey) => {
      setTab(name);
      try {
        localStorage.setItem(storageKey, name);
      } catch {
        /* ignore */
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    },
    [storageKey]
  );

  // keep the active tab chip centred in its scroller
  useEffect(() => {
    const row = tabRowRef.current;
    if (!row) return;
    const active = row.querySelector<HTMLElement>(".detail-tab.is-active");
    if (active) {
      row.scrollTo({
        left: active.offsetLeft - row.clientWidth / 2 + active.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [tab]);

  // fade-in the freshly shown panel
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.classList.remove("fade-pop");
    void stage.offsetWidth;
    stage.classList.add("fade-pop");
  }, [tab]);

  const activeDay = days.find((d) => `day-${d.day}` === tab);

  return (
    <div className="pb-28">
      {/* ── hero band ── */}
      <header className="border-b border-[color:var(--sc-line)] bg-paper pt-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-7 sm:px-8">
          <Link
            href="/journey"
            className="w-fit text-sm text-ink-soft transition-colors hover:text-forest"
          >
            ← 回到行程河道
          </Link>
          <span
            className="w-fit rounded-[var(--radius-pill)] px-3 py-1 text-[11px] font-medium tracking-wide"
            style={
              status !== "past"
                ? { background: "var(--sc-forest)", color: "var(--sc-cream)" }
                : { background: "var(--sc-cream-2)", color: "var(--sc-fg-mute)" }
            }
          >
            {STATUS_LABEL[status]}
          </span>
          <div className="min-w-0 max-w-full">
            <h1
              className="max-w-full text-[clamp(26px,7vw,46px)] font-medium leading-[1.12] tracking-tight"
              style={{ overflowWrap: "anywhere" }}
            >
              {journey.name}
            </h1>
            <p className="mt-3 max-w-full text-sm leading-6 tracking-wide text-ink-mute">
              {journey.place} · {formatRange(journey)} · {dayCount(journey)} 天
            </p>
          </div>
        </div>
      </header>

      {/* ── sticky tab bar (paged, not anchors) ── */}
      <nav className="sticky top-14 z-40 border-b border-[color:var(--sc-line)] bg-cream/90 backdrop-blur-md">
        <div
          ref={tabRowRef}
          role="tablist"
          aria-label="行程分頁"
          className="mx-auto flex max-w-[1200px] gap-2 overflow-x-auto px-5 py-2.5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <TabButton active={tab === "overview"} onClick={() => activate("overview")}>
            總覽
          </TabButton>
          {days.map((d) => (
            <TabButton
              key={d.day}
              active={tab === `day-${d.day}`}
              onClick={() => activate(`day-${d.day}`)}
            >
              <span className="font-mono">D{d.day}</span>
              {shortDate(d.date) && (
                <span className="border-l border-current/30 pl-2 font-mono text-[11px] opacity-70">
                  {shortDate(d.date)}
                </span>
              )}
              <span className="tab-label">
                <span>{d.title}</span>
              </span>
            </TabButton>
          ))}
          <TabButton active={tab === "info"} onClick={() => activate("info")}>
            住宿 · 預算 · 撇步
          </TabButton>
        </div>
      </nav>

      {/* ── stage: one panel at a time ── */}
      <div ref={stageRef} className="mx-auto max-w-[1200px] px-5 py-9 sm:px-8">
        {tab === "overview" && (
          <Overview journey={journey} days={days} onGoto={activate} />
        )}
        {activeDay && (
          <DaySection
            key={activeDay.day}
            day={activeDay}
            budget={journey.budget?.[days.indexOf(activeDay)]}
          />
        )}
        {tab === "info" && <InfoSection journey={journey} />}
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`detail-tab${active ? " is-active" : ""}`}
    >
      {children}
    </button>
  );
}

function Overview({
  journey,
  days,
  onGoto,
}: {
  journey: Journey;
  days: JourneyDay[];
  onGoto: (tab: string) => void;
}) {
  return (
    <section className="scroll-mt-32">
      <div className="grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:gap-9">
        <div className="aspect-[5/4] overflow-hidden rounded-[var(--radius-lg)] bg-deep shadow-[var(--shadow-soft)]">
          <img
            src={journey.cover ?? "/hero.png"}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="min-w-0">
          <p className="overline">Overview · 總覽</p>
          <h2 className="mt-3 text-[clamp(22px,2.8vw,30px)] font-medium leading-[1.45] tracking-tight">
            {journey.excerpt}
          </h2>
          {journey.highlights && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {journey.highlights.map((h) => (
                <div key={h.label} className="nordic-card p-4">
                  <p className="overline mb-1">{h.label}</p>
                  <p className="text-sm font-medium">{h.value}</p>
                </div>
              ))}
            </div>
          )}
          {journey.tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {journey.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-[var(--radius-pill)] bg-cream-2 px-3 py-1 text-xs text-ink-soft"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {days.length > 0 && (
        <div className="mt-10">
          <p className="overline mb-4">Day by Day · 逐日</p>
          <div className="grid gap-3 md:grid-cols-2">
            {days.map((d) => (
              <button
                key={d.day}
                type="button"
                onClick={() => onGoto(`day-${d.day}`)}
                className="nordic-card flex items-center gap-4 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-forest/40 active:translate-y-0"
              >
                <span className="w-12 shrink-0 font-mono text-xs font-medium text-brick">
                  Day {d.day}
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block truncate text-base font-medium">{d.title}</b>
                  {d.date && (
                    <em className="block text-[11px] not-italic text-ink-mute">
                      {d.date}
                    </em>
                  )}
                  {d.route?.stops && (
                    <span className="mt-1 block truncate text-xs text-ink-soft">
                      {d.route.stops.slice(0, 4).join(" · ")}
                    </span>
                  )}
                </span>
                <span className="shrink-0 text-ink-mute">→</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function DaySection({ day, budget }: { day: JourneyDay; budget?: BudgetRow }) {
  const stops = getStops(day);
  const [activeStop, setActiveStop] = useState<string | null>(stops[0]?.id ?? null);

  // scroll-spy: highlight the dot for the stop currently in view
  useEffect(() => {
    if (stops.length === 0) return;
    const nodes = stops
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveStop(e.target.id);
        });
      },
      { rootMargin: "-170px 0px -55% 0px" }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [day.day, stops]);

  const jumpTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.remove("dd-pulse");
    void el.offsetWidth;
    el.classList.add("dd-pulse");
  }, []);

  return (
    <section className="scroll-mt-32">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[color:var(--sc-line)] pb-6">
        <div>
          <p className="overline">
            Day {day.day}
            {day.date ? ` · ${day.date}` : ""}
          </p>
          <h2 className="mt-2 text-[clamp(24px,3.2vw,34px)] font-medium leading-tight tracking-tight">
            {day.title}
          </h2>
          {day.summary && (
            <p className="mt-3 max-w-2xl text-sm leading-8 text-ink-soft sm:text-[15px]">
              {day.summary}
            </p>
          )}
        </div>
        {budget && (
          <div className="text-left sm:text-right">
            <span className="overline">當日花費</span>
            <b className="mt-1 block font-mono text-xl font-medium text-forest">
              {budget.total}
            </b>
          </div>
        )}
      </div>

      <div className="mt-8 grid items-start gap-5 lg:grid-cols-[52px_minmax(0,1fr)_348px] lg:gap-7">
        <StopRail
          stops={stops}
          activeStop={activeStop}
          onJump={jumpTo}
        />
        <div className="min-w-0 space-y-8">
          {day.blocks?.map((b, i) => (
            <PeriodSection key={i} day={day.day} block={b} />
          ))}
        </div>
        <DayAside day={day} budget={budget} />
      </div>
    </section>
  );
}

function StopRail({
  stops,
  activeStop,
  onJump,
}: {
  stops: StopRef[];
  activeStop: string | null;
  onJump: (id: string) => void;
}) {
  if (stops.length === 0) return null;

  return (
    <nav
      aria-label="本日行程"
      className="sticky top-[106px] z-30 -mx-5 border-b border-[color:var(--sc-line)] bg-cream/95 px-5 py-3 backdrop-blur-md lg:top-[120px] lg:mx-0 lg:border-b-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-0"
    >
      <div className="flex items-center gap-4 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        <p className="overline hidden shrink-0 text-center leading-5 lg:block">
          本日
          <br />
          行程
        </p>
        <div className="relative flex min-w-max items-center gap-5 px-1 py-1 lg:min-w-0 lg:flex-col lg:gap-4 lg:px-0">
          <span
            aria-hidden
            className="absolute left-1 right-1 top-1/2 h-0.5 -translate-y-1/2 lg:bottom-1 lg:left-1/2 lg:right-auto lg:top-1 lg:h-auto lg:w-0.5 lg:-translate-x-1/2 lg:translate-y-0"
            style={{ background: "var(--sc-line)" }}
          />
          {stops.map((s, i) => {
            const isActive = s.id === activeStop;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onJump(s.id)}
                aria-label={`第 ${i + 1} 站:${s.name}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative z-10 grid h-5 w-5 shrink-0 place-items-center"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full border-2 border-[color:var(--sc-cream)] transition-transform group-hover:scale-150"
                  style={{
                    background: isActive ? PERIOD_COLOR[s.period] : "var(--sc-cream)",
                    borderColor: PERIOD_COLOR[s.period],
                    boxShadow: "0 0 0 3px var(--sc-cream)",
                    transform: isActive ? "scale(1.45)" : undefined,
                  }}
                />
                <span className="pointer-events-none absolute bottom-8 left-1/2 max-w-48 -translate-x-1/2 translate-y-1 truncate rounded-[var(--radius-sm)] bg-ink px-3 py-1.5 text-xs text-cream opacity-0 shadow-[var(--shadow-soft)] transition group-hover:translate-y-0 group-hover:opacity-100 lg:bottom-auto lg:left-8 lg:top-1/2 lg:-translate-x-1 lg:-translate-y-1/2 lg:group-hover:-translate-y-1/2 lg:group-hover:translate-x-0">
                  {s.time && (
                    <b className="mr-2 font-mono font-normal opacity-70">{s.time}</b>
                  )}
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function PeriodSection({ day, block }: { day: number; block: TimeBlock }) {
  const label = block.label.split("·").slice(1).join("·").trim();

  return (
    <section>
      <div className="mb-3 flex items-baseline gap-2">
        <span
          className="rounded-[var(--radius-pill)] px-3 py-1 text-xs font-medium text-white"
          style={{ background: PERIOD_COLOR[block.period] }}
        >
          {PERIOD_LABEL[block.period]}
        </span>
        {label && (
          <span className="font-mono text-[11px] uppercase tracking-wide text-ink-mute">
            {label}
          </span>
        )}
      </div>
      <div className="space-y-3.5">
        {block.items.map((item, i) =>
          item.type === "spot" ? (
            <StopCard
              key={i}
              day={day}
              spot={item.spot}
              period={block.period}
              fallbackNo={spotNumber(block, i)}
            />
          ) : (
            <TransportCard key={i} mode={item.note.mode} text={item.note.text} />
          )
        )}
      </div>
    </section>
  );
}

function StopCard({
  day,
  spot,
  period,
  fallbackNo,
}: {
  day: number;
  spot: Spot;
  period: TimeOfDay;
  fallbackNo: string;
}) {
  const no = spot.no ?? fallbackNo;

  return (
    <article
      id={`day-${day}-stop-${no}`}
      className="nordic-card scroll-mt-[176px] overflow-hidden p-4 pl-5 sm:p-5 sm:pl-6 lg:scroll-mt-[130px]"
      style={{ borderLeft: `3px solid ${PERIOD_COLOR[period]}` }}
    >
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="font-mono text-sm font-medium text-wood-dark">{no}</span>
        <h4 className="min-w-0 flex-1 text-base font-medium leading-6 sm:text-[17px]">
          {spot.name}
        </h4>
        {spot.time && (
          <span className="rounded-[var(--radius-pill)] bg-cream-2 px-3 py-1 font-mono text-[11px] text-ink-soft">
            {spot.time}
          </span>
        )}
      </div>
      {spot.desc && <p className="mt-2 text-sm leading-7 text-ink-soft">{spot.desc}</p>}
      {spot.meta && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-mute">
          {spot.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      )}
      {spot.mapUrl && (
        <a
          href={spot.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs text-forest hover:underline"
        >
          📍 Google Map →
        </a>
      )}
    </article>
  );
}

function TransportCard({ mode, text }: { mode: string; text: string }) {
  return (
    <div className="ml-3 flex items-start gap-2 rounded-[var(--radius-sm)] bg-cream-2 px-3 py-2.5 text-sm leading-6 text-ink-soft">
      <span className="mt-0.5 text-wood-dark">►</span>
      <span>
        <strong className="font-medium text-ink">{mode}</strong> {text}
      </span>
    </div>
  );
}

function DayAside({ day, budget }: { day: JourneyDay; budget?: BudgetRow }) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-[120px]">
      {day.points.length > 0 && (
        <div className="nordic-card p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="overline">移動路線 · Route</span>
            {day.route?.mapUrl && (
              <a
                href={day.route.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-forest hover:underline"
              >
                Maps →
              </a>
            )}
          </div>
          <DayRouteMap points={day.points} />
          {day.route?.stops && (
            <p className="mt-3 text-xs leading-6 text-ink-soft">
              {day.route.stops.map((s, i) => (
                <span key={i}>
                  {s}
                  {i < day.route!.stops.length - 1 && (
                    <span className="mx-1 text-wood">→</span>
                  )}
                </span>
              ))}
            </p>
          )}
        </div>
      )}

      {day.lodging && (
        <div className="nordic-card p-4">
          <span className="overline">Stay · 住宿</span>
          <p className="mt-2 text-sm text-ink-soft">🛏 {day.lodging}</p>
        </div>
      )}

      {day.meals?.map((meal) => (
        <div key={meal.title} className="nordic-card p-4">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-wood-dark">
            🍽 {meal.title}
          </p>
          <div className="space-y-4">
            {meal.restaurants.map((r) => (
              <div
                key={r.name}
                className="border-b border-[color:var(--sc-line)] pb-4 last:border-0 last:pb-0"
              >
                <h4 className="text-sm font-medium">{r.name}</h4>
                {r.desc && <p className="mt-1 text-xs leading-6 text-ink-soft">{r.desc}</p>}
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

      {budget && (
        <div className="nordic-card p-4">
          <span className="overline">Day Budget · 當日預算</span>
          {(
            [
              ["交通", budget.transport],
              ["門票/活動", budget.tickets],
              ["餐飲", budget.food],
              ["住宿", budget.lodging],
            ] as const
          ).map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between border-t border-[color:var(--sc-line)] py-2 text-sm text-ink-soft first:mt-3"
            >
              <span>{label}</span>
              <span className="font-mono">{value}</span>
            </div>
          ))}
          <div className="mt-1 flex justify-between border-t-2 border-forest pt-3 text-sm font-medium text-forest">
            <span>單日小計</span>
            <span className="font-mono">{budget.total}</span>
          </div>
        </div>
      )}
    </aside>
  );
}

function InfoSection({ journey }: { journey: Journey }) {
  return (
    <section className="scroll-mt-32">
      {journey.hotels && journey.hotels.length > 0 && (
        <div className="mb-14">
          <p className="overline mb-2">Stay · 住宿建議</p>
          <h2 className="text-2xl font-medium tracking-tight">住哪裡</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {journey.hotels.map((h) => (
              <div key={h.name} className="nordic-card p-5">
                <p className="text-xs font-medium text-wood-dark">{h.area}</p>
                <h3 className="mt-2 text-base font-medium">{h.name}</h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-mute">
                  {h.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {journey.budget && journey.budget.length > 0 && (
        <div className="mb-14">
          <p className="overline mb-2">Budget · 預算</p>
          <h2 className="text-2xl font-medium tracking-tight">花費總覽</h2>
          <div className="mt-6 overflow-x-auto rounded-[var(--radius-md)] border border-[color:var(--sc-line)]">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-cream-2 text-left text-ink-soft">
                  <th className="px-3 py-3 font-medium">日期</th>
                  <th className="px-3 py-3 font-medium">交通</th>
                  <th className="px-3 py-3 font-medium">門票</th>
                  <th className="px-3 py-3 font-medium">餐飲</th>
                  <th className="px-3 py-3 font-medium">住宿</th>
                  <th className="px-3 py-3 font-medium">小計</th>
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
                    <td className="px-3 py-3">{r.date}</td>
                    <td className="px-3 py-3">{r.transport}</td>
                    <td className="px-3 py-3">{r.tickets}</td>
                    <td className="px-3 py-3">{r.food}</td>
                    <td className="px-3 py-3">{r.lodging}</td>
                    <td className="px-3 py-3 font-mono font-medium">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {journey.budgetNote && (
            <p className="mt-3 text-xs leading-6 text-ink-mute">{journey.budgetNote}</p>
          )}
        </div>
      )}

      {journey.tips && journey.tips.length > 0 && (
        <div>
          <p className="overline mb-2">Tips · 小撇步</p>
          <h2 className="text-2xl font-medium tracking-tight">出發前讀一遍</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {journey.tips.map((t, i) => (
              <div key={t.title} className="nordic-card p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-wood-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium">{t.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

interface StopRef {
  id: string;
  period: TimeOfDay;
  name: string;
  time?: string;
}

function getStops(day: JourneyDay): StopRef[] {
  const counters: Record<TimeOfDay, number> = { morning: 0, afternoon: 0, evening: 0 };
  return (day.blocks ?? []).flatMap((block) =>
    block.items.flatMap((item) => {
      if (item.type !== "spot") return [];
      counters[block.period] += 1;
      const no = item.spot.no ?? String(counters[block.period]).padStart(2, "0");
      return [
        {
          id: `day-${day.day}-stop-${no}`,
          period: block.period,
          name: item.spot.name,
          time: item.spot.time,
        },
      ];
    })
  );
}

function spotNumber(block: TimeBlock, index: number): string {
  const count = block.items
    .slice(0, index + 1)
    .filter((item) => item.type === "spot").length;
  return String(count).padStart(2, "0");
}

function shortDate(date?: string): string {
  const raw = date?.split("·")[0]?.trim();
  const parts = raw?.split(".");
  return parts && parts.length >= 3 ? `${parts[1]}/${parts[2]}` : "";
}
