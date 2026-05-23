import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  eyebrow,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[#FF7A00]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
