"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RegistroMarcaColombiaContent() {
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
          Registro de marca en Colombia: protege tu negocio legalmente
        </h1>

        <p className={styles.paragraph}>
          El registro de marca en Colombia es el proceso legal mediante el cual
          obtienes derechos exclusivos sobre el nombre, logo o identidad
          comercial de tu negocio ante la Superintendencia de Industria y
          Comercio (SIC).
        </p>

        <p className={styles.paragraph}>
          En ciudades como Bogotá, este trámite es fundamental para proteger
          emprendimientos y empresas frente a copias o uso indebido.
        </p>

        {/* IMPORTANCIA */}
        <h2 className={styles.subtitle}>
          ¿Por qué registrar tu marca en Colombia?
        </h2>

        <ul className={styles.list}>
          <li>Protección legal en todo el territorio colombiano</li>
          <li>Derechos exclusivos de uso comercial</li>
          <li>Evitas copias o uso indebido de tu marca</li>
          <li>Aumentas el valor de tu empresa</li>
        </ul>

        {/* PROCESO */}
        <h2 className={styles.subtitle}>
          ¿Cómo es el proceso de registro de marca?
        </h2>

        <ol className={styles.orderedList}>
          <li>Búsqueda de antecedentes en la base de datos de la SIC</li>
          <li>Definición de clase de productos o servicios</li>
          <li>Presentación de la solicitud de registro</li>
          <li>Publicación en gaceta oficial</li>
          <li>Evaluación y decisión final</li>
        </ol>

        {/* TIEMPO */}
        <h2 className={styles.subtitle}>
          ¿Cuánto tarda registrar una marca en Colombia?
        </h2>

        <p className={styles.paragraph}>
          El proceso de registro puede tardar entre 6 y 12 meses dependiendo de
          oposiciones, requerimientos o revisiones por parte de la SIC.
        </p>

        {/* ERRORES */}
        <h2 className={styles.subtitle}>
          Errores comunes al registrar una marca
        </h2>

        <ul className={styles.list}>
          <li>No hacer búsqueda previa</li>
          <li>Elegir mal la clase de la marca</li>
          <li>No responder requerimientos de la SIC</li>
          <li>Registrar sin asesoría legal</li>
        </ul>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Un emprendedor en Bogotá registra su marca correctamente y evita que
          terceros puedan usar su nombre comercial o identidad visual en el
          mismo sector.
        </p>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Registrar tu marca antes de lanzar tu negocio es la mejor forma de
          evitar problemas legales y proteger tu identidad comercial en
          Colombia.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Registra tu marca en Colombia hoy
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a registrar tu marca ante la SIC de forma segura y sin
            errores legales.
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
