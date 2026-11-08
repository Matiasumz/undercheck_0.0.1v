import { services } from "@/lib/constants";
import { Monogram } from "@/components/brand/Logo";

// Cinta inclinada con los servicios corriendo. Repite contenido que ya está
// en la página, así que es decorativa para lectores de pantalla.
export function Marquee() {
  const items = [...services, ...services];

  return (
    <div aria-hidden="true" className="overflow-hidden py-10 sm:py-14">
      <div className="-mx-4 -rotate-2 bg-sodio py-4 text-concreto sm:py-5">
        <ul className="marquee-track flex w-max items-center">
          {items.map((service, index) => (
            <li key={index} className="flex items-center">
              <span className="type-shout whitespace-nowrap px-6 text-4xl sm:text-6xl">
                {service.title}
              </span>
              <Monogram className="h-6 w-auto sm:h-9" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
