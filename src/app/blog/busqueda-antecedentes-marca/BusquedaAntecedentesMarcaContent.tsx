"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function BusquedaAntecedentesMarcaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          Búsqueda de antecedentes marcarios en Colombia: guía completa para
          verificar tu marca
        </h1>

        <p>
          La búsqueda de antecedentes marcarios en Colombia es el paso más
          importante antes de registrar una marca ante la Superintendencia de
          Industria y Comercio (SIC). Este proceso permite identificar si
          existen marcas iguales o similares y reduce significativamente el
          riesgo de rechazo.
        </p>

        <p>
          En ciudades como Bogotá, donde la competencia empresarial es alta,
          verificar la disponibilidad de una marca no solo es una recomendación,
          sino una estrategia clave para proteger tu negocio desde el inicio.
        </p>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        <h2>¿Qué es la búsqueda de antecedentes marcarios?</h2>
        <p>
          Es un análisis previo que se realiza antes del registro de marca en
          Colombia para determinar si una marca ya está registrada, solicitada o
          en proceso ante la SIC.
        </p>
        <p>
          Este estudio no se limita a coincidencias exactas. También evalúa
          similitudes fonéticas, visuales y conceptuales que podrían generar
          confusión en el consumidor.
        </p>

        <h2>¿Por qué es fundamental antes de registrar una marca?</h2>
        <p>
          La SIC puede negar el registro de una marca si encuentra similitudes
          con otra previamente registrada. Por eso, realizar este análisis te
          permite anticiparte a posibles conflictos.
        </p>

        <p>Además, te ayuda a tomar decisiones estratégicas como:</p>

        <ul>
          <li>Modificar el nombre de tu marca antes de invertir en branding</li>
          <li>Elegir correctamente la clase de productos o servicios</li>
          <li>Reducir tiempos y costos en el proceso de registro</li>
        </ul>

        <h2>¿Dónde consultar si una marca está registrada en Colombia?</h2>
        <p>
          La consulta se realiza en la base de datos oficial de la SIC, donde
          puedes verificar marcas registradas, en trámite o publicadas.
        </p>

        <p>
          Sin embargo, interpretar los resultados requiere conocimiento técnico,
          ya que no todas las coincidencias implican un rechazo automático, pero
          sí representan un riesgo legal.
        </p>

        <h2>Tipos de búsqueda de antecedentes marcarios</h2>

        <p>Existen diferentes niveles de análisis:</p>

        <ul>
          <li>
            <strong>Búsqueda básica:</strong> coincidencias exactas del nombre
          </li>
          <li>
            <strong>Búsqueda fonética:</strong> marcas que suenan similar
          </li>
          <li>
            <strong>Búsqueda conceptual:</strong> ideas o significados similares
          </li>
          <li>
            <strong>Búsqueda por clase:</strong> según la Clasificación de Niza
          </li>
        </ul>

        <h2>Errores comunes al verificar una marca</h2>

        <p>Muchas empresas cometen errores que afectan el registro:</p>

        <ul>
          <li>Buscar solo coincidencias exactas</li>
          <li>No analizar la clase correcta</li>
          <li>Ignorar marcas similares fonéticamente</li>
          <li>No revisar marcas en trámite</li>
        </ul>

        <h2>¿Es suficiente hacer la búsqueda por tu cuenta?</h2>

        <p>
          Aunque cualquier persona puede consultar la base de datos de la SIC,
          un análisis profesional es mucho más completo y preciso.
        </p>

        <p>
          Un abogado especializado en propiedad intelectual puede evaluar el
          nivel de riesgo real y recomendar la mejor estrategia para lograr el
          registro de marca en Colombia.
        </p>

        <h2>¿Qué pasa si registras una marca sin hacer la búsqueda?</h2>

        <p>Podrías enfrentar:</p>

        <ul>
          <li>Rechazo por parte de la SIC</li>
          <li>Oposiciones de terceros</li>
          <li>Pérdida de inversión en branding</li>
          <li>Problemas legales posteriores</li>
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Realiza un estudio de marca antes de registrar</h3>
          <p>
            Nuestro equipo en Bogotá analiza antecedentes marcarios en Colombia
            para ayudarte a tomar decisiones seguras y aumentar la probabilidad
            de aprobación ante la SIC.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar estudio de marca
          </a>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <h3>¿Cómo saber si una marca ya está registrada?</h3>
          <p>
            Debes consultar la base de datos de la SIC y analizar similitudes,
            no solo coincidencias exactas.
          </p>

          <h3>¿La búsqueda garantiza el registro?</h3>
          <p>
            No garantiza el resultado, pero reduce significativamente el riesgo
            de rechazo.
          </p>

          <h3>¿Cuánto cuesta la búsqueda de antecedentes?</h3>
          <p>
            Puede ser gratuita en la SIC, pero un análisis profesional ofrece
            mayor seguridad.
          </p>
        </div>
      </section>
    </article>
  );
}
