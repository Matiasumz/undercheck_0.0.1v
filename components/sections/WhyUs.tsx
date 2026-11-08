import { whyUsItems } from "@/lib/constants";

export function WhyUs() {
  return (
    <section id="porqueelegirnos" className="scroll-mt-16">
      <div className="container-site py-16 sm:py-24">
        <h2 className="type-shout text-[14vw] text-yeso sm:text-7xl lg:text-8xl">
          Por qué elegirnos
        </h2>

        <dl className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:mt-14">
          {whyUsItems.map((item) => (
            <div key={item.id} className="border-t-2 border-yeso pt-5">
              <dt className="type-shout text-4xl text-yeso lg:text-5xl">
                {item.title}
              </dt>
              <dd className="mt-4 max-w-[32ch] leading-[1.6] text-humo">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
