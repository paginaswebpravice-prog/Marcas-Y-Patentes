import BusquedaAntecedentesMarcaContent from "./BusquedaAntecedentesMarcaContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Búsqueda de antecedentes marcarios en Colombia | Verifica tu marca antes de registrarla",
  description:
    "Aprende cómo hacer la búsqueda de antecedentes marcarios en Colombia antes de registrar tu marca ante la SIC. Evita rechazos y problemas legales en Bogotá.",
  keywords:
    "búsqueda antecedentes marcarios Colombia, verificar marca SIC, consulta marca registrada Colombia, disponibilidad de marca Bogotá, registro marca Colombia",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/busqueda-antecedentes-marca",
  },

  openGraph: {
    title: "Búsqueda de antecedentes marcarios en Colombia",
    description:
      "Guía completa para verificar si una marca ya está registrada en Colombia antes de iniciar el proceso ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/blog/busqueda-antecedentes-marca",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Verifica tu marca antes de registrarla en Colombia",
    description:
      "Evita errores legales haciendo una búsqueda de antecedentes marcarios en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function BusquedaAntecedentesMarcaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Búsqueda de antecedentes marcarios en Colombia",
      description:
        "Guía completa para verificar si una marca está disponible en Colombia antes de registrarla ante la SIC.",
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
          "https://marcas-y-patentes.vercel.app/blog/busqueda-antecedentes-marca",
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
            text: "Debes consultar la base de datos de la SIC y analizar similitudes fonéticas, visuales y conceptuales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es obligatoria la búsqueda de antecedentes marcarios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es obligatoria, pero es fundamental para evitar rechazos en el proceso de registro.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si no hago la búsqueda de marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes enfrentar oposiciones, rechazos y posibles conflictos legales con marcas existentes.",
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

      <BusquedaAntecedentesMarcaContent />
    </>
  );
}
