import { whyUsItems } from "@/lib/constants";

export function WhyUs() {
  return (
    <section
      id="porqueelegirnos"
      className="scroll-mt-16 border-t border-junta"
    >
      <div className="container-site py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 className="type-title text-3xl text-yeso lg:col-span-4">
            Por qué elegirnos
          </h2>

          <dl className="border-y border-junta lg:col-span-8">
            {whyUsItems.map((item) => (
              <div
                key={item.id}
                className="grid gap-1 border-t border-junta py-5 first:border-t-0 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <dt className="font-medium text-yeso">{item.title}</dt>
                <dd className="leading-[1.6] text-humo">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
