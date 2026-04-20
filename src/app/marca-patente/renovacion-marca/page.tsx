import RenovacionMarcaContent from "./RenovacionMarcaContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Renovación de marca en Colombia | Cómo renovar tu registro ante la SIC",
  description:
    "Aprende cómo renovar tu marca en Colombia ante la SIC. Guía legal completa con abogados en Bogotá sobre vigencia, plazos y protección de marcas registradas.",
  keywords:
    "renovación de marca Colombia, renovar marca SIC, vigencia marca Colombia, abogados marcas Bogotá, propiedad intelectual Colombia",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/marca-patente/renovacion-marca",
  },

  openGraph: {
    title: "Renovación de marca en Colombia | Guía legal SIC",
    description:
      "Evita perder tu marca en Colombia. Aprende cómo renovarla correctamente ante la SIC con asesoría legal especializada.",
    url: "https://marcas-y-patentes.vercel.app/marca-patente/renovacion-marca",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renovación de marca en Colombia",
    description:
      "Guía legal para renovar tu marca registrada ante la SIC en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function RenovacionMarcaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Renovación de marca en Colombia",
      description:
        "Servicio legal especializado en renovación de marcas registradas ante la SIC en Colombia.",
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
        "Renovación de marca en Colombia: cómo mantener tu registro activo",
      description:
        "Guía completa sobre la renovación de marcas en Colombia ante la SIC, plazos, requisitos y proceso legal.",
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
          "https://marcas-y-patentes.vercel.app/marca-patente/renovacion-marca",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuándo se debe renovar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las marcas en Colombia deben renovarse cada 10 años ante la SIC para mantener su protección legal.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si no renuevo mi marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si no renuevas tu marca, pierdes los derechos exclusivos sobre ella y puede ser registrada por terceros.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se puede renovar una marca vencida en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, existe un periodo de gracia, pero es recomendable renovar antes del vencimiento para evitar riesgos legales.",
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
      <RenovacionMarcaContent />
    </>
  );
}
