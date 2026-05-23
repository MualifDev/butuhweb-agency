import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/layout/container";
import { stats } from "@/data/homepage";

export function StatsSection() {
  return (
    <section className="border-b border-white/10 py-8 md:py-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item, index) => (
            <AnimatedSection
              key={item.label}
              delay={index * 0.08}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors duration-300 hover:border-[#FF7A00]/40 hover:bg-white/[0.05]"
            >
              <p className="text-3xl font-semibold tracking-tight text-white">
                {item.value}
              </p>
              <h2 className="mt-2 text-sm font-medium text-[#FFB366]">
                {item.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
