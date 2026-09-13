"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NavOverlay } from "@/components/layout/NavOverlay";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-surface-strong/70 px-6 py-5 backdrop-blur-sm sm:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo-undercheck.png"
            alt="Undercheck"
            width={36}
            height={36}
            className="rounded-sm"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-black tracking-tight text-text">
              UNDERCHECK
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
              Keep it Under
            </span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-[2px] w-6 bg-text transition-transform duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-text transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-text transition-transform duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <NavOverlay isOpen={isOpen} onNavigate={() => setIsOpen(false)} />
    </>
  );
}
