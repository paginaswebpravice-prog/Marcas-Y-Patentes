"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ComoSaberSiUnaMarcaYaEstaRegistradaContent() {
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
          Cómo saber si una marca ya está registrada en Colombia
        </h1>

        <p className={styles.paragraph}>
          Antes de registrar una marca en Colombia, es fundamental verificar si
          ya existe un registro previo. Este proceso evita rechazos, conflictos
          legales y pérdida de dinero en trámites ante la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>.
        </p>

        <p className={styles.paragraph}>
          En ciudades como Bogotá, esta búsqueda es un paso obligatorio en
          cualquier estrategia de propiedad intelectual.
        </p>

        {/* IMPORTANCIA */}
        <h2 className={styles.subtitle}>
          ¿Por qué debes verificar una marca antes de registrarla?
        </h2>

        <ul className={styles.list}>
          <li>Evitas rechazos en el registro</li>
          <li>Previenes conflictos legales</li>
          <li>Ahorra tiempo y dinero en trámites</li>
          <li>Mejora las probabilidades de aprobación</li>
        </ul>

        {/* PROCESO */}
        <h2 className={styles.subtitle}>
          ¿Cómo saber si una marca ya está registrada?
        </h2>

        <ol className={styles.orderedList}>
          <li>Ingresar a la base de datos de la SIC</li>
          <li>Buscar nombres similares o idénticos</li>
          <li>Revisar clases de productos o servicios</li>
          <li>Analizar posibles conflictos fonéticos o visuales</li>
        </ol>

        {/* ERRORES */}
        <h2 className={styles.subtitle}>
          Errores comunes al buscar marcas en Colombia
        </h2>

        <ul className={styles.list}>
          <li>Buscar solo nombres idénticos</li>
          <li>No revisar clases similares</li>
          <li>Ignorar marcas fonéticamente parecidas</li>
          <li>No considerar variaciones gráficas</li>
        </ul>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Una persona intenta registrar “Andino Coffee”, pero ya existe una
          marca registrada como “Café Andino”. Aunque no son idénticas, pueden
          generar conflicto por similitud fonética.
        </p>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Siempre realiza una búsqueda profesional de antecedentes antes de
          solicitar el registro de una marca en Colombia para evitar rechazos o
          oposiciones.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Evita errores antes de registrar tu marca
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a verificar si tu marca ya existe en Colombia antes de
            iniciar el proceso ante la SIC.
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
