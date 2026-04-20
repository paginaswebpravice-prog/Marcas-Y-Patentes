import RegistroMarcaRestaurantesContent from "./RegitroMarcaRestaurantesContent";

/* ================= METADATA ================= */
export const metadata = {
  title:
    "Registro de marca para restaurantes en Bogotá y Colombia | Protege tu negocio",
  description:
    "Registra la marca de tu restaurante en Colombia y Bogotá. Protege tu nombre, logo y concepto gastronómico con asesoría profesional.",
  keywords:
    "registro de marca restaurantes Colombia, registrar marca restaurante Bogotá, marca restaurante Colombia, proteger nombre restaurante",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/industria/registro-marca-restaurantes",
  },
};

/* ================= COMPONENT ================= */
export default function RegistroMarcaRestaurantesSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Registro de marca para restaurantes en Colombia: protege tu negocio",
      description:
        "Guía completa para registrar la marca de un restaurante en Colombia y Bogotá.",
      author: {
        "@type": "Organization",
        name: "Marcas y Patentes",
      },
      publisher: {
        "@type": "Organization",
        name: "Marcas y Patentes",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://marcas-y-patentes.vercel.app/industria/registro-marca-restaurantes",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Es obligatorio registrar la marca de un restaurante en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es obligatorio, pero es altamente recomendable para proteger el nombre y evitar que terceros lo utilicen.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué se puede registrar en un restaurante?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes registrar el nombre, logo, slogan o una combinación de estos elementos como marca.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto dura el registro de marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El proceso puede tardar entre 6 y 8 meses dependiendo del caso.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Registro de marca para restaurantes en Colombia",
      url: "https://marcas-y-patentes.vercel.app/industria/registro-marca-restaurantes",
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
      description:
        "Servicio de registro de marca para restaurantes en Colombia con asesoría especializada.",
    },
  ];

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ================= CONTENIDO ================= */}
      <RegistroMarcaRestaurantesContent />
    </>
  );
}
