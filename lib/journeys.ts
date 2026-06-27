// ── Journey 資料模型 ───────────────────────────────
// 本地資料來源。每個行程一筆,之後可改為從 MDX/JSON 讀取。

export type JourneyScope = "overseas" | "domestic"; // 出國 / 國內

/** 地圖點位:每日移動路線會由 points 依序連成線 */
export interface GeoPoint {
  name: string;
  lat: number;
  lng: number;
  /** 點位類型,用於地圖圖示 */
  kind?: "spot" | "food" | "stay" | "transit";
}

export type TimeOfDay = "morning" | "afternoon" | "evening";

/** 單一景點 */
export interface Spot {
  no?: string; // 序號,例 "01"
  name: string;
  time?: string; // 例 "09:00–11:30"
  desc?: string;
  meta?: string[]; // 票價、停留時間、必拍等
  mapUrl?: string; // Google Maps 連結
}

/** 交通說明 */
export interface TransportNote {
  mode: string; // 例:新幹線 / 地鐵 / 步行
  text: string;
}

/** 時段區塊:早上 / 下午 / 晚上 */
export interface TimeBlock {
  period: TimeOfDay;
  label: string; // 例:早上 · Morning at the Castle
  /** 依序排列的景點與交通 */
  items: Array<
    | { type: "spot"; spot: Spot }
    | { type: "transport"; note: TransportNote }
  >;
}

export interface Restaurant {
  name: string;
  desc?: string;
  prices?: string[]; // 例:["¥900–1,200／人", "⏰ 24 小時"]
}

export interface MealBlock {
  title: string; // 例:Dinner · 晚餐推薦
  restaurants: Restaurant[];
}

/** 單日行程 */
export interface JourneyDay {
  day: number; // 第幾天,從 1 起
  date?: string; // 顯示用日期字串
  title: string;
  summary?: string;
  /** 時段區塊(完整行程用) */
  blocks?: TimeBlock[];
  /** 當日餐飲推薦 */
  meals?: MealBlock[];
  /** 當日住宿 */
  lodging?: string;
  /** 當日移動路線:依序站點 + Google Maps 路線連結 */
  route?: { stops: string[]; mapUrl?: string };
  /** 當日移動路線的依序點位(Leaflet 地圖用) */
  points: GeoPoint[];
}

export interface Hotel {
  area: string; // 例:大阪 · Day 1–3 三晚
  name: string;
  meta: string[]; // 價格、位置、評分
  desc: string;
}

export interface BudgetRow {
  date: string;
  transport: string;
  tickets: string;
  food: string;
  lodging: string;
  total: string;
  isTotal?: boolean;
}

export interface Tip {
  title: string;
  body: string;
}

export interface Journey {
  slug: string;
  name: string; // 行程名字
  place: string; // 地點顯示,例:日本 · 京都
  scope: JourneyScope;
  startDate: string; // ISO yyyy-mm-dd
  endDate: string; // ISO yyyy-mm-dd
  cover?: string; // 封面圖路徑(/public)
  tone: "forest" | "wood" | "deep";
  excerpt: string; // 一句話簡介
  tags?: string[];
  /** Hero 區補充資訊(人數、風格、亮點等) */
  highlights?: Array<{ label: string; value: string }>;
  days?: JourneyDay[];
  hotels?: Hotel[];
  budget?: BudgetRow[];
  budgetNote?: string;
  tips?: Tip[];
}

// ── 狀態與工具 ─────────────────────────────────────

export type JourneyStatus = "upcoming" | "ongoing" | "past";

export function getStatus(j: Journey, now = new Date()): JourneyStatus {
  const start = new Date(j.startDate);
  const end = new Date(j.endDate);
  if (now < start) return "upcoming";
  if (now > end) return "past";
  return "ongoing";
}

/** 天數 */
export function dayCount(j: Journey): number {
  const start = new Date(j.startDate);
  const end = new Date(j.endDate);
  return Math.round((end.getTime() - start.getTime()) / 86400000) + 1;
}

/** 河道排序:未到 > 進行中 > 已過;同組內越新越上面 */
export function sortForRiver(list: Journey[], now = new Date()): Journey[] {
  const rank: Record<JourneyStatus, number> = { upcoming: 0, ongoing: 1, past: 2 };
  return [...list].sort((a, b) => {
    const ra = rank[getStatus(a, now)];
    const rb = rank[getStatus(b, now)];
    if (ra !== rb) return ra - rb;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

export function formatRange(j: Journey): string {
  const fmt = (s: string) =>
    new Date(s).toLocaleDateString("zh-TW", { year: "numeric", month: "short", day: "numeric" });
  return `${fmt(j.startDate)} – ${fmt(j.endDate)}`;
}

// ── 資料 ───────────────────────────────────────────

import { okayamaKobeOsaka } from "./data/okayama-kobe-osaka";
import { nagoyaFukuoka } from "./data/nagoya-fukuoka";

export const JOURNEYS: Journey[] = [
  nagoyaFukuoka,
  okayamaKobeOsaka,
  {
    slug: "kyoto-autumn-2025",
    name: "京都秋日散步",
    place: "日本 · 京都",
    scope: "overseas",
    startDate: "2025-11-20",
    endDate: "2025-11-24",
    tone: "wood",
    excerpt: "清水寺的早晨,人聲還沒醒,只有掃落葉的聲音。",
    tags: ["紅葉", "寺廟", "散步"],
    days: [
      {
        day: 1,
        title: "清水寺與二年坂",
        lodging: "祇園町家",
        points: [
          { name: "清水寺", lat: 34.9949, lng: 135.785, kind: "spot" },
          { name: "二年坂", lat: 34.9968, lng: 135.7806, kind: "food" },
          { name: "祇園", lat: 35.0036, lng: 135.7752, kind: "stay" },
        ],
      },
    ],
  },
  {
    slug: "hualien-2025",
    name: "花蓮太平洋公路",
    place: "台灣 · 花蓮",
    scope: "domestic",
    startDate: "2025-06-06",
    endDate: "2025-06-08",
    tone: "forest",
    excerpt: "沿著台 11 線,左邊是山,右邊是無盡的藍。",
    tags: ["海岸", "自駕", "太魯閣"],
    days: [
      {
        day: 1,
        title: "太魯閣峽谷",
        lodging: "花蓮市區民宿",
        points: [
          { name: "砂卡礑步道", lat: 24.1583, lng: 121.6206, kind: "spot" },
          { name: "燕子口", lat: 24.1736, lng: 121.5575, kind: "spot" },
        ],
      },
    ],
  },
];

export function getJourney(slug: string): Journey | undefined {
  return JOURNEYS.find((j) => j.slug === slug);
}
