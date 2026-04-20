import RegistroMarcaContent from "./RegistroMarcaContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Registro de marca en Colombia | Abogados de marcas y patentes en Bogotá",
  description:
    "Registra tu marca en Colombia con abogados expertos en marcas y patentes. Protección legal, proceso ante la SIC y asesoría en Bogotá.",
  keywords:
    "registro de marca Colombia, marcas y patentes Colombia, abogados marcas Bogotá, registrar marca SIC, propiedad intelectual Colombia",
  robots: "index, follow",
  alternates: {
    canonical: "https://marcas-y-patentes.vercel.app/registro-marca-colombia",
  },

  openGraph: {
    title: "Registro de marca en Colombia | Marcas y Patentes",
    description:
      "Protege tu marca en Colombia con asesoría legal especializada. Registro ante la SIC en Bogotá.",
    url: "https://marcas-y-patentes.vercel.app/registro-marca-colombia",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Registro de marca en Colombia",
    description:
      "Registra tu marca con abogados expertos en propiedad intelectual.",
  },
};

/* ================= COMPONENT ================= */

export default function RegistroMarcaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Registro de marca en Colombia",
      description:
        "Servicio de registro de marca en Colombia con abogados especializados en propiedad intelectual.",
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
        "Registro de marca en Colombia: cómo proteger tu marca paso a paso",
      description:
        "Guía completa para registrar una marca en Colombia ante la SIC, requisitos, costos y proceso legal.",
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
        "@id": "https://marcas-y-patentes.vercel.app/registro-marca-colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo registrar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debes realizar una búsqueda de antecedentes, presentar la solicitud ante la SIC y esperar el proceso de evaluación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta registrar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende de la clase y las tasas oficiales de la SIC.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda el registro de marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El proceso puede tardar entre 6 y 12 meses.",
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
      <RegistroMarcaContent />
    </>
  );
}
