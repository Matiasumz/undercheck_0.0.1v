import { CONTACT_EMAIL, services } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

// Datos estructurados para que Google entienda quiénes somos y qué hacemos.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#agencia`,
      name: "Undercheck",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/opengraph-image.png`,
      email: CONTACT_EMAIL,
      slogan: "Keep it under",
      description:
        "Agencia de marketing digital: desarrollo web, automatizaciones, publicidad, redes sociales y datos, con inteligencia artificial en cada proyecto.",
      areaServed: { "@type": "Country", name: "Argentina" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#web`,
      url: SITE_URL,
      name: "Undercheck",
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#agencia` },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
