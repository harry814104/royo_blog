"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  type Journey,
  type JourneyStatus,
  dayCount,
  formatRange,
  getStatus,
} from "@/lib/journeys";

const STATUS_LABEL: Record<JourneyStatus, string> = {
  upcoming: "即將出發",
  ongoing: "旅途中",
  past: "已抵達",
};

const TONE_BG: Record<Journey["tone"], string> = {
  forest: "#3e574b",
  wood: "#c89e69",
  deep: "#1f3b4d",
};

type ViewMode = "timeline" | "grid" | "map";
type StatusFilter = "all" | "upcoming" | "past";
type SortKey = "newest" | "oldest" | "longest";

// 從 place ("日本 · 關西") 取國家 / 城市
function country(j: Journey) {
  return j.place.split("·")[0]?.trim() ?? j.place;
}
function city(j: Journey) {
  const parts = j.place.split("·");
  return (parts[parts.length - 1] ?? j.place).trim();
}
// 代表座標:取第一天第一個點位(地圖視圖用)
function geoOf(j: Journey): { lat: number; lng: number } | null {
  const p = j.days?.find((d) => d.points.length > 0)?.points[0];
  return p ? { lat: p.lat, lng: p.lng } : null;
}
function year(j: Journey) {
  return new Date(j.startDate).getFullYear();
}

