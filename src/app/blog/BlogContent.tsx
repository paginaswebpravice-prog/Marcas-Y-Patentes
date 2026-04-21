"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
      "El costo depende de las tasas oficiales de la SIC y del tipo de marca.",
  },
  {
    question: "¿Cuánto tiempo tarda registrar una marca en Colombia?",
    answer: "El proceso puede tardar entre 6 y 12 meses dependiendo del caso.",
  },
  {
    question: "¿Es obligatorio registrar una marca en Colombia?",
    answer:
      "No es obligatorio, pero sí altamente recomendable para proteger tu marca.",
  },
  {
    question: "¿Qué pasa si otra empresa usa mi marca?",
    answer:
      "Si está registrada, puedes iniciar acciones legales para defenderla.",
  },
];

export default function BlogContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            Blog Legal en Bogotá • Propiedad Intelectual
          </span>

          <h2 className={styles.title}>
            Registro de Marcas y Patentes en <span>Bogotá, Colombia</span>
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.description}>
            Accede a guías prácticas y estrategias reales para proteger tu marca
            en Colombia. Aprende cómo evitar errores y tomar decisiones legales
            inteligentes desde Bogotá.
          </p>
        </motion.div>

        {/* GRID */}
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${article.slug}`} className={styles.card}>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className={styles.readMore}>Leer más →</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.faqTitle}>
            Preguntas Frecuentes sobre Marcas en Colombia
          </h2>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
