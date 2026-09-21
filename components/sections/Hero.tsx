"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Wordmark } from "@/components/ui/Wordmark";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;

      const targets = containerRef.current.querySelectorAll("[data-hero-in]");
      gsap.set(targets, { y: 40, opacity: 0 });
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: containerRef, dependencies: [reducedMotion] },
  );

  return (
    <section
      id="top"
      ref={containerRef}
      className="flex min-h-svh flex-col items-center justify-center gap-8 px-6 pt-28 text-center sm:px-10"
    >
      <p
        data-hero-in
        className="rounded-full border border-border-strong px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent-bright"
      >
        Agencia AI-powered
      </p>
      <h1 data-hero-in>
        <Wordmark className="text-[13vw] leading-[0.85] sm:text-[9vw]" />
      </h1>
      <p data-hero-in className="max-w-xl text-lg text-text-soft sm:text-xl">
        Desarrollo web, automatizaciones, publicidad y datos — potenciados por
        IA para moverte más rápido que el resto.
      </p>
      <div data-hero-in className="flex flex-wrap items-center justify-center gap-4">
        <MagneticButton
          href="#contacto"
          className="rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
        >
          Empecemos
        </MagneticButton>
        <MagneticButton
          href="#servicios"
          className="rounded-full border border-border-strong px-8 py-4 text-sm font-bold uppercase tracking-widest text-text transition-colors hover:border-accent hover:text-accent"
        >
          Ver servicios
        </MagneticButton>
      </div>
    </section>
  );
}
