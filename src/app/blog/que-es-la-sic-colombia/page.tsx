"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaSicColombia() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          ¿Qué es la SIC en Colombia y cómo protege tu marca?
        </h1>
        <p itemProp="description">
          Conoce el rol de la Superintendencia de Industria y Comercio (SIC) en
          Colombia y cómo protege tu marca y propiedad intelectual.
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
        <h1>¿Qué es la SIC en Colombia y cómo protege tu marca?</h1>

        <p>
          Si tienes un negocio en Bogotá o en cualquier parte de Colombia, es
          fundamental conocer el papel de la Superintendencia de Industria y
          Comercio (SIC). Esta entidad es la encargada de proteger tu marca,
          regular el mercado y garantizar la seguridad jurídica en la propiedad
          intelectual.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. ¿Qué es la SIC en Colombia?",
            text: (
              <>
                <p>
                  La Superintendencia de Industria y Comercio (SIC) es la
                  entidad del gobierno colombiano encargada de proteger la libre
                  competencia, los derechos del consumidor y la propiedad
                  industrial.
                </p>
                <p>
                  Es la autoridad que gestiona el registro de marcas, patentes y
                  otros activos de propiedad intelectual en Colombia.
                </p>
              </>
            ),
          },
          {
            title: "2. ¿Qué funciones cumple la SIC?",
            text: (
              <>
                <p>
                  La SIC cumple múltiples funciones clave en el entorno
                  empresarial colombiano:
                </p>
                <p>
                  • Registro de marcas y patentes <br />
                  • Protección de datos personales <br />
                  • Supervisión de la libre competencia <br />• Defensa del
                  consumidor en Colombia
                </p>
              </>
            ),
          },
          {
            title: "3. ¿Cómo protege tu marca la SIC?",
            text: (
              <>
                <p>
                  Cuando registras tu marca ante la SIC, obtienes derechos
                  exclusivos sobre su uso en Colombia.
                </p>
                <p>
                  Esto significa que ninguna otra empresa puede utilizar o
                  registrar una marca igual o similar dentro de la misma
                  categoría.
                </p>
              </>
            ),
          },
          {
            title: "4. Proceso de protección de marca",
            text: (
              <>
                <p>
                  La SIC protege tu marca a través de un proceso estructurado:
                </p>
                <p>
                  • Revisión de la solicitud <br />
                  • Publicación para oposiciones <br />
                  • Evaluación legal (examen de fondo) <br />• Concesión del
                  registro
                </p>
              </>
            ),
          },
          {
            title: "5. ¿Qué pasa si alguien usa tu marca?",
            text: (
              <>
                <p>
                  Si tu marca está registrada, puedes iniciar acciones legales
                  en Colombia contra terceros que la utilicen sin autorización.
                </p>
                <p>
                  La SIC actúa como autoridad para resolver disputas y proteger
                  tus derechos como titular de la marca.
                </p>
              </>
            ),
          },
          {
            title: "6. Importancia de la SIC para empresas en Bogotá",
            text: (
              <>
                <p>
                  Para empresas en Bogotá, la SIC es fundamental para garantizar
                  la seguridad jurídica y la protección del negocio en el
                  mercado colombiano.
                </p>
                <p>
                  Registrar tu marca ante esta entidad es un paso clave para
                  crecer de forma segura y competitiva.
                </p>
              </>
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
          <h3>Protege tu marca ante la SIC correctamente</h3>
          <p>
            Nuestro equipo en Bogotá te guía en todo el proceso ante la SIC para
            asegurar el registro y protección legal de tu marca en Colombia.
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
              q: "¿Qué significa SIC en Colombia?",
              a: "SIC significa Superintendencia de Industria y Comercio, la entidad encargada de la propiedad intelectual y la protección del consumidor.",
            },
            {
              q: "¿La SIC protege todas las marcas en Colombia?",
              a: "Solo protege las marcas que han sido registradas oficialmente ante la entidad.",
            },
            {
              q: "¿Es obligatorio registrar una marca en la SIC?",
              a: "No es obligatorio, pero es esencial para obtener protección legal y exclusividad en Colombia.",
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
