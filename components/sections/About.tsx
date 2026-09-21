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
            <span className="font-bold text-text">Undercheck</span> nació
            resolviendo un problema muy concreto del Under Porteño: acceso a
            una ticketera de calidad, sin los costos desmedidos de las
            plataformas “líderes”.
          </p>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-lg leading-relaxed text-text-soft">
            Resolver eso nos llevó a construir mucho más que una ticketera:
            hoy somos una agencia de desarrollo web, automatizaciones,
            publicidad y datos, potenciada por IA, que ayuda a otros negocios a
            moverse más rápido — con la misma lógica de siempre: calidad
            accesible, sin vueltas.
          </p>
        </RevealText>
      </div>
    </section>
  );
}
