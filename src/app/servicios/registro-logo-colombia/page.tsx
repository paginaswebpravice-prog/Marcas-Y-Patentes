import RegistroLogoColombiaContent from "./RegistroLogoColombiaContent";

/* ================= METADATA ================= */

export const metadata = {
  title: "Registro de logo en Colombia | Cómo proteger tu logo ante la SIC",
  description:
    "Aprende cómo registrar el logo de tu empresa en Colombia como marca ante la SIC. Guía legal completa desde Bogotá para proteger tu identidad visual.",
  keywords:
    "registro de logo Colombia, registrar logo empresa Colombia, marca figurativa SIC, propiedad intelectual Colombia, abogados marcas Bogotá",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/servicios/registro-logo-colombia",
  },

  openGraph: {
    title: "Registro de logo en Colombia | Guía legal SIC",
    description:
      "Protege el logo de tu empresa en Colombia registrándolo como marca ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/servicios/registro-logo-colombia",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Registro de logo en Colombia",
    description:
      "Cómo registrar el logo de tu empresa en Colombia ante la SIC.",
  },
};

/* ================= COMPONENT ================= */

export default function RegistroLogoColombiaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Registro de logo como marca en Colombia",
      description:
        "Servicio legal para registrar logos empresariales como marcas figurativas o mixtas ante la SIC en Colombia.",
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
        "Registro de logo en Colombia: cómo proteger la identidad visual de tu empresa",
      description:
        "Guía completa para registrar el logo de una empresa en Colombia como marca ante la SIC.",
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
          "https://marcas-y-patentes.vercel.app/servicios/registro-logo-colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Se puede registrar un logo en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, pero se registra como marca figurativa o mixta ante la SIC, no como 'logo' directamente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué protege el registro de un logo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Protege la identidad visual de tu empresa frente a usos no autorizados por terceros en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es obligatorio registrar el logo en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es obligatorio, pero sí altamente recomendable para proteger tu identidad comercial.",
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
      <RegistroLogoColombiaContent />
    </>
  );
}
