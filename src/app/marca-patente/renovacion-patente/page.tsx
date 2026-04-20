import RenovacionPatenteContent from "./RenovacionPatenteContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Renovación de patente en Colombia | Cómo mantener tu patente ante la SIC",
  description:
    "Aprende cómo renovar una patente en Colombia ante la SIC. Guía legal completa sobre vigencia, mantenimiento y protección de patentes en Bogotá.",
  keywords:
    "renovación de patente Colombia, renovar patente SIC, vigencia patente Colombia, abogados patentes Bogotá, propiedad industrial Colombia",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/marca-patente/renovacion-patente",
  },

  openGraph: {
    title: "Renovación de patente en Colombia | Guía legal SIC",
    description:
      "Evita perder tu patente en Colombia. Aprende cómo renovarla y mantener su protección legal ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/marca-patente/renovacion-patente",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renovación de patente en Colombia",
    description:
      "Guía legal para mantener y renovar patentes en Colombia ante la SIC.",
  },
};

/* ================= COMPONENT ================= */

export default function RenovacionPatenteSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Renovación de patente en Colombia",
      description:
        "Servicio legal especializado en renovación y mantenimiento de patentes ante la SIC en Colombia.",
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
        "Renovación de patente en Colombia: cómo mantener tu invención protegida",
      description:
        "Guía completa sobre la renovación y mantenimiento de patentes en Colombia ante la SIC.",
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
          "https://marcas-y-patentes.vercel.app/marca-patente/renovacion-patente",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Se debe renovar una patente en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, las patentes tienen una vigencia limitada y requieren mantenimiento y pago de anualidades para conservar su protección.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si no mantengo mi patente activa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si no se pagan las anualidades o no se mantiene el registro, la patente puede perder su protección legal.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto dura una patente en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las patentes de invención en Colombia tienen una duración aproximada de 20 años, sujetos a mantenimiento anual.",
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
      <RenovacionPatenteContent />
    </>
  );
}
