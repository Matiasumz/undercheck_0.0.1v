import { services } from "@/lib/constants";
import { posterStyle } from "@/lib/palette";

// Cards apiladas: cada <li> es sticky con un escalón de 12px más que el
// anterior, así al bajar cada servicio tapa al previo y al subir se
// desapilan. Es solo position: sticky, sin JS ni animación.

// Una palabra sola no puede partirse: con palabras largas
// ("automatizaciones") se baja el cuerpo para que entre.
function titleSize(title: string) {
  const longestWord = Math.max(...title.split(" ").map((word) => word.length));
  if (longestWord > 12) return "text-[10vw] sm:text-6xl lg:text-7xl";
  return "text-[15vw] sm:text-8xl lg:text-9xl";
}

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-16">
      <div className="container-site pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 className="type-shout text-[18vw] text-yeso sm:text-8xl lg:col-span-7 lg:text-9xl">
            Servicios
          </h2>
          <p className="max-w-[40ch] text-lg leading-[1.6] text-humo lg:col-span-5">
            Cinco áreas para resolver problemas concretos de tu negocio, con IA
            en cada una.
          </p>
        </div>

        <ol className="mt-10 flex flex-col gap-6 sm:mt-14">
          {services.map((service, index) => {
            const { bg, ink } = posterStyle(index);
            return (
              <li
                key={service.id}
                className="sticky"
                style={{ top: `calc(80px + ${index * 12}px)` }}
              >
                <article
                  className="grid min-h-[22rem] grid-rows-[auto_1fr] gap-8 rounded-3xl p-6 sm:min-h-[26rem] sm:p-10 lg:grid-cols-12"
                  style={{ backgroundColor: bg, color: ink }}
                >
                  <span
                    aria-hidden="true"
                    className="font-dot text-lg font-black uppercase leading-none lg:col-span-12"
                  >
                    {service.code}
                  </span>
                  <div className="flex flex-col justify-end gap-6 lg:col-span-12 lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
                    <h3
                      className={`type-shout lg:col-span-8 ${titleSize(service.title)}`}
                    >
                      {service.title}
                    </h3>
                    <p className="max-w-[40ch] text-lg font-medium leading-[1.5] lg:col-span-4 lg:text-xl">
                      {service.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
