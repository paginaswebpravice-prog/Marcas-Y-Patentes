"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ClasesMarcasColombiaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          Clases de marcas en Colombia: guía completa según la SIC y la
          Clasificación de Niza
        </h1>

        <p>
          Elegir correctamente la clase al registrar una marca en Colombia es
          uno de los factores más importantes para garantizar su protección
          legal. Muchas empresas en Bogotá y otras ciudades cometen errores en
          este paso, lo que puede generar rechazos o una protección incompleta.
        </p>

        <p>
          La Superintendencia de Industria y Comercio (SIC) utiliza la
          Clasificación de Niza, un sistema internacional que organiza todas las
          actividades económicas en categorías específicas.
        </p>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* SECCION 1 */}
        <h2>¿Qué es la Clasificación de Niza?</h2>
        <p>
          La Clasificación de Niza es un sistema internacional utilizado para
          clasificar productos y servicios en el registro de marcas. Este
          sistema divide las actividades en 45 clases.
        </p>

        <ul>
          <li>Clases 1 a 34: productos</li>
          <li>Clases 35 a 45: servicios</li>
        </ul>

        <p>
          En Colombia, la SIC aplica este sistema para evaluar las solicitudes
          de registro de marca y determinar el alcance de la protección legal.
        </p>

        {/* SECCION 2 */}
        <h2>¿Por qué es clave elegir bien la clase?</h2>
        <p>
          La clase define el ámbito de protección de tu marca. Si eliges mal,
          podrías:
        </p>

        <ul>
          <li>No proteger tu actividad principal</li>
          <li>Permitir que terceros registren marcas similares</li>
          <li>Recibir objeciones o rechazos por parte de la SIC</li>
        </ul>

        <p>
          En ciudades como Bogotá, donde la competencia empresarial es alta,
          este error puede afectar directamente el crecimiento de tu negocio.
        </p>

        {/* SECCION 3 */}
        <h2>Ejemplos de clases más utilizadas en Colombia</h2>

        <ul>
          <li>
            <strong>Clase 25:</strong> ropa, calzado y accesorios
          </li>
          <li>
            <strong>Clase 35:</strong> marketing, publicidad y comercio
          </li>
          <li>
            <strong>Clase 41:</strong> educación, cursos y formación
          </li>
          <li>
            <strong>Clase 42:</strong> software, tecnología y desarrollo
          </li>
          <li>
            <strong>Clase 43:</strong> restaurantes y alimentos
          </li>
        </ul>

        <p>
          Elegir la clase correcta depende directamente de la actividad real de
          tu negocio.
        </p>

        {/* SECCION 4 */}
        <h2>¿Se puede registrar una marca en varias clases?</h2>
        <p>
          Sí. Muchas empresas en Colombia registran su marca en múltiples clases
          para proteger diferentes líneas de negocio.
        </p>

        <p>Por ejemplo:</p>

        <ul>
          <li>Clase 25 → productos (ropa)</li>
          <li>Clase 35 → comercialización</li>
        </ul>

        <p>
          Esto permite una protección más completa, pero también incrementa el
          costo del proceso ante la SIC.
        </p>

        {/* SECCION 5 */}
        <h2>Errores comunes al elegir la clase</h2>

        <ul>
          <li>Elegir una clase incorrecta</li>
          <li>No cubrir todas las actividades</li>
          <li>Confundir productos con servicios</li>
          <li>No planificar crecimiento futuro</li>
          <li>Basarse solo en búsquedas automáticas</li>
        </ul>

        <p>
          Estos errores son muy comunes en Colombia y pueden afectar seriamente
          la viabilidad del registro de marca.
        </p>

        {/* SECCION 6 */}
        <h2>Cómo elegir correctamente la clase de tu marca</h2>

        <p>Para elegir correctamente, debes analizar:</p>

        <ul>
          <li>Actividad principal del negocio</li>
          <li>Servicios o productos ofrecidos</li>
          <li>Proyección de crecimiento</li>
          <li>Competencia en el mercado</li>
        </ul>

        <p>
          Contar con asesoría legal especializada en Bogotá te permite evitar
          errores y aumentar las probabilidades de aprobación ante la SIC.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Protege tu marca correctamente desde el inicio</h3>
          <p>
            Analizamos tu negocio y definimos las clases adecuadas para
            registrar tu marca en Colombia sin riesgos legales.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2>Preguntas frecuentes sobre clases de marcas</h2>

          <div>
            <h3>¿Cuántas clases existen?</h3>
            <p>
              Existen 45 clases en total según la Clasificación de Niza: 34 de
              productos y 11 de servicios.
            </p>
          </div>

          <div>
            <h3>¿Puedo registrar varias clases?</h3>
            <p>
              Sí, pero cada clase adicional tiene un costo adicional ante la
              SIC.
            </p>
          </div>

          <div>
            <h3>¿Qué pasa si me equivoco?</h3>
            <p>
              Podrías perder protección legal o enfrentar el rechazo de tu
              solicitud.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
