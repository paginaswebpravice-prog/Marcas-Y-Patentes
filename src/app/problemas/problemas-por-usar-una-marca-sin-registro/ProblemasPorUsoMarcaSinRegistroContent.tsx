"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ProblemasPorUsoMarcaSinRegistroContent() {
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
          Problemas por usar una marca sin registro en Colombia
        </h1>

        <p className={styles.paragraph}>
          Usar una marca sin registrarla en Colombia puede parecer inofensivo,
          pero en realidad implica riesgos legales importantes que pueden
          afectar gravemente tu negocio si no tomas medidas a tiempo.
        </p>

        <p className={styles.paragraph}>
          En ciudades como Bogotá, es común que emprendedores comiencen a usar
          nombres comerciales sin protección ante la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>.
        </p>

        {/* RIESGOS */}
        <h2 className={styles.subtitle}>
          Riesgos de usar una marca sin registro
        </h2>

        <ul className={styles.list}>
          <li>Pérdida del nombre si otro lo registra primero</li>
          <li>Demandas por infracción de marca registrada</li>
          <li>Bloqueo del uso comercial del nombre</li>
          <li>Obligación de cambiar identidad del negocio</li>
        </ul>

        {/* LEGALIDAD */}
        <h2 className={styles.subtitle}>
          ¿Es ilegal usar una marca sin registro en Colombia?
        </h2>

        <p className={styles.paragraph}>
          No es ilegal usar una marca sin registro, pero no tienes ningún tipo
          de protección legal. Esto significa que cualquier tercero puede
          registrarla y reclamar derechos exclusivos.
        </p>

        {/* CONFLICTOS */}
        <h2 className={styles.subtitle}>
          ¿Cómo ocurren los conflictos por marcas no registradas?
        </h2>

        <ol className={styles.orderedList}>
          <li>Usas una marca sin registro</li>
          <li>Otro la registra ante la SIC</li>
          <li>Obtiene derechos exclusivos</li>
          <li>Te exige dejar de usarla legalmente</li>
        </ol>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Un negocio en Bogotá usa una marca durante años sin registrarla. Más
          adelante, un tercero la registra ante la SIC y obliga al negocio
          original a cambiar completamente su nombre.
        </p>

        {/* PREVENCIÓN */}
        <h2 className={styles.subtitle}>¿Cómo evitar estos problemas?</h2>

        <ul className={styles.list}>
          <li>Registrar la marca lo antes posible</li>
          <li>Hacer búsqueda de antecedentes</li>
          <li>Verificar disponibilidad en la SIC</li>
          <li>Proteger identidad comercial desde el inicio</li>
        </ul>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          No uses una marca de forma prolongada sin registrarla. Entre más
          tiempo pase, mayor es el riesgo de perderla en Colombia.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Protege tu marca antes de que sea tarde
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a registrar tu marca en Colombia y evitar riesgos
            legales ante la SIC.
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
