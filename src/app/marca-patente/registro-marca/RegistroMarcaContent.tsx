"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RegistroMarcaContent() {
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
          Registro de marca en Colombia: protege tu negocio
        </h1>

        <p className={styles.paragraph}>
          El registro de marca en Colombia es uno de los pasos más importantes
          para proteger tu negocio, tu identidad comercial y tu posicionamiento
          en el mercado. En ciudades como Bogotá, miles de empresas registran
          sus marcas cada año ante la Superintendencia de Industria y Comercio
          (SIC).
        </p>

        <p className={styles.paragraph}>
          Registrar tu marca te otorga derechos exclusivos de uso en todo el
          territorio colombiano y te permite evitar que terceros utilicen tu
          nombre, logo o identidad sin autorización.
        </p>

        {/* BENEFICIOS */}
        <h2 className={styles.subtitle}>
          Beneficios de registrar una marca en Colombia
        </h2>

        <ul className={styles.list}>
          <li>Protección legal en todo el país</li>
          <li>Derechos exclusivos de uso comercial</li>
          <li>Evita copias y conflictos legales</li>
          <li>Incrementa el valor de tu empresa</li>
          <li>Posicionamiento de marca en el mercado</li>
        </ul>

        {/* PROCESO */}
        <h2 className={styles.subtitle}>
          Proceso para registrar una marca en Colombia
        </h2>

        <ol className={styles.orderedList}>
          <li>
            <strong>Búsqueda de antecedentes:</strong> verificar si la marca ya
            existe.
          </li>
          <li>
            <strong>Solicitud ante la SIC:</strong> presentación formal del
            registro.
          </li>
          <li>
            <strong>Publicación:</strong> en la gaceta oficial para posibles
            oposiciones.
          </li>
          <li>
            <strong>Evaluación:</strong> análisis por parte de la entidad.
          </li>
          <li>
            <strong>Concesión:</strong> obtención del registro de marca.
          </li>
        </ol>

        {/* TIEMPO */}
        <h2 className={styles.subtitle}>¿Cuánto tarda registrar una marca?</h2>

        <p className={styles.paragraph}>
          El proceso de registro de marca en Colombia puede tardar entre 6 y 12
          meses dependiendo del caso, oposiciones y revisiones realizadas por la
          SIC.
        </p>

        {/* ERRORES */}
        <h2 className={styles.subtitle}>
          Errores comunes al registrar una marca
        </h2>

        <ul className={styles.list}>
          <li>No hacer búsqueda previa</li>
          <li>Elegir una clase incorrecta</li>
          <li>Presentar mal la solicitud</li>
          <li>No responder requerimientos</li>
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Registra tu marca con asesoría legal
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a registrar tu marca en Colombia de forma segura,
            evitando errores y aumentando la probabilidad de aprobación.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Asesoría por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
