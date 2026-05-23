"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { StaggerContainer } from "@/components/common/stagger-container";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/homepage";
import { fadeUpVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export function PortfolioPreviewSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-b border-white/10 py-16 md:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <AnimatedSection>
            <SectionTitle
              eyebrow="Portfolio"
              title="Preview project yang terasa nyata sejak awal."
              subtitle="Contoh arah visual dan struktur project untuk bisnis yang butuh hasil modern, jelas, dan mudah dikembangkan."
              className="mb-0"
            />
          </AnimatedSection>

          <Button
            asChild
            variant="outline"
            className="w-fit border-white/15 bg-white/[0.03] text-white hover:border-[#FF7A00]/50 hover:bg-white/[0.06]"
          >
            <Link href="#kontak">
              Lihat Semua Project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUpVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171717]/80 transition-colors duration-300 hover:border-[#FF7A00]/45 hover:shadow-[0_18px_70px_rgba(255,122,0,0.08)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#111]">
                <div className="absolute inset-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#FF7A00]/20 via-white/[0.06] to-transparent p-4 transition-transform duration-500 group-hover:scale-[1.03]">
                  <div className="h-2 w-24 rounded-full bg-white/20" />
                  <div className="mt-5 grid gap-3">
                    <div className="h-16 rounded-xl bg-white/10" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-xl bg-[#FF7A00]/30" />
                      <div className="h-12 rounded-xl bg-white/10" />
                      <div className="h-12 rounded-xl bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-[#FFB366]">
                  {project.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-5 text-sm font-medium text-white">
                  {project.metric}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