export default function JourneyBrowse({ journeys }: { journeys: Journey[] }) {
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [scopes, setScopes] = useState<Set<Journey["scope"]>>(new Set());
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortKey>("newest");
  const [view, setView] = useState<ViewMode>("timeline");

  // 還原上次的視圖
  useEffect(() => {
    try {
      const v = localStorage.getItem("royo-browse-view");
      if (v === "timeline" || v === "grid" || v === "map") setView(v);
    } catch {
      /* ignore */
    }
  }, []);
  function changeView(v: ViewMode) {
    setView(v);
    try {
      localStorage.setItem("royo-browse-view", v);
    } catch {
      /* ignore */
    }
  }

  function toggleScope(s: Journey["scope"]) {
    setScopes((prev) => {
      const next = new Set(prev);
      next.has(s) ? next.delete(s) : next.add(s);
      return next;
    });
  }
  function toggleTag(t: string) {
    setTags((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });
  }
  function clearAll() {
    setQ("");
    setStatusFilter("all");
    setScopes(new Set());
    setTags(new Set());
  }

  const results = useMemo(() => {
    const filtered = journeys.filter((j) => {
      if (statusFilter !== "all") {
        const isPast = getStatus(j) === "past";
        if (statusFilter === "past" && !isPast) return false;
        if (statusFilter === "upcoming" && isPast) return false;
      }
      if (scopes.size && !scopes.has(j.scope)) return false;
      if (tags.size) {
        for (const t of tags) if (!(j.tags ?? []).includes(t)) return false;
      }
      if (q.trim()) {
        const hay = `${j.name} ${j.place} ${j.excerpt} ${(j.tags ?? []).join(" ")}`.toLowerCase();
        if (!hay.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
    const sorted = [...filtered];
    if (sort === "newest")
      sorted.sort((a, b) => +new Date(b.startDate) - +new Date(a.startDate));
    else if (sort === "oldest")
      sorted.sort((a, b) => +new Date(a.startDate) - +new Date(b.startDate));
    else if (sort === "longest") sorted.sort((a, b) => dayCount(b) - dayCount(a));
    return sorted;
  }, [journeys, statusFilter, scopes, tags, q, sort]);

  // 統計列
  const stats = useMemo(() => {
    const cities = new Set(journeys.map(city));
    const countries = new Set(journeys.map(country));
    const totalDays = journeys.reduce((s, j) => s + dayCount(j), 0);
    const years = journeys.map(year);
    const minY = Math.min(...years);
    const maxY = Math.max(...years);
    return [
      `${journeys.length} 趟旅程`,
      `${countries.size} 個國家／地區`,
      `${cities.size} 座城市`,
      `${totalDays} 天在路上`,
      minY === maxY ? `${minY}` : `${minY}–${maxY}`,
    ];
  }, [journeys]);

  const activePills =
    q.trim().length > 0 || scopes.size > 0 || tags.size > 0 || statusFilter !== "all";

  return (
    <div className="mx-auto max-w-[1160px] px-5 py-24 sm:px-10">
      {/* ── intro ── */}
      <section>
        <p className="overline mb-3">Journey · 所有行程</p>
        <h1 className="text-[clamp(32px,4.6vw,52px)] font-medium leading-[1.08] tracking-tight">
          旅遊 · 行程與路線
        </h1>
        <p className="mt-4 max-w-xl text-base font-light leading-8 text-ink-soft">
          即將啟程的計畫,與走過的痕跡,都在這裡。用搜尋、篩選或地圖,換個方式重新逛一遍。
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-ink-mute">
          {stats.map((s, i) => (
            <span key={s} className="flex items-center gap-2.5">
              {i > 0 && <span className="text-stone">·</span>}
              <span className="whitespace-nowrap">{s}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── sticky toolbar ── */}
      <div className="sticky top-14 z-40 -mx-5 mt-7 border-y border-[color:var(--sc-line)] bg-cream/90 px-5 py-3.5 backdrop-blur-md sm:-mx-10 sm:px-10">
        {/* row 1: search + view switch */}
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex h-[42px] min-w-[200px] flex-1 items-center gap-2.5 rounded-[var(--radius-pill)] border border-[color:var(--sc-line)] bg-paper px-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[17px] w-[17px] shrink-0 text-ink-mute"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜尋行程、地點、標籤…"
              autoComplete="off"
              className="h-full flex-1 border-none bg-transparent text-[14.5px] text-ink outline-none placeholder:text-ink-mute"
            />
          </label>
          <div className="flex shrink-0 gap-1 rounded-[var(--radius-pill)] bg-cream-2 p-1">
            {(
              [
                ["timeline", "時間軸"],
                ["grid", "網格"],
                ["map", "地圖"],
              ] as const
            ).map(([v, label]) => (
              <button
                key={v}
                type="button"
                onClick={() => changeView(v)}
                className={`rounded-[var(--radius-pill)] px-3.5 py-1.5 text-[13px] transition-colors ${
                  view === v
                    ? "bg-paper text-forest shadow-[var(--shadow-soft)]"
                    : "text-ink-soft"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* row 2: status + scope + sort */}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Segment>
            {(
              [
                ["all", "全部"],
                ["upcoming", "即將出發"],
                ["past", "已抵達"],
              ] as const
            ).map(([v, label]) => (
              <SegChip
                key={v}
                active={statusFilter === v}
                onClick={() => setStatusFilter(v)}
              >
                {label}
              </SegChip>
            ))}
          </Segment>
          <Segment>
            {(
              [
                ["overseas", "海外"],
                ["domestic", "國內"],
              ] as const
            ).map(([v, label]) => (
              <SegChip key={v} active={scopes.has(v)} onClick={() => toggleScope(v)}>
                {label}
              </SegChip>
            ))}
          </Segment>
          <label className="ml-auto flex items-center gap-2 text-xs text-ink-mute">
            排序
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-[var(--radius-pill)] border border-[color:var(--sc-line)] bg-paper px-3 py-1.5 text-[13px] text-ink"
            >
              <option value="newest">最新優先</option>
              <option value="oldest">最舊優先</option>
              <option value="longest">天數最多</option>
            </select>
          </label>
        </div>
      </div>

      {/* ── result meta + active filters ── */}
      <div className="mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-2">
        <span className="text-[13px] text-ink-soft">
          顯示 <b className="font-semibold text-forest">{results.length}</b> / {journeys.length} 趟行程
        </span>
        {activePills && (
          <div className="flex flex-wrap items-center gap-2">
            {q.trim() && <Pill onClear={() => setQ("")}>「{q.trim()}」</Pill>}
            {[...scopes].map((s) => (
              <Pill key={s} onClear={() => toggleScope(s)}>
                {s === "overseas" ? "海外" : "國內"}
              </Pill>
            ))}
            {[...tags].map((t) => (
              <Pill key={t} onClear={() => toggleTag(t)}>
                #{t}
              </Pill>
            ))}
            {statusFilter !== "all" && (
              <Pill onClear={() => setStatusFilter("all")}>
                {statusFilter === "upcoming" ? "即將出發" : "已抵達"}
              </Pill>
            )}
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-brick underline"
            >
              清除全部
            </button>
          </div>
        )}
      </div>

      {/* ── body ── */}
      {results.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-[22px] font-medium">沒有符合的行程</p>
          <p className="mt-2.5 text-sm text-ink-soft">試試其他關鍵字,或清除篩選條件。</p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-5 rounded-[var(--radius-pill)] bg-forest px-5 py-2.5 text-[13px] text-cream"
          >
            清除全部篩選
          </button>
        </div>
      ) : view === "timeline" ? (
        <TimelineView
          list={results}
          activeTags={tags}
          onToggleTag={toggleTag}
        />
      ) : view === "grid" ? (
        <GridView list={results} activeTags={tags} onToggleTag={toggleTag} />
      ) : (
        <MapView list={results} />
      )}
    </div>
  );
}

function Segment({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1 rounded-[var(--radius-pill)] border border-[color:var(--sc-line)] bg-paper p-1">
      {children}
    </div>
  );
}

function SegChip({
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
      onClick={onClick}
      className={`whitespace-nowrap rounded-[var(--radius-pill)] px-3 py-1.5 text-[13px] transition-colors ${
        active ? "bg-forest text-cream" : "text-ink-soft hover:text-forest"
      }`}
    >
      {children}
    </button>
  );
}

function Pill({
  children,
  onClear,
}: {
  children: React.ReactNode;
  onClear: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color:var(--sc-line)] bg-cream-2 px-2.5 py-1 text-xs text-ink-soft transition-colors hover:border-brick hover:text-brick"
    >
      {children}
      <span aria-hidden className="text-ink-mute">
        ×
      </span>
    </button>
  );
}

// ── card (shared by timeline row + grid tile) ──
function JourneyResultCard({
  j,
  variant,
  activeTags,
  onToggleTag,
}: {
  j: Journey;
  variant: "row" | "tile";
  activeTags: Set<string>;
  onToggleTag: (t: string) => void;
}) {
  const status = getStatus(j);
  const isAhead = status !== "past";
  const isTile = variant === "tile";

  return (
    <article
      className={`group relative nordic-card overflow-hidden transition-all hover:-translate-y-0.5 hover:border-forest/35 ${
        isTile ? "flex flex-col" : "flex"
      }`}
    >
      {/* stretched navigation link — sits beneath the tag buttons */}
      <Link
        href={`/journey/${j.slug}`}
        aria-label={j.name}
        className="absolute inset-0 z-0"
      />
      {/* cover */}
      <div
        className={`relative shrink-0 ${
          isTile ? "h-[132px] w-full" : "w-24 sm:w-40"
        }`}
        style={{ background: TONE_BG[j.tone] }}
      >
        {j.cover ? (
          <img src={j.cover} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="absolute bottom-3 left-3.5 text-[11px] font-medium tracking-[0.14em] text-cream/85">
            {j.scope === "overseas" ? "OVERSEAS" : "DOMESTIC"}
          </span>
        )}
      </div>
      {/* body */}
      <div className={`flex min-w-0 flex-1 flex-col ${isTile ? "p-[18px]" : "p-5"}`}>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className="rounded-[var(--radius-pill)] px-2.5 py-0.5 text-[11px] font-medium tracking-wide"
            style={
              isAhead
                ? { background: "var(--sc-forest)", color: "var(--sc-cream)" }
                : { background: "var(--sc-cream-2)", color: "var(--sc-fg-mute)" }
            }
          >
            {STATUS_LABEL[status]}
          </span>
          <span className="text-xs text-ink-mute">{j.place}</span>
          <span className="text-xs text-ink-mute">· {dayCount(j)} 天</span>
        </div>
        <h3
          className={`font-medium leading-[1.35] tracking-tight transition-colors group-hover:text-forest ${
            isTile ? "text-lg" : "text-xl"
          }`}
        >
          {j.name}
        </h3>
        <p className="mt-1 text-xs text-ink-mute">{formatRange(j)}</p>
        <p className="mt-2 line-clamp-2 text-sm leading-7 text-ink-soft">{j.excerpt}</p>
        {j.tags && j.tags.length > 0 && (
          <div className="relative z-10 mt-3.5 flex flex-wrap gap-1.5">
            {j.tags.map((t) => {
              const on = activeTags.has(t);
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onToggleTag(t)}
                  className={`rounded-[var(--radius-pill)] border px-2.5 py-1 text-[11px] transition-colors ${
                    on
                      ? "border-transparent bg-forest text-cream"
                      : "border-transparent bg-cream-2 text-ink-soft hover:border-wood hover:text-wood-dark"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}

// ── timeline (river) ──
function TimelineView({
  list,
  activeTags,
  onToggleTag,
}: {
  list: Journey[];
  activeTags: Set<string>;
  onToggleTag: (t: string) => void;
}) {
  const ahead = list.filter((j) => getStatus(j) !== "past");
  const past = list.filter((j) => getStatus(j) === "past");

  return (
    <div className="relative mt-7">
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-[8px] w-0.5 sm:left-[9px]"
        style={{ background: "var(--sc-line)" }}
      />
      <RiverGroup
        label="即將啟程 · 計畫中"
        items={ahead}
        tone="live"
        activeTags={activeTags}
        onToggleTag={onToggleTag}
      />
      <RiverGroup
        label="走過的路 · 回顧"
        items={past}
        tone="past"
        activeTags={activeTags}
        onToggleTag={onToggleTag}
      />
    </div>
  );
}

function RiverGroup({
  label,
  items,
  tone,
  activeTags,
  onToggleTag,
}: {
  label: string;
  items: Journey[];
  tone: "live" | "past";
  activeTags: Set<string>;
  onToggleTag: (t: string) => void;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mb-4">
      <div className="relative mb-6 flex items-center pl-9 sm:pl-12">
        <span
          aria-hidden
          className="absolute left-0 h-[18px] w-[18px] rounded-full"
          style={{
            background: tone === "live" ? "var(--sc-forest)" : "var(--sc-stone)",
            boxShadow: "0 0 0 4px var(--sc-cream)",
          }}
        />
        <p className="overline">{label}</p>
      </div>
      <div className="space-y-6">
        {items.map((j) => (
          <div key={j.slug} className="relative pl-9 sm:pl-12">
            <span
              aria-hidden
              className="absolute left-[3px] top-6 h-2.5 w-2.5 rounded-full sm:left-[5px]"
              style={{
                background: tone === "live" ? "var(--sc-wood)" : "var(--sc-fg-mute)",
                boxShadow: "0 0 0 3px var(--sc-cream)",
              }}
            />
            <JourneyResultCard
              j={j}
              variant="row"
              activeTags={activeTags}
              onToggleTag={onToggleTag}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ── grid ──
function GridView({
  list,
  activeTags,
  onToggleTag,
}: {
  list: Journey[];
  activeTags: Set<string>;
  onToggleTag: (t: string) => void;
}) {
  return (
    <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((j) => (
        <JourneyResultCard
          key={j.slug}
          j={j}
          variant="tile"
          activeTags={activeTags}
          onToggleTag={onToggleTag}
        />
      ))}
    </div>
  );
}

// ── map ──
const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
let leafletPromise: Promise<unknown> | null = null;
function loadLeaflet(): Promise<unknown> {
  if (typeof window === "undefined") return Promise.resolve(null);
  // @ts-expect-error CDN 注入
  if (window.L) return Promise.resolve(window.L);
  if (leafletPromise) return leafletPromise;
  leafletPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = LEAFLET_CSS;
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = LEAFLET_JS;
    script.async = true;
    // @ts-expect-error CDN 注入
    script.onload = () => resolve(window.L);
    script.onerror = reject;
    document.body.appendChild(script);
  });
  return leafletPromise;
}

function MapView({ list }: { list: Journey[] }) {
  const mapEl = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<Record<string, any>>({});
  const [active, setActive] = useState<string | null>(null);

  const located = useMemo(
    () => list.map((j) => ({ j, geo: geoOf(j) })).filter((x) => x.geo !== null),
    [list]
  );

  useEffect(() => {
    let cancelled = false;
    loadLeaflet().then((L: unknown) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const LL = L as any;
      if (cancelled || !mapEl.current || !LL) return;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markersRef.current = {};
      const map = LL.map(mapEl.current, { scrollWheelZoom: false });
      mapRef.current = map;
      LL.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 18,
      }).addTo(map);

      const pts: [number, number][] = [];
      located.forEach(({ j, geo }) => {
        if (!geo) return;
        const ll: [number, number] = [geo.lat, geo.lng];
        pts.push(ll);
        const m = LL.circleMarker(ll, {
          radius: 10,
          color: "#fdfbf5",
          weight: 2.5,
          fillColor: TONE_BG[j.tone],
          fillOpacity: 1,
        }).addTo(map);
        m.bindPopup(
          `<b>${j.name}</b><br>${city(j)} · ${dayCount(j)} 天<br>${formatRange(j)}`
        );
        m.on("click", () => setActive(j.slug));
        markersRef.current[j.slug] = m;
      });
      if (pts.length === 1) map.setView(pts[0], 6);
      else if (pts.length) map.fitBounds(pts, { padding: [50, 50], maxZoom: 7 });
      setTimeout(() => map.invalidateSize(), 150);
    });
    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [located]);

  function focus(slug: string) {
    setActive(slug);
    const m = markersRef.current[slug];
    if (m && mapRef.current) {
      mapRef.current.flyTo(m.getLatLng(), 7, { duration: 0.6 });
      m.openPopup();
    }
  }

  return (
    <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-[360px_1fr]">
      <div
        ref={mapEl}
        className="order-1 min-h-[340px] overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--sc-line)] lg:order-2 lg:min-h-[600px]"
        style={{ background: "var(--sc-cream-2)", zIndex: 0 }}
      />
      <aside className="order-2 flex max-h-none flex-col gap-2 lg:order-1 lg:max-h-[600px] lg:overflow-y-auto lg:pr-1">
        {located.length === 0 ? (
          <p className="p-5 text-sm text-ink-mute">這些行程沒有地圖座標。</p>
        ) : (
          located.map(({ j }) => (
            <button
              key={j.slug}
              type="button"
              onClick={() => focus(j.slug)}
              className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] border bg-paper px-4 py-3.5 text-left transition-colors ${
                active === j.slug
                  ? "border-forest bg-cream-2"
                  : "border-[color:var(--sc-line)] hover:border-forest"
              }`}
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ background: TONE_BG[j.tone] }}
              />
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <b className="truncate text-[15px] font-medium">{j.name}</b>
                <em className="text-xs not-italic text-ink-mute">
                  {city(j)} · {STATUS_LABEL[getStatus(j)]} · {dayCount(j)} 天
                </em>
              </span>
              <span className="shrink-0 text-ink-mute">→</span>
            </button>
          ))
        )}
      </aside>
    </div>
  );
}
