"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RegistroLogoColombiaContent() {
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
          Registro de logo en Colombia: protege la identidad de tu empresa
        </h1>

        <p className={styles.paragraph}>
          El registro de logo en Colombia no se realiza como un trámite
          independiente, sino como el registro de una marca figurativa o mixta
          ante la Superintendencia de Industria y Comercio (SIC).
        </p>

        <p className={styles.paragraph}>
          Esto permite proteger la identidad visual de tu empresa en ciudades
          como Bogotá y en todo el territorio colombiano.
        </p>

        {/* IMPORTANCIA */}
        <h2 className={styles.subtitle}>
          ¿Por qué registrar el logo de tu empresa?
        </h2>

        <ul className={styles.list}>
          <li>Protege la identidad visual de tu negocio</li>
          <li>Evita que terceros copien tu diseño</li>
          <li>Aumenta el valor de tu marca</li>
          <li>Genera exclusividad en el mercado colombiano</li>
        </ul>

        {/* DIFERENCIA */}
        <h2 className={styles.subtitle}>Logo vs marca en Colombia</h2>

        <p className={styles.paragraph}>
          El logo es la representación visual de tu negocio, mientras que la
          marca es el signo que se registra legalmente ante la SIC y puede
          incluir nombre, logo o ambos.
        </p>

        {/* TIPOS */}
        <h2 className={styles.subtitle}>Tipos de registro para un logo</h2>

        <ul className={styles.list}>
          <li>
            <strong>Marca figurativa:</strong> solo el diseño del logo
          </li>
          <li>
            <strong>Marca mixta:</strong> nombre + logo combinados
          </li>
          <li>
            <strong>Marca denominativa:</strong> solo el nombre
          </li>
        </ul>

        {/* PROCESO */}
        <h2 className={styles.subtitle}>
          ¿Cómo registrar un logo en Colombia?
        </h2>

        <ol className={styles.orderedList}>
          <li>Diseñar y definir el logo</li>
          <li>Hacer búsqueda de antecedentes en la SIC</li>
          <li>Seleccionar la clase de productos o servicios</li>
          <li>Presentar la solicitud de registro</li>
          <li>Esperar el proceso de evaluación</li>
        </ol>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Una empresa en Bogotá registra su logo como marca mixta ante la SIC y
          obtiene derechos exclusivos para usarlo en su sector comercial.
        </p>

        {/* ERRORES */}
        <h2 className={styles.subtitle}>
          Errores comunes al registrar un logo
        </h2>

        <ul className={styles.list}>
          <li>No hacer búsqueda previa</li>
          <li>Registrar solo el nombre y no el diseño</li>
          <li>Elegir mal la clase de protección</li>
          <li>No registrar la marca completa (mixta)</li>
        </ul>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Si tu logo es importante para tu negocio, regístralo como marca ante
          la SIC para evitar que terceros lo utilicen sin autorización en
          Colombia.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Protege el logo de tu empresa
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a registrar tu logo en Colombia como marca figurativa o
            mixta ante la SIC.
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
