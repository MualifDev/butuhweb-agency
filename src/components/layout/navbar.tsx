"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { PrimaryCtaButton } from "@/components/common/cta-button";
import { Container } from "@/components/layout/container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mainNavigation, primaryCta } from "@/constants/navigation";
import { useActiveNavigation } from "@/hooks/use-active-navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSectionId, isActive } = useActiveNavigation({
    items: mainNavigation,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        isScrolled
          ? "border-white/10 bg-[#0F0F0F]/82 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl"
          : "border-transparent bg-[#0F0F0F]/45 backdrop-blur-md"
      )}
    >
      <Container>
        <nav
          aria-label="Navigasi utama"
          className="flex h-20 items-center justify-between"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white outline-none transition-colors hover:text-[#FF7A00] focus-visible:text-[#FF7A00]"
          >
            <span className="size-2 rounded-full bg-[#FF7A00] shadow-[0_0_18px_rgba(255,122,0,0.8)] transition-transform duration-300 group-hover:scale-125" />
            butuh.Web
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {mainNavigation.map((item) => {
              const itemIsActive = isActive(item);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={itemIsActive ? "page" : undefined}
                  className={cn(
                    "group relative text-sm font-medium transition-colors duration-300 hover:text-white focus-visible:text-white",
                    itemIsActive
                      ? "text-[#FF7A00] drop-shadow-[0_0_12px_rgba(255,122,0,0.45)]"
                      : "text-zinc-300"
                  )}
                >
                  {item.label}
                  {itemIsActive ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute -bottom-2 left-0 h-px w-full bg-[#FF7A00] shadow-[0_0_14px_rgba(255,122,0,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#FF7A00] transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <PrimaryCtaButton href={primaryCta.href} size="default">
              {primaryCta.label}
            </PrimaryCtaButton>
          </div>

          <div className="lg:hidden">
            <MobileNavigation activeSectionId={activeSectionId} />
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}

function MobileNavigation({ activeSectionId }: { activeSectionId: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          aria-label="Buka navigasi"
          className="border border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent className="border-white/10 bg-[#0F0F0F] p-0 text-white">
        <SheetHeader className="border-b border-white/10 p-6 text-left">
          <SheetTitle className="text-lg text-white">butuh.Web</SheetTitle>
          <SheetDescription className="text-zinc-400">
            Software house modern untuk website dan aplikasi bisnis.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 flex-col px-6 py-5">
          <div className="grid gap-2">
            {mainNavigation.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04, duration: 0.28 }}
              >
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    aria-current={
                      activeSectionId === item.sectionId ? "page" : undefined
                    }
                    className={cn(
                      "flex rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:bg-white/[0.06] focus-visible:text-white",
                      activeSectionId === item.sectionId
                        ? "bg-[#FF7A00]/10 text-[#FFB366]"
                        : "text-zinc-200"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </motion.div>
            ))}
          </div>

          <SheetClose asChild>
            <PrimaryCtaButton href={primaryCta.href} className="mt-8 w-full">
              {primaryCta.label}
            </PrimaryCtaButton>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
