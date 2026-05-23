"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { staggerContainerVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StaggerContainerProps = HTMLMotionProps<"div">;

export function StaggerContainer({
  children,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
