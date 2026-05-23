import Link from "next/link";

import { Container } from "@/components/layout/container";
import { mainNavigation, socialLinks } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white transition-colors hover:text-[#FF7A00] focus-visible:text-[#FF7A00]"
            >
              <span className="size-2 rounded-full bg-[#FF7A00] shadow-[0_0_18px_rgba(255,122,0,0.8)]" />
              butuh.Web
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Partner teknologi untuk bisnis Indonesia yang butuh website,
              aplikasi, dan pengalaman digital modern yang rapi dari strategi
              sampai produksi.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-sm font-semibold text-white">Navigasi</h2>
            <ul className="mt-4 grid gap-3">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-[#FF7A00] focus-visible:text-[#FF7A00]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Sosial</h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF7A00]/50 hover:text-[#FF7A00]"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} butuh.Web. All rights reserved.</p>
          <p>Built for ambitious Indonesian businesses.</p>
        </div>
      </Container>
    </footer>
  );
}
