import { RevealText } from "@/components/ui/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CallToAction() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <RevealText className="mx-auto max-w-5xl rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight text-text sm:text-5xl">
          ¿Listo para llevar tu negocio
          <br className="hidden sm:block" /> al siguiente nivel?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-text-soft">
          Contanos cuál es el mayor desafío de tu negocio hoy y vemos juntos
          cómo la tecnología y la IA pueden resolverlo.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="#contacto"
            className="rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
          >
            Hablemos
          </MagneticButton>
          <MagneticButton
            href="#servicios"
            className="rounded-full border border-border-strong px-8 py-4 text-sm font-bold uppercase tracking-widest text-text transition-colors hover:border-accent hover:text-accent"
          >
            Ver todos los servicios
          </MagneticButton>
        </div>
      </RevealText>
    </section>
  );
}
