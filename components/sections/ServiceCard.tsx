import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="h-1.5 w-full bg-gradient-to-r from-accent to-accent-line" />
      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-border bg-surface-strong/60">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
            <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
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
