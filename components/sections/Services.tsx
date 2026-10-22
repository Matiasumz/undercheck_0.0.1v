import { services } from "@/lib/constants";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-16 border-t border-junta">
      <div className="container-site py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="type-title text-3xl text-yeso">Servicios</h2>
            <p className="mt-4 max-w-[40ch] leading-[1.7] text-humo">
              Cuatro áreas para resolver problemas concretos de tu negocio, con
              IA en cada una.
            </p>
          </div>

          <ul className="border-y border-junta lg:col-span-8">
            {services.map((service) => (
              <li
                key={service.id}
                className="grid gap-2 border-t border-junta py-5 first:border-t-0 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <h3 className="type-title text-2xl text-yeso">
                  {service.title}
                </h3>
                <p className="max-w-[65ch] leading-[1.6] text-humo sm:pt-1">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
