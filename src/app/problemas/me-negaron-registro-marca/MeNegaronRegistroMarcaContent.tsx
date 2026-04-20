"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MeNegaronRegistroMarcaContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.div
        className={`${styles.articleBlock} ${styles.card}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className={styles.title}>
          Me negaron el registro de marca en Colombia: ¿qué hacer?
        </h1>

        <p className={styles.paragraph}>
          Si la Superintendencia de Industria y Comercio (SIC) te negó el
          registro de tu marca en Colombia, no significa que todo esté perdido.
          Existen mecanismos legales para responder, corregir o incluso apelar
          la decisión.
        </p>

        <p className={styles.paragraph}>
          En Bogotá, este tipo de situaciones es muy común en procesos de
          propiedad intelectual mal estructurados o sin búsqueda previa de
          antecedentes.
        </p>

        {/* CAUSAS */}
        <h2 className={styles.subtitle}>
          ¿Por qué pueden negar una marca en Colombia?
        </h2>

        <ul className={styles.list}>
          <li>Similitud con marcas ya registradas</li>
          <li>Falta de distintividad</li>
          <li>Errores en la solicitud</li>
          <li>Clasificación incorrecta de productos o servicios</li>
        </ul>

        {/* RESPUESTA */}
        <h2 className={styles.subtitle}>
          ¿Qué hacer si te niegan el registro de marca?
        </h2>

        <ol className={styles.orderedList}>
          <li>Revisar la causal de rechazo de la SIC</li>
          <li>Analizar si es posible corregir la solicitud</li>
          <li>Responder objeciones dentro del plazo legal</li>
          <li>Presentar argumentos jurídicos de defensa</li>
        </ol>

        {/* APELACIÓN */}
        <h2 className={styles.subtitle}>
          ¿Se puede apelar el rechazo de una marca?
        </h2>

        <p className={styles.paragraph}>
          Sí. En Colombia puedes presentar recursos o respuestas a las
          objeciones emitidas por la SIC dentro de los plazos establecidos en el
          procedimiento administrativo.
        </p>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Una empresa en Bogotá solicita registrar una marca, pero la SIC la
          rechaza por similitud fonética con otra existente. Con asesoría legal,
          logra argumentar diferencias y continuar el proceso.
        </p>

        {/* RIESGOS */}
        <h2 className={styles.subtitle}>
          Errores comunes después de un rechazo
        </h2>

        <ul className={styles.list}>
          <li>Abandonar el proceso inmediatamente</li>
          <li>No responder dentro del plazo legal</li>
          <li>No analizar la causal del rechazo</li>
          <li>Reintentar sin cambios en la solicitud</li>
        </ul>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Siempre analiza el rechazo con asesoría especializada antes de tomar
          decisiones, ya que muchas marcas pueden salvarse con ajustes o
          argumentos jurídicos adecuados.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            No pierdas tu marca por un rechazo
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a responder objeciones y defender tu solicitud de marca
            ante la SIC en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Asesoría por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
