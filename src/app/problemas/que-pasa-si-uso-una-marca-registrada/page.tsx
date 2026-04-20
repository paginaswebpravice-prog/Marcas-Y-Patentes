import QuePasaSiUsoMarcaRegistradaContent from "./QuePasaSiUsoMarcaRegistradaContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Qué pasa si uso una marca registrada en Colombia | Riesgos legales SIC",
  description:
    "Descubre qué pasa si usas una marca registrada en Colombia sin autorización. Riesgos legales, sanciones y cómo evitar demandas ante la SIC.",
  keywords:
    "usar marca registrada Colombia, riesgos uso marca registrada, propiedad intelectual Colombia, demandas marcas SIC, abogados marcas Bogotá",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/problemas/que-pasa-si-uso-marca-registrada",
  },

  openGraph: {
    title: "Qué pasa si uso una marca registrada en Colombia | Riesgos legales",
    description:
      "Conoce las consecuencias legales de usar una marca registrada en Colombia sin autorización.",
    url: "https://marcas-y-patentes.vercel.app/problemas/que-pasa-si-uso-marca-registrada",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Usar marca registrada en Colombia",
    description:
      "Riesgos legales por usar una marca registrada sin autorización en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function QuePasaSiUsoMarcaRegistradaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Conflictos por uso de marca registrada en Colombia",
      description:
        "Asesoría legal sobre uso indebido de marcas registradas en Colombia y conflictos ante la SIC.",
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Bogotá, Colombia",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Qué pasa si uso una marca registrada en Colombia sin autorización",
      description:
        "Guía legal sobre consecuencias de usar una marca registrada en Colombia sin permiso del titular.",
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
          "https://marcas-y-patentes.vercel.app/problemas/que-pasa-si-uso-marca-registrada",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué pasa si uso una marca registrada en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes enfrentar demandas, sanciones y órdenes de cese de uso por parte del titular de la marca registrada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Me pueden demandar por usar una marca registrada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, el titular de la marca puede iniciar acciones legales por infracción de propiedad industrial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es delito usar una marca registrada en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No siempre es delito penal, pero sí puede generar responsabilidad civil y administrativa.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= CONTENIDO ================= */}
      <QuePasaSiUsoMarcaRegistradaContent />
    </>
  );
}
