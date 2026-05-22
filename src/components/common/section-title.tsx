interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}