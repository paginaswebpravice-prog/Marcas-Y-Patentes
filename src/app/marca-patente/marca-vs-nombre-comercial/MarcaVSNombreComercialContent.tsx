"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MarcaVsNombreComercialContent() {
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
          Marca vs nombre comercial en Colombia: diferencias clave
        </h1>

        <p className={styles.paragraph}>
          En Colombia, muchas empresas confunden el concepto de marca con el
          nombre comercial. Aunque ambos están relacionados con la identidad de
          un negocio, tienen funciones y protecciones legales diferentes ante la
          Superintendencia de Industria y Comercio (SIC).
        </p>

        <p className={styles.paragraph}>
          Entender esta diferencia es clave para proteger correctamente tu
          negocio en Bogotá y en todo el territorio colombiano.
        </p>

        {/* DIFERENCIAS */}
        <h2 className={styles.subtitle}>
          Diferencia entre marca y nombre comercial
        </h2>

        <ul className={styles.list}>
          <li>
            <strong>Marca:</strong> identifica productos o servicios en el
            mercado.
          </li>
          <li>
            <strong>Nombre comercial:</strong> identifica la actividad
            empresarial o establecimiento.
          </li>
          <li>
            La marca se registra ante la SIC, el nombre comercial puede surgir
            por uso.
          </li>
          <li>
            Una empresa puede tener varias marcas bajo un mismo nombre
            comercial.
          </li>
        </ul>

        {/* IMPORTANCIA */}
        <h2 className={styles.subtitle}>
          ¿Por qué es importante diferenciarlos?
        </h2>

        <p className={styles.paragraph}>
          Diferenciar correctamente entre marca y nombre comercial evita
          conflictos legales, pérdidas de identidad empresarial y problemas en
          procesos de registro ante la SIC en Colombia.
        </p>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo práctico en Colombia</h2>

        <p className={styles.paragraph}>
          Una empresa en Bogotá puede operar bajo el nombre comercial “Café
          Andino”, pero registrar varias marcas diferentes como “Andino
          Espresso”, “Andino Premium” o “Andino Cold Brew”.
        </p>

        {/* PROTECCIÓN */}
        <h2 className={styles.subtitle}>Protección legal en Colombia</h2>

        <ul className={styles.list}>
          <li>La marca se protege mediante registro ante la SIC</li>
          <li>El nombre comercial se protege principalmente por uso</li>
          <li>Ambos pueden fortalecerse con registro formal</li>
          <li>La protección evita copias y competencia desleal</li>
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            ¿Tienes dudas sobre tu marca o nombre comercial?
          </strong>

          <p className={styles.paragraph}>
            Te asesoramos en Colombia para definir correctamente tu estrategia
            de propiedad intelectual y registrar tu marca ante la SIC sin
            errores.
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
