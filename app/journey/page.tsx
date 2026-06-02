import JourneyCard from "@/components/JourneyCard";
import { JOURNEYS, getStatus, sortForRiver } from "@/lib/journeys";

export const metadata = {
  title: "旅遊 · 行程與路線 — FLÂNEUR : ROYO",
  description: "由上而下,順著河道瀏覽即將出發與走過的旅程。",
};

export default function JourneyPage() {
  const sorted = sortForRiver(JOURNEYS);
  const ahead = sorted.filter((j) => getStatus(j) !== "past");
  const past = sorted.filter((j) => getStatus(j) === "past");

  return (
    <div className="mx-auto max-w-[1160px] px-6 py-24 sm:px-10">
      <p className="overline mb-3">Journey</p>
      <h1 className="text-4xl font-medium tracking-tight">旅遊 · 行程與路線</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        順著河道由上而下:最上面是即將啟程的計畫,往下是走過的痕跡。
      </p>

      {/* 河道 */}
      <div className="relative mt-14">
        {/* 垂直主線 */}
        <span
          aria-hidden
          className="absolute top-1 bottom-1 left-[7px] w-px sm:left-[9px]"
          style={{ background: "var(--sc-line)" }}
        />

        <RiverGroup label="即將啟程 · 計畫中" items={ahead} tone="live" />
        <RiverGroup label="走過的路 · 回顧" items={past} tone="past" />
      </div>
    </div>
  );
}

function RiverGroup({
  label,
  items,
  tone,
}: {
  label: string;
  items: typeof JOURNEYS;
  tone: "live" | "past";
}) {
  if (items.length === 0) return null;
  return (
    <section className="mb-4">
      {/* 群組節點 */}
      <div className="relative mb-6 flex items-center pl-9 sm:pl-12">
        <span
          aria-hidden
          className="absolute left-0 grid h-[18px] w-[18px] place-items-center rounded-full"
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
            {/* 行程節點 */}
            <span
              aria-hidden
              className="absolute left-[3px] top-6 h-2.5 w-2.5 rounded-full sm:left-[5px]"
              style={{
                background:
                  tone === "live" ? "var(--sc-wood)" : "var(--sc-fg-mute)",
                boxShadow: "0 0 0 3px var(--sc-cream)",
              }}
            />
            <JourneyCard journey={j} />
          </div>
        ))}
      </div>
    </section>
  );
}
