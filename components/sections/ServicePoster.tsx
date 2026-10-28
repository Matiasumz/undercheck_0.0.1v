// Afiche tipográfico generado: portada de cada servicio cuando no hay imagen.
// Fondo y tinta salen de la paleta y se eligen de forma estable con un
// hash FNV-1a del slug, así cada servicio conserva su color entre renders.

const STYLES = [
  { bg: "#A493FF", ink: "#1B1A18" }, // uv
  { bg: "#FF9E45", ink: "#1B1A18" }, // sodio
  { bg: "#EFEDE7", ink: "#1B1A18" }, // yeso
  { bg: "#252421", ink: "#EFEDE7" }, // losa
];

function pick(slug: string) {
  let h = 0x811c9dc5;
  for (const c of slug) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return STYLES[h % STYLES.length];
}

type ServicePosterProps = {
  slug: string;
  title: string;
  className?: string;
};

export function ServicePoster({ slug, title, className }: ServicePosterProps) {
  const { bg, ink } = pick(slug);

  return (
    <div
      className={`flex flex-col justify-between overflow-hidden rounded-2xl p-5 ${className ?? ""}`}
      style={{ backgroundColor: bg, color: ink }}
    >
      <span
        aria-hidden="true"
        className="font-dot text-base font-black uppercase leading-none"
      >
        {slug}
      </span>
      {/* El nombre de la portada es el título real del servicio. */}
      <h3
        className={`type-poster lowercase ${title.length > 22 ? "text-4xl" : "text-5xl"} lg:text-6xl`}
      >
        {title}
      </h3>
    </div>
  );
}
