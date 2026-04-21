import ClasesMarcasColombiaContent from "./ClasesMarcasColombiaContent";

/* ================= METADATA ================= */

export const metadata = {
  title:
    "Clases de marcas en Colombia (Clasificación de Niza) | Cómo elegir correctamente",
  description:
    "Aprende cómo funcionan las clases de marcas en Colombia según la SIC y la Clasificación de Niza. Evita errores y protege correctamente tu marca en Bogotá y todo el país.",
  keywords:
    "clases de marcas Colombia, clasificación de Niza Colombia, SIC clases marcas, registro de marca clases Colombia, marcas y patentes Bogotá",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/clases-marcas-colombia",
  },

  openGraph: {
    title: "Clases de marcas en Colombia: guía completa",
    description:
      "Descubre cómo elegir la clase correcta para registrar tu marca en Colombia según la SIC.",
    url: "https://marcas-y-patentes.vercel.app/blog/clases-marcas-colombia",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clases de marcas en Colombia",
    description:
      "Guía completa sobre la Clasificación de Niza y el registro de marcas en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function ClasesMarcasSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Clases de marcas en Colombia: cómo elegir correctamente según la SIC",
      description:
        "Guía completa sobre la clasificación de Niza en Colombia y cómo elegir la clase adecuada para registrar tu marca.",
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
          "https://marcas-y-patentes.vercel.app/blog/clases-marcas-colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuántas clases existen en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Existen 45 clases según la Clasificación de Niza: 34 de productos y 11 de servicios.",
          },
        },
        {
          "@type": "Question",
          name: "¿Debo registrar mi marca en varias clases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de tu negocio. Si tienes varias actividades, es recomendable cubrir todas las relevantes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si elijo mal la clase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Podrías quedar sin protección o enfrentar rechazo por parte de la SIC.",
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
      <ClasesMarcasColombiaContent />
    </>
  );
}
