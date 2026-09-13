"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function RevealText({
  children,
  className,
  delay = 0,
  y = 32,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;

      gsap.set(ref.current, { opacity: 0, y });
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref, dependencies: [reducedMotion, delay, y] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
