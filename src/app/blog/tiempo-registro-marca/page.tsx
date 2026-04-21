import { Metadata } from "next";
import TiempoRegistroMarcaContent from "./TiempoRegistroMarcaContent";

export const metadata: Metadata = {
  title:
    "¿Cuánto tarda registrar una marca en Colombia? Tiempos reales en la SIC",
  description:
    "Descubre cuánto tarda el registro de marca en Colombia ante la SIC, etapas del proceso y factores que pueden retrasarlo.",
  keywords: [
    "tiempo registro marca Colombia",
    "cuánto tarda registrar marca SIC",
    "duración registro marca Colombia",
    "registro marca Bogotá tiempo",
    "abogados marcas Colombia",
  ],
  openGraph: {
    title: "Tiempo de registro de marca en Colombia",
    description:
      "Conoce los tiempos reales del proceso de registro de marca en Colombia y cómo evitar retrasos.",
    url: "https://marcas-y-patentes.vercel.app/blog/tiempo-registro-marca-colombia",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
  },
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/tiempo-registro-marca-colombia",
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
                "¿Cuánto tarda registrar una marca en Colombia desde Bogotá?",
              description:
                "Guía completa sobre los tiempos del registro de marca en Colombia ante la SIC y factores que influyen en su duración.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados",
              },
              mainEntityOfPage:
                "https://marcas-y-patentes.vercel.app/blog/tiempo-registro-marca-colombia",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuánto tarda registrar una marca en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente entre 6 y 12 meses, dependiendo del proceso y posibles oposiciones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué puede retrasar el registro de marca?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Errores en la solicitud, oposiciones o requerimientos de la SIC pueden alargar el proceso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Mi marca está protegida mientras está en trámite?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, tienes prioridad desde la fecha de solicitud, aunque la protección total se obtiene al ser concedida.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <TiempoRegistroMarcaContent />
    </>
  );
}
