"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RegistrarMarcaColombia() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          Cómo registrar una marca en Colombia paso a paso
        </h1>
        <p itemProp="description">
          Guía completa para registrar una marca en Colombia ante la
          Superintendencia de Industria y Comercio (SIC) desde Bogotá.
        </p>
        <span itemProp="author">Firma de abogados en Bogotá</span>
        <span itemProp="publisher">PRAVICE Abogados</span>
      </div>

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ¿Cómo registrar una marca en Colombia paso a paso desde Bogotá?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Registrar una marca en Colombia es un paso fundamental para proteger
          tu negocio frente a competidores. En esta guía te explicamos cómo
          realizar el proceso ante la Superintendencia de Industria y Comercio
          (SIC), especialmente si estás en Bogotá o cualquier ciudad del país.
        </motion.p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {/* STEP 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>1. Realizar la búsqueda de antecedentes marcarios</h2>
          <p>
            Antes de registrar tu marca en Colombia, debes verificar si ya
            existe una marca similar registrada ante la SIC. Esto evita rechazos
            y conflictos legales.
          </p>
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>2. Clasificar tu marca correctamente</h2>
          <p>
            En Colombia, las marcas se registran por clases según la
            clasificación internacional de Niza. Elegir la clase correcta es
            clave para proteger tu actividad comercial.
          </p>
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>3. Presentar la solicitud ante la SIC</h2>
          <p>
            El trámite se realiza ante la Superintendencia de Industria y
            Comercio (SIC), donde deberás diligenciar el formulario, pagar las
            tasas y adjuntar la información requerida.
          </p>
        </motion.div>

        {/* STEP 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>4. Examen de forma y publicación</h2>
          <p>
            La SIC revisa que tu solicitud cumpla los requisitos formales y
            luego la publica para que terceros puedan presentar oposiciones.
          </p>
        </motion.div>

        {/* STEP 5 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>5. Examen de fondo</h2>
          <p>
            En esta etapa, la SIC analiza si tu marca cumple con los criterios
            legales para ser registrada en Colombia.
          </p>
        </motion.div>

        {/* STEP 6 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>6. Concesión del registro</h2>
          <p>
            Si todo está correcto, la SIC concede el registro de marca,
            otorgándote derechos exclusivos en Colombia por 10 años renovables.
          </p>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>¿Quieres registrar tu marca sin errores?</h3>
          <p>
            Nuestro equipo en Bogotá te acompaña en todo el proceso ante la SIC
            para asegurar un registro exitoso en Colombia.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Preguntas frecuentes</h2>

          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 itemProp="name">
              ¿Cuánto tarda registrar una marca en Colombia?
            </h3>
            <p
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">
                El proceso puede tardar entre 6 y 12 meses dependiendo de
                oposiciones y revisiones.
              </span>
            </p>
          </div>

          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 itemProp="name">
              ¿Es obligatorio registrar una marca en Colombia?
            </h3>
            <p
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">
                No es obligatorio, pero es esencial para proteger legalmente tu
                negocio en Bogotá y todo el país.
              </span>
            </p>
          </div>
        </motion.div>
      </section>
    </article>
  );
}
