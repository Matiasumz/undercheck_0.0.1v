import { Code2, Workflow, Megaphone, BarChart3 } from "lucide-react";
import { services } from "@/lib/constants";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { RevealText } from "@/components/ui/RevealText";

const icons = [Code2, Workflow, Megaphone, BarChart3];

export function Services() {
  return (
    <section id="servicios" className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <RevealText>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            Servicios
          </p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-text sm:text-5xl">
            Soluciones para tu negocio
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-soft">
            Herramientas pensadas para resolver cuellos de botella concretos:
            desarrollo, automatización, publicidad y datos, con IA integrada
            en cada una.
          </p>
        </RevealText>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <RevealText key={service.id} delay={index * 0.06} className="h-full">
              <ServiceCard
                icon={icons[index]}
                title={service.title}
                description={service.description}
                index={index}
              />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
