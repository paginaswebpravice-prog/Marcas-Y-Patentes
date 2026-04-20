"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RegistroPatenteContent() {
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
          Registro de patente en Colombia: protege tu innovación
        </h1>

        <p className={styles.paragraph}>
          El registro de patente en Colombia es el mecanismo legal que permite
          proteger invenciones, desarrollos tecnológicos y soluciones
          innovadoras frente a terceros. En ciudades como Bogotá, cada vez más
          emprendedores, empresas y startups están registrando sus patentes ante
          la Superintendencia de Industria y Comercio (SIC).
        </p>

        <p className={styles.paragraph}>
          Obtener una patente te otorga derechos exclusivos de explotación,
          permitiéndote comercializar tu invención o licenciarla a terceros con
          respaldo legal.
        </p>

        {/* BENEFICIOS */}
        <h2 className={styles.subtitle}>Beneficios de registrar una patente</h2>

        <ul className={styles.list}>
          <li>Protección legal de tu invención</li>
          <li>Exclusividad en el mercado</li>
          <li>Posibilidad de licenciar o vender la patente</li>
          <li>Ventaja competitiva frente a otros negocios</li>
          <li>Mayor valorización de tu empresa</li>
        </ul>

        {/* TIPOS */}
        <h2 className={styles.subtitle}>Tipos de patentes en Colombia</h2>

        <div className={styles.grid}>
          <div className={styles.innerCard}>
            <h4>Patente de invención</h4>
            <p>
              Protege nuevos productos o procesos que cumplen con requisitos de
              novedad, nivel inventivo y aplicación industrial.
            </p>
          </div>

          <div className={styles.innerCard}>
            <h4>Modelo de utilidad</h4>
            <p>
              Protege mejoras funcionales en objetos ya existentes, con menor
              nivel de exigencia que una patente de invención.
            </p>
          </div>
        </div>

        {/* PROCESO */}
        <h2 className={styles.subtitle}>
          Proceso para registrar una patente en Colombia
        </h2>

        <ol className={styles.orderedList}>
          <li>
            <strong>Búsqueda de antecedentes:</strong> verificar si la invención
            ya existe.
          </li>
          <li>
            <strong>Redacción técnica:</strong> elaboración de la memoria
            descriptiva y reivindicaciones.
          </li>
          <li>
            <strong>Solicitud ante la SIC:</strong> presentación formal.
          </li>
          <li>
            <strong>Examen de forma y fondo:</strong> evaluación técnica.
          </li>
          <li>
            <strong>Concesión:</strong> otorgamiento de la patente.
          </li>
        </ol>

        {/* TIEMPO */}
        <h2 className={styles.subtitle}>
          ¿Cuánto tarda una patente en Colombia?
        </h2>

        <p className={styles.paragraph}>
          El proceso puede tardar entre 2 y 5 años dependiendo del tipo de
          patente, la complejidad técnica y los requerimientos de la SIC.
        </p>

        {/* ERRORES */}
        <h2 className={styles.subtitle}>
          Errores comunes al registrar una patente
        </h2>

        <ul className={styles.list}>
          <li>No validar la novedad de la invención</li>
          <li>Redacción técnica incorrecta</li>
          <li>No cumplir requisitos legales</li>
          <li>Divulgar la invención antes del registro</li>
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Protege tu invención con asesoría experta
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos en todo el proceso de registro de patente en Colombia,
            desde la validación hasta la concesión ante la SIC.
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
