"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { navLinks } from "@/lib/constants";

type NavOverlayProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

export function NavOverlay({ isOpen, onNavigate }: NavOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!overlayRef.current) return;

      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(linksRef.current, { y: 24, opacity: 0 });

      // autoAlpha toggles visibility:hidden at 0, so the overlay is
      // automatically un-clickable/un-rendered while closed — no manual
      // pointer-events bookkeeping needed.
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, { autoAlpha: 1, duration: 0.4, ease: "power2.out" })
        .to(
          linksRef.current,
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" },
          "-=0.15",
        );
    },
    { scope: overlayRef, dependencies: [] },
  );

  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;

    if (isOpen) {
      tl.timeScale(1).play();
    } else {
      tl.timeScale(1.4).reverse();
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 overflow-y-auto bg-surface-strong py-24 sm:gap-8"
    >
      {navLinks.map((link, index) => (
        <a
          key={link.href}
          ref={(el) => {
            if (el) linksRef.current[index] = el;
          }}
          href={link.href}
          onClick={onNavigate}
          className="font-display text-3xl font-black uppercase tracking-tight text-text transition-colors hover:text-accent sm:text-6xl"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
