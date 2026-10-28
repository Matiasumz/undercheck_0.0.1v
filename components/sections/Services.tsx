import { services } from "@/lib/constants";
import { ServicePoster } from "@/components/sections/ServicePoster";

// Cards apiladas: cada <li> es sticky con un escalón de 12px más que el
// anterior, así al bajar cada servicio tapa al previo y al subir se
// desapilan. Es solo position: sticky, sin JS ni animación.
export function Services() {
  return (
    <section id="servicios" className="scroll-mt-16 border-t border-junta">
      <div className="container-site py-16 sm:py-24">
        <div className="max-w-[65ch]">
          <h2 className="type-title text-3xl text-yeso">Servicios</h2>
          <p className="mt-4 leading-[1.7] text-humo">
            Cinco áreas para resolver problemas concretos de tu negocio, con IA
            en cada una.
          </p>
        </div>

        <ol className="mt-10 flex flex-col gap-6 sm:mt-14">
          {services.map((service, index) => (
            <li
              key={service.id}
              className="sticky"
              style={{ top: `calc(80px + ${index * 12}px)` }}
            >
              <article className="card grid gap-5 p-5 sm:p-8 lg:grid-cols-12 lg:gap-8">
                <ServicePoster
                  slug={service.code}
                  title={service.title}
                  className="aspect-[16/9] lg:col-span-4 lg:aspect-[4/5]"
                />
                <p className="max-w-[48ch] text-lg leading-[1.6] text-humo lg:col-span-8 lg:text-2xl lg:leading-[1.5]">
                  {service.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
