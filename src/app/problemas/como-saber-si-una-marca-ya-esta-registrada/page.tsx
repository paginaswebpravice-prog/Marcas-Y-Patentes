import ComoSaberSiUnaMarcaYaEstaRegistradaContent from "./ComoSAberSiUnaMarcaYaEstaRegistradaContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Cómo saber si una marca ya está registrada en Colombia | Consulta SIC",
  description:
    "Aprende cómo verificar si una marca ya está registrada en Colombia ante la SIC. Guía legal completa desde Bogotá para evitar conflictos de registro.",
  keywords:
    "cómo saber si una marca está registrada Colombia, consulta marcas SIC, búsqueda de marcas Colombia, registro de marca Bogotá, propiedad intelectual Colombia",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/problemas/como-saber-si-una-marca-ya-esta-registrada",
  },

  openGraph: {
    title: "Cómo saber si una marca ya está registrada en Colombia | SIC",
    description:
      "Guía para verificar si una marca ya existe en Colombia antes de registrarla ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/problemas/como-saber-si-una-marca-ya-esta-registrada",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Consultar marcas registradas en Colombia",
    description:
      "Aprende a verificar si una marca ya está registrada ante la SIC en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function ComoSaberSiUnaMarcaYaEstaRegistradaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Consulta de marcas registradas en Colombia",
      description:
        "Servicio de asesoría para verificar si una marca está registrada en Colombia ante la SIC.",
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
        "Cómo saber si una marca ya está registrada en Colombia ante la SIC",
      description:
        "Guía completa para consultar si una marca ya está registrada en Colombia y evitar conflictos legales.",
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
          "https://marcas-y-patentes.vercel.app/problemas/como-saber-si-una-marca-ya-esta-registrada",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo saber si una marca ya está registrada en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debes realizar una búsqueda en la base de datos de la SIC para verificar si existen registros similares o idénticos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si registro una marca ya existente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La solicitud puede ser rechazada o generar oposiciones legales por parte del titular de la marca registrada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es obligatoria la búsqueda de antecedentes en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es obligatoria, pero es altamente recomendable para evitar conflictos y rechazos en el proceso de registro.",
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
      <ComoSaberSiUnaMarcaYaEstaRegistradaContent />
    </>
  );
}
