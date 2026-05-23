"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { PrimaryCtaButton } from "@/components/common/cta-button";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/homepage";
import { heroHighlights } from "@/data/homepage";
import { motionConfig, scaleInVariants } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/10 py-20 md:py-28 lg:py-32"
    >
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,0.14),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_28%)]"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/60 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionConfig.duration, ease: motionConfig.ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10 px-3 py-1 text-sm font-medium text-[#FFB366]">
              <Sparkles className="size-4" />
              {heroContent.eyebrow}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              {heroContent.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryCtaButton
                href={heroContent.primaryCta.href}
                className="w-full sm:w-auto"
              >
                {heroContent.primaryCta.label}
              </PrimaryCtaButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white/15 bg-white/[0.03] text-white hover:border-[#FF7A00]/50 hover:bg-white/[0.06] sm:w-auto"
              >
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      variants={scaleInVariants}
      initial="hidden"
      animate="visible"
      className="relative"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 rounded-[2rem] bg-[#FF7A00]/10 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717]/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-green-400" />
          <span className="ml-auto text-xs text-zinc-500">butuhweb.app</span>
        </div>

        <div className="grid gap-3 pt-4 sm:grid-cols-2">
          {heroHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ delay: 0.25 + index * 0.06, duration: 0.35 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#FF7A00]/35 hover:bg-white/[0.06]"
              >
                <Icon className="size-5 text-[#FF7A00]" />
                <p className="mt-4 text-xs text-zinc-500">{item.label}</p>
                <p className="mt-1 font-medium text-white">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
