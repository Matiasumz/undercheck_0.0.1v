export function About() {
  return (
    <section id="nosotros" className="scroll-mt-16">
      <div className="container-site py-16 sm:py-24">
        <h2 className="type-shout text-[18vw] text-yeso sm:text-8xl lg:text-9xl">
          Nosotros
        </h2>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12">
          <p className="type-title max-w-[30ch] text-2xl text-yeso sm:text-4xl lg:col-span-7">
            Undercheck es una agencia integral: desarrollo web,
            automatizaciones, publicidad, redes sociales y datos, con
            inteligencia artificial en todo lo que hacemos.
          </p>

          <div className="flex flex-col justify-between gap-10 rounded-3xl border border-uv p-6 sm:p-8 lg:col-span-5">
            <h3 className="type-shout text-6xl text-uv sm:text-7xl">
              Undercheck Pass
            </h3>
            <p className="text-lg leading-[1.6] text-humo">
              Nuestro producto propio: la ticketera y red social que eligió el
              under porteño. Lo que construimos para nuestros clientes, primero
              lo probamos con nuestra propia gente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
