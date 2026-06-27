import JournalRiver from "@/components/JournalRiver";
import { POSTS } from "@/lib/posts";

export const metadata = {
  title: "日誌 · 隨筆與技術 — FLÂNEUR : ROYO",
  description: "日記、技術、AI、開箱、電影 —— 順著時間往下走,先讀最新的那一篇,其餘的慢慢挑。",
};

export default function JournalPage() {
  return <JournalRiver posts={POSTS} />;
}
