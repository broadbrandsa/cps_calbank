import Image from "next/image";
import { navMenus, academy } from "@/content/proposal";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b] py-12 text-white/70">
      <div className="cps-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/images/cps-logo.svg"
              alt="Cornerstone Performance Solutions"
              width={140}
              height={42}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Cornerstone Performance Solutions (Pty) Ltd. We solve business problems through learning.
            </p>
            <p className="mono mt-4 !text-white/40">#ShapeYourFuture</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-6">
            {navMenus.map((menu) => (
              <div key={menu.label}>
                <a
                  href={menu.href}
                  className="mono !text-white/45 transition-colors duration-100 hover:!text-cps-yellow"
                >
                  {menu.label}
                </a>
                <div className="mt-3 flex flex-col gap-2">
                  {menu.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm text-white/60 transition-colors duration-100 hover:text-cps-yellow"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Proposal prepared for {academy.client}, the {academy.name}.
          </p>
          <p>Confidential. For evaluation purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
