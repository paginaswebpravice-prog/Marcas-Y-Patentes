import CostoMarcaContent from "./CostoMarcaContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "¿Cuánto cuesta registrar una marca en Colombia en 2025? | Guía completa",
  description:
    "Conoce el costo real de registrar una marca en Colombia en 2025 ante la SIC. Tasas oficiales, honorarios y factores que influyen en el precio.",
  keywords:
    "costo registrar marca Colombia 2025, precio registro marca SIC, cuanto cuesta marca Colombia, abogados marcas Bogotá, propiedad intelectual Colombia",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/costo-registrar-marca-colombia",
  },

  openGraph: {
    title: "Costo de registrar una marca en Colombia en 2025",
    description:
      "Descubre cuánto cuesta registrar una marca en Colombia y qué factores influyen en el precio.",
    url: "https://marcas-y-patentes.vercel.app/blog/costo-registrar-marca-colombia",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Costo registro de marca en Colombia",
    description: "Guía completa sobre precios, tasas SIC y costos reales.",
  },
};

/* ================= COMPONENT ================= */

export default function CostoMarcaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "¿Cuánto cuesta registrar una marca en Colombia en 2025?",
      description:
        "Guía completa sobre los costos del registro de marca en Colombia, incluyendo tasas de la SIC y honorarios.",
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
          "https://marcas-y-patentes.vercel.app/blog/costo-registrar-marca-colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta registrar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de las tasas de la SIC, número de clases y si se contrata asesoría legal.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se paga una sola vez?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El pago principal se realiza al inicio, pero pueden surgir costos adicionales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto dura el registro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El registro de marca tiene una vigencia de 10 años en Colombia.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <CostoMarcaContent />
    </>
  );
}
