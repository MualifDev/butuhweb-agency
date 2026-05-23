import { AnimatedSection } from "@/components/common/animated-section";
import { PrimaryCtaButton } from "@/components/common/cta-button";
import { Container } from "@/components/layout/container";
import { ctaBannerContent } from "@/constants/homepage";

export function CtaBannerSection() {
  return (
    <section id="kontak" className="scroll-mt-24 py-16 md:py-24 lg:py-28">
      <Container>
        <AnimatedSection className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717] px-6 py-12 shadow-[0_24px_90px_rgba(0,0,0,0.32)] md:px-12 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,0.2),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.1),transparent_26%)]" />
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/70 to-transparent" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#FF7A00]">
              {ctaBannerContent.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {ctaBannerContent.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
              {ctaBannerContent.description}
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryCtaButton
                href={ctaBannerContent.cta.href}
                className="w-full sm:w-auto"
              >
                {ctaBannerContent.cta.label}
              </PrimaryCtaButton>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
