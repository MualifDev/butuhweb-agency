"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-[#FF7A00] shadow-[0_0_18px_rgba(255,122,0,0.65)]"
      style={{ scaleX }}
    />
  );
}
