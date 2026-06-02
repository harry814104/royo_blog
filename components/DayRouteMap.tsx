"use client";

import { useEffect, useRef } from "react";
import type { GeoPoint } from "@/lib/journeys";

const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

// 確保 Leaflet 只載入一次
let leafletPromise: Promise<unknown> | null = null;
function loadLeaflet(): Promise<unknown> {
  if (typeof window === "undefined") return Promise.resolve(null);
  // @ts-expect-error 由 CDN 注入
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
    // @ts-expect-error 由 CDN 注入
    script.onload = () => resolve(window.L);
    script.onerror = reject;
    document.body.appendChild(script);
  });
  return leafletPromise;
}

const KIND_COLOR: Record<NonNullable<GeoPoint["kind"]>, string> = {
  spot: "#3e574b",
  food: "#c89e69",
  stay: "#1f3b4d",
  transit: "#8a8478",
};

export default function DayRouteMap({ points }: { points: GeoPoint[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    if (points.length === 0) return;

    loadLeaflet().then((L: unknown) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const LL = L as any;
      if (cancelled || !containerRef.current || !LL) return;
      if (mapRef.current) return; // 已初始化

      const latlngs = points.map((p) => [p.lat, p.lng] as [number, number]);
      const map = LL.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      });
      mapRef.current = map;

      LL.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 18,
      }).addTo(map);

      // 路線 — 先畫白色襯底(casing)讓線在地圖上更明顯
      LL.polyline(latlngs, {
        color: "#fdfbf5",
        weight: 8,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      // 路線 — 主線(實線、加粗、深色)
      LL.polyline(latlngs, {
        color: "#c44e3c",
        weight: 4,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      // 點位
      points.forEach((p, i) => {
        const color = KIND_COLOR[p.kind ?? "spot"];
        const marker = LL.circleMarker([p.lat, p.lng], {
          radius: 9,
          color: "#fdfbf5",
          weight: 2,
          fillColor: color,
          fillOpacity: 1,
        }).addTo(map);
        marker.bindTooltip(`${i + 1}. ${p.name}`, {
          direction: "top",
          offset: [0, -8],
        });
      });

      map.fitBounds(latlngs, { padding: [40, 40], maxZoom: 14 });
      if (latlngs.length === 1) map.setView(latlngs[0], 13);
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [points]);

  return (
    <div
      ref={containerRef}
      className="h-72 w-full overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--sc-line)] sm:h-80"
      style={{ background: "var(--sc-cream-2)", zIndex: 0 }}
    />
  );
}
