"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RegistrarMarcaColombiaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¿Cómo registrar una marca en Colombia paso a paso desde Bogotá?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Registrar una marca en Colombia es uno de los pasos más importantes
          para proteger tu negocio, evitar conflictos legales y construir una
          marca sólida. En ciudades altamente competitivas como{" "}
          <strong>Bogotá</strong>, no registrar tu marca puede significar perder
          tu identidad comercial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          En esta guía completa aprenderás el proceso real ante la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>,
          errores comunes y recomendaciones clave para asegurar el éxito del
          registro.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* INTRO */}
        <div className={styles.highlightBox}>
          <p>
            ⚠️ En Colombia,{" "}
            <strong>el derecho sobre una marca NO se obtiene por uso</strong>,
            sino por registro. Si no registras tu marca, otra persona puede
            hacerlo antes.
          </p>
        </div>

        {/* STEP 1 */}
        <h2>1. Realizar la búsqueda de antecedentes marcarios</h2>
        <p>
          Antes de iniciar cualquier trámite, debes verificar si tu marca ya
          está registrada o si existen marcas similares.
        </p>

        <p>
          La SIC evalúa similitudes{" "}
          <strong>fonéticas, visuales y conceptuales</strong>, por lo que no
          basta con que el nombre sea “diferente”.
        </p>

        <ul>
          <li>Evita rechazos inmediatos</li>
          <li>Reduce riesgos legales</li>
          <li>Permite tomar decisiones estratégicas</li>
        </ul>

        <div className={styles.tipBox}>
          💡 Recomendación: realiza una búsqueda profesional, no solo básica.
        </div>

        {/* STEP 2 */}
        <h2>2. Clasificar tu marca correctamente (Clasificación de Niza)</h2>
        <p>
          En Colombia, las marcas se registran por clases según la Clasificación
          de Niza (45 categorías).
        </p>

        <p>
          Elegir mal la clase puede dejar tu marca{" "}
          <strong>sin protección real</strong>.
        </p>

        <ul>
          <li>Clase incorrecta = marca vulnerable</li>
          <li>Posible necesidad de registrar nuevamente</li>
          <li>Duplicación de costos</li>
        </ul>

        {/* STEP 3 */}
        <h2>3. Presentar la solicitud ante la SIC</h2>
        <p>El trámite se realiza ante la SIC y requiere:</p>

        <ul>
          <li>Datos del solicitante</li>
          <li>Logo (si aplica)</li>
          <li>Lista de productos o servicios</li>
          <li>Pago de tasas oficiales</li>
        </ul>

        <p>
          Errores en esta etapa pueden generar retrasos o incluso abandono del
          proceso.
        </p>

        {/* STEP 4 */}
        <h2>4. Examen de forma y publicación</h2>
        <p>
          La SIC revisa que la solicitud cumpla requisitos formales y luego la
          publica en la Gaceta de Propiedad Industrial.
        </p>

        <div className={styles.highlightBox}>
          Aquí terceros pueden presentar <strong>oposiciones</strong> si
          consideran que tu marca afecta sus derechos.
        </div>

        {/* STEP 5 */}
        <h2>5. Examen de fondo (evaluación legal)</h2>
        <p>
          En esta fase, la SIC analiza si la marca puede registrarse legalmente.
        </p>

        <ul>
          <li>Confusión con marcas existentes</li>
          <li>Prohibiciones legales</li>
          <li>Capacidad distintiva</li>
        </ul>

        <p>Esta es la etapa más crítica del proceso.</p>

        {/* STEP 6 */}
        <h2>6. Concesión del registro</h2>
        <p>Si todo está correcto, la SIC concede el registro.</p>

        <ul>
          <li>Duración: 10 años</li>
          <li>Renovable indefinidamente</li>
          <li>Derechos exclusivos en Colombia</li>
        </ul>

        {/* EXTRA VALUE */}
        <h2>Errores más comunes al registrar una marca</h2>
        <ul>
          <li>No hacer búsqueda previa</li>
          <li>Elegir mal la clase</li>
          <li>Responder mal a oposiciones</li>
          <li>Creer que el uso da derechos</li>
        </ul>

        <h2>¿Por qué registrar tu marca en Bogotá es clave?</h2>
        <p>
          Bogotá es el principal centro empresarial de Colombia, lo que aumenta
          el riesgo de conflictos marcarios.
        </p>

        <ul>
          <li>Alta competencia</li>
          <li>Mayor riesgo de copia</li>
          <li>Mayor valor de marca</li>
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>¿Quieres registrar tu marca sin errores?</h3>
          <p>
            Te asesoramos en todo el proceso ante la SIC para maximizar tus
            probabilidades de éxito en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría gratuita
          </a>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <div>
            <h3>¿Cuánto tarda registrar una marca?</h3>
            <p>Entre 6 y 12 meses dependiendo del proceso.</p>
          </div>

          <div>
            <h3>¿Es obligatorio registrar una marca?</h3>
            <p>No, pero sin registro no tienes protección legal.</p>
          </div>

          <div>
            <h3>¿Qué pasa si no registro mi marca?</h3>
            <p>
              Otra persona puede registrarla antes y perderías el derecho de
              uso.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
