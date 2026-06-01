"use client";

import BrandMark from "@/components/BrandMark";
import ThemeToggle from "@/components/ThemeToggle";
import { useHideOnScroll } from "@/components/useHideOnScroll";

export default function Header() {
  const hidden = useHideOnScroll();

  return (
    <header className="site-header" data-hidden={hidden}>
      <div className="mx-auto flex h-14 max-w-[1160px] items-center justify-between px-6 sm:px-10">
        <BrandMark />
        <ThemeToggle />
      </div>
    </header>
  );
}
