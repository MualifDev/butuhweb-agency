"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { fadeUpVariants, motionConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  delay?: number;
  margin?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  margin = "-80px",
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      transition={{ duration: motionConfig.duration, delay, ease: motionConfig.ease }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
