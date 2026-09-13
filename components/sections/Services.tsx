"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Code2, Workflow, Megaphone, BarChart3 } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/lib/constants";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { useReducedMotion } from "@/lib/useReducedMotion";

const icons = [Code2, Workflow, Megaphone, BarChart3];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current || reducedMotion) return;

      const cards = cardsRef.current;
      gsap.set(cards, { position: "absolute", inset: 0 });
      gsap.set(cards.slice(1), { autoAlpha: 0, y: 60 });

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${(cards.length - 1) * 100}%`,
        pin: true,
        scrub: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 100}%`,
          scrub: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        const position = index - 1;
        tl.to(cards[index - 1], { autoAlpha: 0, y: -60 }, position).to(
          card,
          { autoAlpha: 1, y: 0 },
          position,
        );
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section id="servicios" className="px-6 sm:px-10">
      <div
        ref={sectionRef}
        className="relative flex min-h-svh flex-col justify-center py-16"
      >
        <p className="mb-6 font-display text-sm uppercase tracking-[0.3em] text-accent">
          Servicios
        </p>
        <div className="relative grid min-h-[420px] gap-6 sm:min-h-[460px] sm:grid-cols-2 lg:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <ServiceCard
                icon={icons[index]}
                title={service.title}
                description={service.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
