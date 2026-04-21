import { Metadata } from "next";
import RiesgoNoRegistrarMarcaContent from "./RiesgoNoRegistrarMarcaContent";

export const metadata: Metadata = {
  title:
    "¿Qué pasa si no registras tu marca en Colombia? Riesgos legales y comerciales",
  description:
    "Descubre los riesgos de no registrar tu marca en Colombia y cómo proteger tu negocio ante la SIC. Evita demandas, pérdidas económicas y problemas legales.",
  keywords: [
    "no registrar marca Colombia",
    "riesgos de no registrar marca",
    "protección de marca Colombia",
    "SIC Colombia marcas",
    "abogados marcas Bogotá",
  ],
  openGraph: {
    title: "Riesgos de no registrar tu marca en Colombia",
    description:
      "Evita problemas legales y pérdidas económicas registrando tu marca en Colombia a tiempo.",
    url: "https://marcas-y-patentes.vercel.app/blog/riesgos-no-registrar-marca",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
  },
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/riesgos-no-registrar-marca",
  },
};

export default function Page() {
  return (
    <>
      {/* ================= JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "¿Qué pasa si no registras tu marca en Colombia? Riesgos que debes conocer",
              description:
                "Conoce los riesgos legales y comerciales de no registrar tu marca en Colombia y cómo proteger tu negocio ante la SIC.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados",
              },
              mainEntityOfPage:
                "https://marcas-y-patentes.vercel.app/blog/riesgos-no-registrar-marca",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Puedo usar una marca sin registrarla en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, pero no tendrás protección legal. Otra persona podría registrarla y obligarte a dejar de usarla.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué hago si alguien registra mi marca primero?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puedes intentar oponerte o iniciar acciones legales, pero el proceso puede ser costoso y no siempre exitoso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Registrar una marca realmente evita problemas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, el registro ante la SIC te otorga derechos exclusivos en Colombia y te permite defender legalmente tu marca.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RiesgoNoRegistrarMarcaContent />
    </>
  );
}
