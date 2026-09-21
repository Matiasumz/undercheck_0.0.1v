import { RevealText } from "@/components/ui/RevealText";

export function About() {
  return (
    <section id="nosotros" className="px-6 py-28 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <RevealText>
          <h2 className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            Nosotros
          </h2>
        </RevealText>
        <RevealText delay={0.05}>
          <p className="text-2xl leading-snug text-text sm:text-3xl">
            <span className="font-bold text-text">Undercheck</span> es la
            agencia que potencia negocios con desarrollo web,
            automatizaciones, publicidad y datos, todo con Inteligencia
            Artificial.
          </p>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-lg leading-relaxed text-text-soft">
            Y no solo lo decimos: lo probamos con productos propios.
            Undercheck Pass, nuestra ticketera, es uno de ellos: la prueba de
            que lo que construimos funciona de verdad.
          </p>
        </RevealText>
      </div>
    </section>
  );
}
