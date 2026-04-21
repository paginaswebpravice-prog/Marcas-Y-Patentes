"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function TiempoRegistroMarcaContent() {
  return (
    <article className={styles.article}>
      {/* ================= HERO ================= */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>¿Cuánto tarda registrar una marca en Colombia desde Bogotá?</h1>

        <p>
          Registrar una marca en Colombia es un proceso legal que requiere
          cumplir varias etapas ante la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>.
        </p>

        <p>
          Si estás en <strong>Bogotá</strong> o en cualquier ciudad del país,
          entender los tiempos reales del proceso te permitirá tomar mejores
          decisiones y evitar retrasos innecesarios.
        </p>

        <div className={styles.highlight}>
          ⏱️ El tiempo promedio va de 6 a 12 meses, pero puede variar según tu
          caso.
        </div>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {/* 1 */}
        <h2>1. Tiempo promedio del registro de marca en Colombia</h2>

        <p>
          En Colombia, registrar una marca suele tomar entre{" "}
          <strong>6 y 12 meses</strong> desde la presentación de la solicitud
          hasta la decisión final.
        </p>

        <p>
          Este tiempo puede variar dependiendo de la carga de trabajo de la SIC,
          la calidad de la solicitud y si existen oposiciones por parte de
          terceros.
        </p>

        <div className={styles.box}>
          Un proceso bien estructurado desde el inicio puede acercarte al tiempo
          mínimo estimado.
        </div>

        {/* 2 */}
        <h2>2. Etapas del proceso y duración aproximada</h2>

        <p>
          El registro de marca en Colombia se divide en varias fases, cada una
          con tiempos específicos:
        </p>

        <ul>
          <li>
            <strong>Examen de forma:</strong> 1 a 2 meses
          </li>
          <li>
            <strong>Publicación en la gaceta:</strong> 30 días
          </li>
          <li>
            <strong>Periodo de oposiciones:</strong> 30 días
          </li>
          <li>
            <strong>Examen de fondo:</strong> 3 a 6 meses
          </li>
        </ul>

        <p>
          Cada etapa es obligatoria y cualquier error puede hacer que el proceso
          se reinicie o se retrase.
        </p>

        {/* 3 */}
        <h2>3. Factores que pueden retrasar el registro</h2>

        <p>
          No todos los procesos duran lo mismo. Estos son los principales
          factores que pueden alargar el tiempo:
        </p>

        <ul>
          <li>Oposiciones de terceros</li>
          <li>Errores en el formulario</li>
          <li>Clasificación incorrecta (Niza)</li>
          <li>Requerimientos de la SIC</li>
          <li>Similitud con marcas ya registradas</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Un error simple puede retrasar tu registro varios meses.
        </div>

        {/* 4 */}
        <h2>4. ¿Se puede acelerar el proceso?</h2>

        <p>
          Actualmente, en Colombia no existe un trámite exprés oficial para el
          registro de marcas.
        </p>

        <p>Sin embargo, sí puedes reducir tiempos si:</p>

        <ul>
          <li>Realizas una búsqueda previa de antecedentes</li>
          <li>Clasificas correctamente tu marca</li>
          <li>Presentas la solicitud sin errores</li>
          <li>Respondes rápidamente requerimientos</li>
        </ul>

        <div className={styles.box}>
          La asesoría especializada puede marcar la diferencia entre 6 meses y
          más de 1 año.
        </div>

        {/* 5 */}
        <h2>5. Protección durante el trámite</h2>

        <p>
          Desde el momento en que presentas la solicitud, obtienes un{" "}
          <strong>derecho de prioridad</strong>.
        </p>

        <p>
          Esto significa que, aunque el registro no esté aprobado, tu marca ya
          tiene una fecha oficial que te protege frente a solicitudes
          posteriores.
        </p>

        {/* 6 */}
        <h2>6. Vigencia del registro de marca</h2>

        <p>
          Una vez concedida, la marca queda protegida por{" "}
          <strong>10 años en Colombia</strong>.
        </p>

        <p>
          Este registro puede renovarse indefinidamente, convirtiéndose en un
          activo estratégico para tu negocio.
        </p>

        {/* 7 */}
        <h2>7. ¿Por qué es importante registrar tu marca a tiempo?</h2>

        <p>
          Muchas empresas retrasan este proceso y terminan enfrentando problemas
          legales o pérdida de su marca.
        </p>

        <ul>
          <li>Puedes perder el derecho sobre tu nombre</li>
          <li>Otro puede registrarla primero</li>
          <li>Puedes enfrentar demandas</li>
          <li>Pierdes inversión en branding</li>
        </ul>

        <div className={styles.highlight}>
          🚨 En Colombia, el derecho lo obtiene quien registra, no quien usa
          primero.
        </div>

        {/* ================= CTA ================= */}
        <div className={styles.cta}>
          <h3>Registra tu marca sin errores ni retrasos</h3>
          <p>
            Te ayudamos a gestionar tu proceso ante la SIC correctamente desde
            el inicio, reduciendo tiempos y asegurando tu protección legal.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría gratuita
          </a>
        </div>

        {/* ================= FAQ ================= */}
        <div className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <div>
            <h3>¿Cuánto tarda registrar una marca en Colombia?</h3>
            <p>
              Entre 6 y 12 meses en promedio, dependiendo de oposiciones y
              revisiones.
            </p>
          </div>

          <div>
            <h3>¿Qué puede retrasar el proceso?</h3>
            <p>
              Errores en la solicitud, oposiciones o requerimientos de la SIC.
            </p>
          </div>

          <div>
            <h3>¿Estoy protegido mientras está en trámite?</h3>
            <p>Sí, tienes prioridad legal desde la fecha de solicitud.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
