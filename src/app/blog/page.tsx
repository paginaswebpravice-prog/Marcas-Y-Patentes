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
      "Evita errores frecuentes al registrar tu marca en Colombia y mejora tus probabilidades ante la SIC.",
    slug: "errores-registro-marca-bogota",
  },
  {
    id: 4,
    title: "Diferencia entre marca y patente en Colombia",
    excerpt:
      "Aprende cuándo registrar una marca o una patente y cuál conviene más según tu negocio en Colombia.",
    slug: "marca-vs-patente-colombia",
  },
  {
    id: 5,
    title: "¿Qué es la SIC y cómo protege tu marca?",
    excerpt:
      "Entiende el papel de la SIC en Colombia y cómo garantiza la protección de tu propiedad intelectual.",
    slug: "que-es-la-sic-colombia",
  },
  {
    id: 6,
    title: "Búsqueda de antecedentes marcarios en Colombia",
    excerpt:
      "Verifica la disponibilidad de tu marca antes de registrarla en Bogotá y evita problemas legales.",
    slug: "busqueda-antecedentes-marca",
  },
  {
    id: 7,
    title: "¿Qué pasa si no registras tu marca en Colombia?",
    excerpt:
      "Descubre los riesgos legales y comerciales de no proteger tu marca en el mercado colombiano.",
    slug: "riesgos-no-registrar-marca",
  },
  {
    id: 8,
    title: "Registro de marca internacional desde Colombia",
    excerpt:
      "Expande tu marca a nivel global usando el Sistema de Madrid desde Colombia.",
    slug: "registro-internacional-marca",
  },
  {
    id: 9,
    title: "Clases de marcas según la SIC en Colombia",
    excerpt:
      "Aprende a elegir la clase correcta para tu marca en Colombia según la clasificación de Niza.",
    slug: "clases-marcas-colombia",
  },
  {
    id: 10,
    title: "Tiempo de registro de marca en Colombia",
    excerpt:
      "Conoce cuánto tarda el proceso ante la SIC y qué factores pueden influir.",
    slug: "tiempo-registro-marca",
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta registrar una marca en Colombia?",
    answer:
      "El costo depende de las tasas oficiales de la SIC y del tipo de marca. En Colombia, registrar una marca implica tarifas base y posibles costos adicionales.",
  },
  {
    question: "¿Cuánto tiempo tarda registrar una marca en Colombia?",
    answer:
      "El proceso ante la SIC en Colombia puede tardar entre 6 y 12 meses, dependiendo de oposiciones y revisiones.",
  },
  {
    question: "¿Es obligatorio registrar una marca en Colombia?",
    answer:
      "No es obligatorio, pero sí altamente recomendable para proteger tu marca en Bogotá y todo el país.",
  },
  {
    question: "¿Qué pasa si otra empresa usa mi marca en Colombia?",
    answer:
      "Si tu marca está registrada ante la SIC, puedes iniciar acciones legales para defender tus derechos.",
  },
];

export default function BlogSection() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/Blog"
    >
      {/* SEO */}
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
        {/* HEADER PREMIUM */}
        <div className={styles.header}>
          <span className={styles.badge}>
            Blog Legal en Bogotá • Propiedad Intelectual en Colombia
          </span>

          <h2 className={styles.title}>
            Registro de Marcas y Patentes en <span>Bogotá, Colombia</span>
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.description}>
            Accede a guías prácticas y actualizadas sobre registro de marcas y
            propiedad intelectual en Colombia. Aprende desde Bogotá cómo
            proteger tu marca ante la SIC, evitar errores comunes y tomar
            decisiones estratégicas para crecer en el mercado colombiano.
          </p>
        </div>

        {/* GRID */}
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
            Preguntas Frecuentes sobre Marcas en Colombia
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
