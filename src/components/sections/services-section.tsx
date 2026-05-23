"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { StaggerContainer } from "@/components/common/stagger-container";
import { Container } from "@/components/layout/container";
import { services } from "@/data/homepage";
import { fadeUpVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section
      id="layanan"
      className="scroll-mt-24 border-b border-white/10 py-16 md:py-24 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Layanan"
            title="Solusi digital dari strategi sampai launch."
            subtitle="Pilih layanan sesuai kebutuhan bisnismu, atau gabungkan semuanya menjadi satu proses product development yang rapi."
          />
        </AnimatedSection>

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUpVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717]/80 p-6 transition-colors duration-300 hover:border-[#FF7A00]/45 hover:bg-[#1D1D1D]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/0 to-transparent transition-colors duration-300 group-hover:via-[#FF7A00]/70" />
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-[#FF7A00]/25 bg-[#FF7A00]/10 text-[#FF7A00] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
