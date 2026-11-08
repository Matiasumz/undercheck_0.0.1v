import type { CSSProperties } from "react";
import { services } from "@/lib/constants";
import { posterStyle } from "@/lib/palette";

// Afiches pegados como en la calle: tres servicios de muestra, inclinados.
// Son decorativos; la lista real de servicios está más abajo.
const FLYERS = [
  { service: services[0], tilt: "-7deg" },
  { service: services[3], tilt: "4deg" },
  { service: services[2], tilt: "-2deg" },
];

export function Hero() {
  return (
    <section id="top" className="overflow-hidden">
      <div className="container-site pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="relative">
          <h1 className="type-shout hero-in text-[23vw] text-yeso lg:text-[clamp(10rem,16vw,14.5rem)]">
            <span className="block">Keep it</span>
            <span className="block">under</span>
          </h1>

          <div
            aria-hidden="true"
            className="hero-in mt-10 flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:mt-0"
            style={{ animationDelay: "160ms" }}
          >
            {FLYERS.map(({ service, tilt }, index) => {
              const { bg, ink } = posterStyle(index);
              return (
                <div
                  key={service.id}
                  className="flyer -mx-1 lg:-mx-3 flex aspect-[3/4] w-[31vw] max-w-48 flex-col justify-between rounded-xl p-3 sm:p-4 lg:w-48"
                  style={
                    {
                      backgroundColor: bg,
                      color: ink,
                      "--tilt": tilt,
                    } as CSSProperties
                  }
                >
                  <span className="font-dot text-sm font-black uppercase leading-none">
                    {service.code}
                  </span>
                  <span className="type-shout text-[4.6vw] sm:text-2xl">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="hero-in mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          style={{ animationDelay: "240ms" }}
        >
          <p className="max-w-[46ch] text-lg leading-[1.6] text-humo sm:text-xl">
            Somos una agencia de desarrollo web, automatizaciones, publicidad,
            redes sociales y datos. Usamos inteligencia artificial en cada
            proyecto.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contacto" className="btn btn-lg btn-accent">
              Escribinos
            </a>
            <a href="#servicios" className="btn btn-lg btn-secondary">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
