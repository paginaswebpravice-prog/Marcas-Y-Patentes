import ProblemasPorUsoMarcaSinRegistroContent from "./ProblemasPorUsoMarcaSinRegistroContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Problemas por usar una marca sin registro en Colombia | Riesgos legales SIC",
  description:
    "Descubre los problemas legales por usar una marca sin registro en Colombia. Riesgos, sanciones y cómo proteger tu marca ante la SIC en Bogotá.",
  keywords:
    "usar marca sin registrar Colombia, problemas marca sin registro, riesgos marca Colombia, propiedad intelectual Bogotá, registro de marca SIC",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/problemas/problemas-por-uso-marca-sin-registro",
  },

  openGraph: {
    title:
      "Problemas por usar una marca sin registro en Colombia | Riesgos legales",
    description:
      "Conoce los riesgos legales de usar una marca sin registro en Colombia y cómo protegerte ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/problemas/problemas-por-uso-marca-sin-registro",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Usar marca sin registro en Colombia",
    description:
      "Riesgos legales y problemas por usar una marca sin registrar en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function ProblemasPorUsoMarcaSinRegistroSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Riesgos por uso de marca sin registro en Colombia",
      description:
        "Asesoría legal sobre riesgos y conflictos por uso de marcas sin registrar en Colombia.",
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
        "Problemas por usar una marca sin registro en Colombia: riesgos legales",
      description:
        "Guía sobre los riesgos legales de usar una marca sin registro en Colombia y cómo evitar sanciones.",
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
          "https://marcas-y-patentes.vercel.app/problemas/problemas-por-uso-marca-sin-registro",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué pasa si uso una marca sin registrarla en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes enfrentar conflictos legales si otra persona registra la marca primero o si existe similitud con marcas ya registradas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Me pueden quitar una marca que uso sin registro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, si otra persona la registra legalmente ante la SIC, puede reclamar el uso exclusivo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es ilegal usar una marca sin registro en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es ilegal usarla, pero no tienes protección legal ni derechos exclusivos sobre ella.",
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
      <ProblemasPorUsoMarcaSinRegistroContent />
    </>
  );
}
