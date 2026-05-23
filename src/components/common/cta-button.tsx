import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
};

export function PrimaryCtaButton({
  href,
  children,
  className,
  size = "lg",
}: CtaButtonProps) {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "bg-[#FF7A00] text-white shadow-[0_0_32px_rgba(255,122,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8f26] hover:shadow-[0_0_42px_rgba(255,122,0,0.34)]",
        className
      )}
    >
      <Link href={href}>
        {children}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
      </Link>
    </Button>
  );
}
