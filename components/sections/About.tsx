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
              Undercheck es una agencia que ayuda a negocios a crecer con
              desarrollo web, automatizaciones, publicidad y datos. Trabajamos
              con inteligencia artificial en todo lo que hacemos.
            </p>
            <p className="mt-6 max-w-[65ch] leading-[1.7] text-humo">
              También hacemos productos propios. Uno de ellos es Undercheck
              Pass, nuestra ticketera: lo que construimos para otros, primero lo
              probamos nosotros.
            </p>

            <dl className="mt-10 border-y border-junta">
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[10rem_1fr]">
                <dt className="text-humo">Producto</dt>
                <dd className="flex flex-wrap items-center gap-3 text-yeso">
                  Undercheck Pass
                  <span className="badge badge-sodio">Producto propio</span>
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-junta py-4 sm:grid-cols-[10rem_1fr]">
                <dt className="text-humo">Qué es</dt>
                <dd className="text-yeso">Ticketera para eventos</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
