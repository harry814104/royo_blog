"use client";

import { useEffect, useState } from "react";

/**
 * Threads 式行為:向下捲動隱藏、向上捲動顯示、靠近頂端永遠顯示。
 * 回傳 hidden:true 代表此刻應該隱藏(Header 上滑、Dock 下滑)。
 */
export function useHideOnScroll(threshold = 6, topOffset = 80) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const diff = y - last;

      if (Math.abs(diff) > threshold) {
        if (y < topOffset) {
          setHidden(false); // 靠近頂端一律顯示
        } else {
          setHidden(diff > 0); // 往下捲 → 隱藏;往上捲 → 顯示
        }
        last = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, topOffset]);

  return hidden;
}
