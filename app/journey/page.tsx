import JourneyBrowse from "@/components/JourneyBrowse";
import { JOURNEYS } from "@/lib/journeys";

export const metadata = {
  title: "旅遊 · 行程與路線 — FLÂNEUR : ROYO",
  description: "用搜尋、篩選或地圖,換個方式重新逛一遍即將出發與走過的旅程。",
};

export default function JourneyPage() {
  return <JourneyBrowse journeys={JOURNEYS} />;
}
