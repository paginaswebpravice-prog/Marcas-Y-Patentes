import RegistrarMarcaOCrearEmpresaContent from "./RegistrarMarcaOCrearEmpresaContent";

/* ================= METADATA ================= */
export const metadata = {
  title:
    "¿Registrar marca o crear empresa en Colombia? Guía legal completa SIC",
  description:
    "Descubre si debes registrar tu marca o crear primero tu empresa en Colombia. Guía legal con abogados en Bogotá sobre propiedad intelectual y constitución empresarial.",
  keywords:
    "registrar marca o crear empresa Colombia, constitución de empresa Colombia, registro de marca SIC, diferencias empresa y marca, abogados Bogotá propiedad intelectual",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/marca-patente/registrar-marca-o-crear-empresa",
  },

  openGraph: {
    title: "¿Registrar marca o crear empresa en Colombia?",
    description:
      "Guía legal en Colombia para decidir entre registrar tu marca o constituir tu empresa correctamente.",
    url: "https://marcas-y-patentes.vercel.app/marca-patente/registrar-marca-o-crear-empresa",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Registrar marca o crear empresa en Colombia",
    description:
      "Guía legal para emprendedores en Colombia sobre marca vs empresa.",
  },
};

/* ================= COMPONENT ================= */

export default function RegistrarMarcaOCrearEmpresaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Asesoría en creación de empresa y registro de marca en Colombia",
      description:
        "Servicio de asesoría legal en Colombia sobre constitución de empresas y registro de marcas ante la SIC.",
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
        "¿Registrar marca o crear empresa en Colombia? Lo que debes saber",
      description:
        "Guía legal para entender si debes registrar primero tu marca o constituir tu empresa en Colombia.",
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
          "https://marcas-y-patentes.vercel.app/marca-patente/registrar-marca-o-crear-empresa",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Es mejor registrar la marca o crear la empresa primero?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende del caso, pero generalmente se recomienda definir primero la marca para proteger la identidad del negocio.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo usar una marca sin registrar empresa en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, puedes usar una marca sin empresa constituida, pero no tendrás protección empresarial formal.",
          },
        },
        {
          "@type": "Question",
          name: "¿La empresa protege automáticamente mi marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. La empresa no protege la marca. Debes registrarla ante la SIC para tener derechos exclusivos.",
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
      <RegistrarMarcaOCrearEmpresaContent />
    </>
  );
}
