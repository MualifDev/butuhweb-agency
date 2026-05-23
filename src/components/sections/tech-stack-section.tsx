"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { StaggerContainer } from "@/components/common/stagger-container";
import { Container } from "@/components/layout/container";
import { techStack } from "@/data/homepage";
import { fadeUpVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export function TechStackSection() {
  return (
    <section
      id="tentang"
      className="scroll-mt-24 border-b border-white/10 py-16 md:py-24 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Tech Stack"
            title="Teknologi modern untuk produk yang bisa tumbuh."
            subtitle="Kami memilih stack yang stabil, familiar di industri, dan mudah dirawat oleh tim internal maupun partner teknologi berikutnya."
            align="center"
          />
        </AnimatedSection>

        <StaggerContainer className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeUpVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-colors duration-300 hover:border-[#FF7A00]/45 hover:bg-[#FF7A00]/10"
            >
              <p className="text-base font-semibold text-white">{tech.name}</p>
              <p className="mt-2 text-sm text-zinc-500 transition-colors group-hover:text-zinc-300">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
