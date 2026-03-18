"use client";

import Link from "next/link";
import styles from "./Blog.module.css";

const articles = [
  {
    id: 1,
    title: "¿Cómo registrar una marca en Colombia paso a paso?",
    excerpt:
      "Conoce el proceso completo para registrar tu marca ante la SIC en Colombia y proteger tu negocio desde Bogotá.",
    slug: "registrar-marca-colombia",
  },
  {
    id: 2,
    title: "¿Cuánto cuesta registrar una marca en Colombia en 2025?",
    excerpt:
      "Descubre los costos oficiales de la SIC y los factores que influyen en el precio del registro de marca en Colombia.",
    slug: "costo-registrar-marca-colombia",
  },
  {
    id: 3,
    title: "Errores comunes al registrar una marca en Bogotá",
    excerpt:
      "Evita los errores más frecuentes que cometen emprendedores en Bogotá al registrar su marca ante la SIC.",
    slug: "errores-registro-marca-bogota",
  },
  {
    id: 4,
    title: "Diferencia entre marca y patente en Colombia",
    excerpt:
      "Aprende cuándo registrar una marca o una patente y cuál aplica mejor para tu negocio en Colombia.",
    slug: "marca-vs-patente-colombia",
  },
  {
    id: 5,
    title: "¿Qué es la SIC y cómo protege tu marca?",
    excerpt:
      "Entiende el rol de la Superintendencia de Industria y Comercio en Colombia y cómo protege tu propiedad intelectual.",
    slug: "que-es-la-sic-colombia",
  },
  {
    id: 6,
    title: "Búsqueda de antecedentes marcarios en Colombia",
    excerpt:
      "Antes de registrar tu marca en Bogotá, debes verificar su disponibilidad. Aquí te explicamos cómo hacerlo.",
    slug: "busqueda-antecedentes-marca",
  },
  {
    id: 7,
    title: "¿Qué pasa si no registras tu marca en Colombia?",
    excerpt:
      "Riesgos legales y comerciales que enfrentan las empresas en Colombia por no proteger su marca.",
    slug: "riesgos-no-registrar-marca",
  },
  {
    id: 8,
    title: "Registro de marca internacional desde Colombia",
    excerpt:
      "Cómo proteger tu marca fuera de Colombia utilizando el Sistema de Madrid y tratados internacionales.",
    slug: "registro-internacional-marca",
  },
  {
    id: 9,
    title: "Clases de marcas según la SIC en Colombia",
    excerpt:
      "Conoce la clasificación internacional de Niza y cómo elegir la clase correcta para tu marca en Colombia.",
    slug: "clases-marcas-colombia",
  },
  {
    id: 10,
    title: "Tiempo de registro de marca en Colombia",
    excerpt:
      "¿Cuánto tarda el proceso ante la SIC? Te explicamos los tiempos reales en Colombia.",
    slug: "tiempo-registro-marca",
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta registrar una marca en Colombia?",
    answer:
      "El costo depende de las tasas oficiales de la SIC y del tipo de marca. En Colombia, registrar una marca implica tarifas base y posibles costos adicionales según el caso.",
  },
  {
    question: "¿Cuánto tiempo tarda registrar una marca en Colombia?",
    answer:
      "El proceso ante la SIC en Colombia puede tardar entre 6 y 12 meses, dependiendo de oposiciones y revisiones legales.",
  },
  {
    question: "¿Es obligatorio registrar una marca en Colombia?",
    answer:
      "No es obligatorio, pero es altamente recomendable para proteger legalmente tu marca en Bogotá y todo el territorio colombiano.",
  },
  {
    question: "¿Qué pasa si otra empresa usa mi marca en Colombia?",
    answer:
      "Si tu marca está registrada ante la SIC, puedes iniciar acciones legales para defender tus derechos en Colombia.",
  },
];

export default function BlogSection() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/Blog"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Blog sobre registro de marcas en Bogotá Colombia
        </h2>
        <p itemProp="description">
          Artículos sobre registro de marcas, patentes y propiedad intelectual
          en Colombia enfocados en empresas y emprendedores en Bogotá.
        </p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          Blog: Registro de Marcas y Patentes en Bogotá, Colombia
        </h2>

        <p className={styles.description}>
          Aprende todo sobre propiedad intelectual en Colombia, desde cómo
          registrar una marca ante la SIC hasta estrategias para proteger tu
          negocio en Bogotá y el mercado nacional.
        </p>

        {/* GRID BLOG */}
        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className={styles.card}
              itemProp="blogPost"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <h3 itemProp="headline">{article.title}</h3>
              <p itemProp="description">{article.excerpt}</p>
              <span className={styles.readMore}>Leer más →</span>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <div
          className={styles.faq}
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <h2 className={styles.faqTitle}>
            Preguntas Frecuentes sobre Registro de Marcas en Colombia
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={styles.faqItem}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 itemProp="name">{faq.question}</h3>

              <p
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{faq.answer}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
