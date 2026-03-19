"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CostoRegistrarMarcaColombia() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          ¿Cuánto cuesta registrar una marca en Colombia en 2025?
        </h1>
        <p itemProp="description">
          Conoce los costos oficiales de la SIC en 2025 para registrar una marca
          en Colombia y los factores que influyen en el precio del proceso.
        </p>
        <span itemProp="author">Firma de abogados en Bogotá</span>
        <span itemProp="publisher">PRAVICE Abogados</span>
      </div>

      {/* ================= HERO ================= */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>
          ¿Cuánto cuesta registrar una marca en Colombia en 2025 desde Bogotá?
        </h1>

        <p>
          Registrar una marca en Colombia es una inversión estratégica para
          proteger tu negocio. En este artículo te explicamos cuánto cuesta el
          proceso ante la Superintendencia de Industria y Comercio (SIC) en
          2025, qué factores influyen en el precio y cómo evitar gastos
          innecesarios.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. Costos oficiales de la SIC en Colombia",
            text: (
              <>
                <p>
                  El costo base para registrar una marca en Colombia corresponde
                  a las tasas oficiales establecidas por la SIC.
                </p>
                <p>
                  • Solicitud de registro <br />
                  • Publicación oficial <br />• Examen de fondo
                </p>
              </>
            ),
          },
          {
            title: "2. Costo por clases de marca",
            text: (
              <>
                <p>
                  Las marcas se registran por clases según la Clasificación de
                  Niza.
                </p>
                <p>
                  Elegir correctamente la clase evita costos adicionales y
                  problemas legales.
                </p>
              </>
            ),
          },
          {
            title: "3. Honorarios de abogados o asesores",
            text: (
              <>
                <p>
                  Puedes hacerlo por tu cuenta, pero muchas empresas optan por
                  asesoría legal especializada.
                </p>
                <p>Esto reduce riesgos de rechazo y errores en el proceso.</p>
              </>
            ),
          },
          {
            title: "4. Costos adicionales posibles",
            text: (
              <>
                <p>Durante el proceso pueden surgir costos como:</p>
                <p>
                  • Oposiciones <br />
                  • Correcciones <br />• Recursos legales
                </p>
              </>
            ),
          },
          {
            title: "5. ¿Es caro registrar una marca en Colombia?",
            text: (
              <p>
                Más que un gasto, es una inversión que protege tu negocio y
                aumenta su valor en el mercado colombiano.
              </p>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{item.title}</h2>
            {item.text}
          </motion.div>
        ))}

        {/* ================= CTA ================= */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>¿Quieres saber el costo exacto para tu marca?</h3>
          <p>
            Nuestro equipo en Bogotá analiza tu caso y te brinda un presupuesto
            claro para registrar tu marca en Colombia sin riesgos ni costos
            ocultos.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar asesoría gratuita
          </motion.button>
        </motion.div>

        {/* ================= FAQ ================= */}
        <motion.div
          className={styles.faq}
          itemScope
          itemType="https://schema.org/FAQPage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Preguntas frecuentes</h2>

          {[
            {
              q: "¿Cuánto cuesta registrar una marca en Colombia en 2025?",
              a: "Depende de las tasas de la SIC, número de clases y si usas asesoría legal.",
            },
            {
              q: "¿Se paga una sola vez?",
              a: "Sí, el pago principal es al inicio, aunque pueden surgir costos adicionales.",
            },
            {
              q: "¿Cuánto dura el registro?",
              a: "Tiene una vigencia de 10 años y es renovable.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 itemProp="name">{faq.q}</h3>

              <p
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{faq.a}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </article>
  );
}
