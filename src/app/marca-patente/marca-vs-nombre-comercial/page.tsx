import MarcaVsNombreComercialContent from "./MarcaVSNombreComercialContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Marca vs nombre comercial en Colombia | Diferencias legales y registro SIC",
  description:
    "Descubre la diferencia entre marca y nombre comercial en Colombia. Guía legal con abogados en Bogotá sobre propiedad intelectual y registro ante la SIC.",
  keywords:
    "marca vs nombre comercial Colombia, diferencia marca y nombre comercial, registro de marca Colombia, nombre comercial SIC, propiedad intelectual Bogotá",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/marca-patente/marca-vs-nombre-comercial",
  },

  openGraph: {
    title: "Marca vs nombre comercial en Colombia | Guía legal",
    description:
      "Entiende la diferencia entre marca y nombre comercial en Colombia y cómo protegerlos legalmente ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/marca-patente/marca-vs-nombre-comercial",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Marca vs nombre comercial en Colombia",
    description:
      "Diferencias legales entre marca y nombre comercial en Colombia y su protección jurídica.",
  },
};

/* ================= COMPONENT ================= */

export default function MarcaVsNombreComercialSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Marca vs Nombre Comercial en Colombia",
      description:
        "Asesoría legal sobre diferencias entre marca y nombre comercial en Colombia con enfoque en propiedad intelectual.",
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
        "Marca vs nombre comercial en Colombia: diferencias y protección legal",
      description:
        "Guía completa sobre la diferencia entre marca y nombre comercial en Colombia y cómo protegerlos ante la SIC.",
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
          "https://marcas-y-patentes.vercel.app/marca-patente/marca-vs-nombre-comercial",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuál es la diferencia entre marca y nombre comercial en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La marca identifica productos o servicios, mientras que el nombre comercial identifica la actividad económica de una empresa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se deben registrar ambos en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No siempre es obligatorio, pero se recomienda registrar la marca ante la SIC para protección legal completa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Quién protege el nombre comercial en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El nombre comercial se protege por uso, pero también puede registrarse para mayor seguridad jurídica.",
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
      <MarcaVsNombreComercialContent />
    </>
  );
}
