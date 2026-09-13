import { whyUsItems } from "@/lib/constants";
import { RevealText } from "@/components/ui/RevealText";

export function WhyUs() {
  return (
    <section
      id="porqueelegirnos"
      className="bg-contrast-bg px-6 py-28 text-contrast-text sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <RevealText>
          <h2 className="font-display text-sm uppercase tracking-[0.3em] text-accent-active">
            Por qué elegirnos
          </h2>
        </RevealText>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {whyUsItems.map((item, index) => (
            <RevealText key={item.id} delay={index * 0.08}>
              <div className="border-t border-contrast-border pt-6">
                <h3 className="font-display text-2xl font-black uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-contrast-text-muted">{item.description}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
