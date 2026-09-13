import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-3xl border border-border bg-surface p-10 sm:p-14">
      <div className="flex items-center justify-between">
        <Icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
        <span className="font-display text-sm text-text-muted">
          0{index + 1}
        </span>
      </div>
      <div className="mt-10">
        <h3 className="font-display text-3xl font-black uppercase tracking-tight text-text sm:text-5xl">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-lg text-text-soft">{description}</p>
      </div>
    </div>
  );
}
