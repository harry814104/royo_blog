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

function toneBg(tone: Journey["tone"]) {
  return { forest: "#3e574b", wood: "#c89e69", deep: "#1f3b4d" }[tone];
}

export default function JourneyCard({ journey }: { journey: Journey }) {
  const status = getStatus(journey);
  const isAhead = status !== "past";

  return (
    <Link
      href={`/journey/${journey.slug}`}
      className="group nordic-card flex w-full overflow-hidden transition-all hover:-translate-y-0.5 hover:border-forest/35"
    >
      {/* 封面 / 色塊 */}
      <div
        className="relative w-24 shrink-0 sm:w-40"
        style={{ background: toneBg(journey.tone) }}
      >
        {journey.cover ? (
          <img
            src={journey.cover}
            alt={journey.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="absolute bottom-3 left-3 text-[10px] font-medium tracking-[0.14em] text-cream/80 sm:text-[11px]">
            {journey.scope === "overseas" ? "OVERSEAS" : "DOMESTIC"}
          </span>
        )}
      </div>

      {/* 內容 */}
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
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
          <span className="text-xs text-ink-mute">{journey.place}</span>
          <span className="text-xs text-ink-mute">· {dayCount(journey)} 天</span>
        </div>

        <h3 className="text-lg font-medium leading-7 tracking-tight transition-colors group-hover:text-forest sm:text-xl">
          {journey.name}
        </h3>
        <p className="mt-1 text-xs text-ink-mute">{formatRange(journey)}</p>
        <p className="mt-2 line-clamp-2 text-sm leading-7 text-ink-soft sm:line-clamp-none">
          {journey.excerpt}
        </p>

        {journey.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {journey.tags.map((t) => (
              <span
                key={t}
                className="rounded-[var(--radius-pill)] bg-cream-2 px-2.5 py-1 text-[11px] text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
