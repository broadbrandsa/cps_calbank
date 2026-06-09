"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navMenus } from "@/content/proposal";
import { ChevronDown } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300",
        scrolled || openMenu
          ? "bg-[#0a0c1c]/90 backdrop-blur-[20px] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent",
      )}
    >
      <div className="cps-container flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="CPS home">
          <Image
            src="/images/cps-logo.svg"
            alt="Cornerstone Performance Solutions"
            width={132}
            height={40}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop dropdown menus */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navMenus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => open(menu.label)}
              onMouseLeave={scheduleClose}
            >
              <a
                href={menu.href}
                className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm text-white/80 transition-colors duration-100 hover:bg-white/10 hover:text-white"
                aria-haspopup="true"
                aria-expanded={openMenu === menu.label}
                onFocus={() => open(menu.label)}
              >
                {menu.label}
                <ChevronDown
                  className={cn("size-3.5 transition-transform", openMenu === menu.label && "rotate-180")}
                />
              </a>
              <div
                className={cn(
                  "absolute left-0 top-[calc(100%+8px)] w-64 origin-top rounded-2xl border border-black/5 bg-white p-2 shadow-[0_24px_64px_-12px_rgba(10,12,28,0.28)] transition duration-150",
                  openMenu === menu.label
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
                role="menu"
              >
                {menu.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block rounded-xl px-3.5 py-2.5 text-sm text-ink transition-colors duration-100 hover:bg-surface-1"
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2.5 text-[11px] text-white/55 md:flex">
            <span className="mono !text-white/55">Prepared for</span>
            <span className="flex items-center rounded-md bg-white px-2.5 py-1.5">
              <Image
                src="/images/calbank-logo-300x125-1.png"
                alt="CalBank"
                width={300}
                height={125}
                className="h-4 w-auto"
              />
            </span>
          </span>
          <Link href="/#contact" className="btn-yellow !px-4 !py-2.5 !text-[13px]">
            Talk to CPS
          </Link>
          <button
            type="button"
            className="text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {mobileOpen ? <path d="M6 6 18 18M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-white/10 bg-[#0a0c1c]/95 backdrop-blur-[20px] lg:hidden">
          <div className="cps-container flex flex-col gap-4 py-5">
            {navMenus.map((menu) => (
              <div key={menu.label}>
                <a
                  href={menu.href}
                  onClick={() => setMobileOpen(false)}
                  className="mono block !text-cps-yellow-warm"
                >
                  {menu.label}
                </a>
                <div className="mt-2 flex flex-col">
                  {menu.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-[15px] text-white/80"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
