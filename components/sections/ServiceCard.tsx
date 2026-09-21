import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-transform duration-300 hover:-translate-y-1">
      <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent-line to-accent" />
      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-strong/60">
          <div className="absolute h-32 w-32 animate-pulse-glow rounded-full bg-accent/20 blur-2xl" />

          <div className="relative flex w-3/4 flex-col gap-3 rounded-xl border border-border-strong/60 bg-surface p-4 shadow-lg">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-border-strong" />
              <span className="h-2 w-2 rounded-full bg-border-strong" />
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <div className="h-2 w-3/4 rounded-full bg-border-strong/70" />
            <div className="h-2 w-1/2 rounded-full bg-border-strong/70" />
            <div className="flex items-center justify-center rounded-lg bg-accent/15 p-3">
              <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-text">
              {title}
            </h3>
            <span className="font-display text-sm text-text-muted">
              0{index + 1}
            </span>
          </div>
          <p className="mt-3 text-base leading-relaxed text-text-soft">{description}</p>
        </div>
      </div>
    </div>
  );
}
