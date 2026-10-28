// La tipografía es el diseño del hero: sin imagen de fondo ni gradiente.
// La entrada escalonada (hero-in) es el único momento orquestado del sitio.
export function Hero() {
  return (
    <section id="top" className="container-site pb-16 pt-12 sm:pb-24 sm:pt-20">
      <h1 className="type-poster hero-in text-[25vw] text-yeso sm:text-[clamp(7rem,17vw,11rem)] lg:text-[clamp(11rem,15vw,13rem)]">
        keep it under
      </h1>
      <p
        className="hero-in mt-8 max-w-[52ch] text-lg leading-[1.6] text-humo sm:mt-10 sm:text-xl"
        style={{ animationDelay: "120ms" }}
      >
        Somos una agencia de desarrollo web, automatizaciones, publicidad, redes
        sociales y datos. Usamos inteligencia artificial en cada proyecto.
      </p>
      <div
        className="hero-in mt-8 flex flex-wrap gap-3"
        style={{ animationDelay: "200ms" }}
      >
        <a href="#servicios" className="btn btn-primary">
          Ver servicios
        </a>
        <a href="#contacto" className="btn btn-secondary">
          Escribinos
        </a>
      </div>
    </section>
  );
}
