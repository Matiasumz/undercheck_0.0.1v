export function About() {
  return (
    <section id="nosotros" className="scroll-mt-16 border-t border-junta">
      <div className="container-site py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 className="type-title text-3xl text-yeso lg:col-span-4">
            Nosotros
          </h2>

          <div className="lg:col-span-8">
            <p className="max-w-[65ch] text-xl leading-[1.6] text-yeso sm:text-2xl">
              Undercheck es una agencia integral: desarrollo web,
              automatizaciones, publicidad, redes sociales y datos, con
              inteligencia artificial en todo lo que hacemos.
            </p>
            <p className="mt-6 max-w-[65ch] text-lg leading-[1.7] text-humo">
              Además tenemos un producto propio: Undercheck Pass, la ticketera y
              red social que eligió el under porteño. Lo que construimos para
              nuestros clientes, primero lo probamos con nuestra propia gente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
