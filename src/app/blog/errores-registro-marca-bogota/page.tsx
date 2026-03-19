"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ErroresRegistroMarcaBogota() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          Errores comunes al registrar una marca en Bogotá, Colombia
        </h1>
        <p itemProp="description">
          Conoce los errores más frecuentes al registrar una marca en Colombia y
          cómo evitarlos ante la Superintendencia de Industria y Comercio (SIC).
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
          Errores comunes al registrar una marca en Bogotá (y cómo evitarlos)
        </h1>

        <p>
          Registrar una marca en Colombia es un proceso clave para proteger tu
          negocio, pero muchos emprendedores en Bogotá cometen errores que
          terminan en rechazos, pérdidas de dinero o problemas legales. Aquí te
          mostramos los errores más comunes y cómo evitarlos ante la SIC.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. No realizar la búsqueda de antecedentes",
            text: (
              <>
                <p>
                  Uno de los errores más frecuentes es no verificar si ya existe
                  una marca similar registrada en Colombia.
                </p>
                <p>
                  Esto puede provocar el rechazo inmediato de la solicitud ante
                  la SIC o conflictos legales posteriores.
                </p>
              </>
            ),
          },
          {
            title: "2. Elegir mal la clase de la marca",
            text: (
              <>
                <p>
                  Muchas empresas en Bogotá registran su marca en una clase
                  incorrecta según la Clasificación de Niza.
                </p>
                <p>
                  Esto deja desprotegida su actividad real o genera costos
                  adicionales por registros duplicados.
                </p>
              </>
            ),
          },
          {
            title: "3. Presentar información incompleta o incorrecta",
            text: (
              <>
                <p>
                  Errores en datos, documentos o descripciones pueden generar
                  requerimientos por parte de la SIC.
                </p>
                <p>
                  Esto retrasa el proceso o incluso puede llevar al abandono de
                  la solicitud.
                </p>
              </>
            ),
          },
          {
            title: "4. No responder a oposiciones",
            text: (
              <>
                <p>
                  Durante el proceso, terceros pueden oponerse al registro de tu
                  marca en Colombia.
                </p>
                <p>
                  No responder adecuadamente a estas oposiciones puede resultar
                  en la negación del registro.
                </p>
              </>
            ),
          },
          {
            title: "5. Subestimar el proceso legal",
            text: (
              <>
                <p>
                  Muchos emprendedores creen que registrar una marca es un
                  trámite simple, cuando en realidad implica análisis jurídico.
                </p>
                <p>
                  No contar con asesoría especializada aumenta el riesgo de
                  errores y pérdidas económicas.
                </p>
              </>
            ),
          },
          {
            title: "6. No proteger la marca a tiempo",
            text: (
              <>
                <p>
                  Esperar demasiado para registrar tu marca en Colombia puede
                  permitir que otra empresa la registre primero.
                </p>
                <p>
                  Esto puede obligarte a cambiar tu identidad comercial o entrar
                  en disputas legales.
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
          <h3>Evita errores al registrar tu marca</h3>
          <p>
            Nuestro equipo en Bogotá te asesora en todo el proceso ante la SIC
            para aumentar las probabilidades de éxito y proteger tu marca en
            Colombia desde el inicio.
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
              q: "¿Cuál es el error más común al registrar una marca?",
              a: "No realizar la búsqueda de antecedentes, lo que genera rechazos ante la SIC.",
            },
            {
              q: "¿Puedo registrar una marca sin abogado en Colombia?",
              a: "Sí, pero aumenta el riesgo de errores, oposiciones y rechazo del registro.",
            },
            {
              q: "¿Qué pasa si registro mal mi marca?",
              a: "Podrías perder la protección legal o tener que iniciar un nuevo proceso.",
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
