"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ErroresRegistroMarcaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          Errores comunes al registrar una marca en Bogotá (y cómo evitarlos)
        </h1>

        <p>
          Registrar una marca en Colombia es un paso fundamental para proteger
          tu negocio, especialmente en mercados competitivos como{" "}
          <strong>Bogotá</strong>. Sin embargo, muchos emprendedores y empresas
          cometen errores que pueden terminar en rechazos, pérdida de dinero o
          conflictos legales ante la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>.
        </p>

        <p>
          En esta guía completa aprenderás cuáles son los errores más comunes al
          registrar una marca en Colombia, por qué ocurren y cómo evitarlos con
          una estrategia adecuada.
        </p>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* 1 */}
        <h2>No realizar la búsqueda de antecedentes marcarios</h2>
        <p>
          Este es, sin duda, el error más frecuente y uno de los más graves.
          Muchas personas registran su marca sin verificar si ya existe una
          igual o similar en Colombia.
        </p>

        <p>
          La SIC no solo evalúa coincidencias exactas, sino también similitudes
          <strong> fonéticas, visuales y conceptuales</strong>. Esto significa
          que aunque tu marca sea diferente en escritura, puede ser rechazada si
          suena o se percibe similar a otra ya registrada.
        </p>

        <ul>
          <li>Rechazo casi inmediato de la solicitud</li>
          <li>Pérdida del dinero invertido en el trámite</li>
          <li>Riesgo de conflictos legales con terceros</li>
        </ul>

        <p>
          Una búsqueda profesional permite evaluar el riesgo real de registro y
          tomar decisiones estratégicas antes de invertir.
        </p>

        {/* 2 */}
        <h2>Elegir incorrectamente la clase de la marca</h2>
        <p>
          En Colombia, las marcas se registran bajo la Clasificación de Niza,
          que divide los productos y servicios en 45 clases.
        </p>

        <p>
          Elegir mal la clase puede dejar tu marca completamente desprotegida en
          tu actividad principal, incluso si logras registrarla.
        </p>

        <ul>
          <li>No protege tu actividad comercial real</li>
          <li>Necesidad de registrar nuevamente</li>
          <li>Costos duplicados o innecesarios</li>
        </ul>

        <p>
          Este error es común en empresas que no analizan correctamente su
          modelo de negocio o que no proyectan su crecimiento.
        </p>

        {/* 3 */}
        <h2>Presentar información incorrecta o incompleta</h2>
        <p>
          El proceso de registro ante la SIC exige precisión en cada detalle.
          Errores en los datos, documentos o descripciones pueden generar
          requerimientos formales.
        </p>

        <ul>
          <li>Retrasos significativos en el proceso</li>
          <li>Riesgo de abandono de la solicitud</li>
          <li>Costos adicionales por correcciones</li>
        </ul>

        <p>
          Muchas solicitudes fallan por errores básicos en formularios o en la
          descripción de productos y servicios.
        </p>

        {/* 4 */}
        <h2>No responder adecuadamente a oposiciones</h2>
        <p>
          Durante el proceso de registro, terceros pueden presentar oposiciones
          si consideran que tu marca afecta sus derechos.
        </p>

        <p>
          Este es un punto crítico del proceso, ya que una mala respuesta puede
          determinar el rechazo definitivo de la marca.
        </p>

        <ul>
          <li>Se requiere argumentación jurídica sólida</li>
          <li>Análisis de riesgo legal y precedentes</li>
          <li>Defensa técnica ante la SIC</li>
        </ul>

        <p>
          Ignorar una oposición o responder sin estrategia es uno de los errores
          más costosos.
        </p>

        {/* 5 */}
        <h2>Subestimar el proceso legal de registro</h2>
        <p>
          Registrar una marca no es simplemente llenar un formulario. Es un
          proceso jurídico que incluye varias etapas y análisis técnicos.
        </p>

        <ul>
          <li>Evaluación de viabilidad</li>
          <li>Análisis de conflictos marcarios</li>
          <li>Interpretación legal de normas</li>
        </ul>

        <p>
          Muchas empresas en Bogotá subestiman este proceso y terminan
          enfrentando rechazos que pudieron evitarse.
        </p>

        {/* 6 */}
        <h2>No registrar la marca a tiempo</h2>
        <p>
          En Colombia, el derecho sobre una marca se adquiere por el registro,
          no por el uso.
        </p>

        <p>
          Esto significa que otra persona puede registrar tu marca antes que tú,
          incluso si ya la estás utilizando en el mercado.
        </p>

        <ul>
          <li>Pérdida de tu identidad comercial</li>
          <li>Obligación de cambiar nombre y branding</li>
          <li>Conflictos legales complejos</li>
        </ul>

        <p>Actuar a tiempo es clave para proteger tu negocio.</p>

        {/* 7 */}
        <h2>No pensar en el crecimiento del negocio</h2>
        <p>
          Registrar una marca pensando solo en el presente es un error
          estratégico.
        </p>

        <p>
          Muchas empresas crecen y luego descubren que su marca no está
          protegida en nuevas líneas de negocio.
        </p>

        <ul>
          <li>No cubrir futuras actividades</li>
          <li>Limitaciones para expandirse</li>
          <li>Necesidad de nuevos registros</li>
        </ul>

        <p>
          Una estrategia adecuada contempla el crecimiento en Colombia e incluso
          la expansión internacional.
        </p>

        {/* 8 */}
        <h2>No proteger la marca a nivel internacional</h2>
        <p>
          Muchas empresas en Colombia no consideran la protección internacional
          de su marca, especialmente si venden en línea.
        </p>

        <p>
          Esto puede permitir que terceros registren tu marca en otros países.
        </p>

        <ul>
          <li>Pérdida de mercados internacionales</li>
          <li>Conflictos legales fuera del país</li>
          <li>Limitación en expansión global</li>
        </ul>

        <p>
          El Sistema de Madrid permite proteger tu marca en múltiples países.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Evita errores al registrar tu marca</h3>
          <p>
            Nuestro equipo en Bogotá analiza tu caso y te guía en todo el
            proceso ante la SIC para maximizar tus probabilidades de éxito y
            proteger tu marca desde el inicio.
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
            <h3>¿Cuál es el error más común?</h3>
            <p>
              No realizar la búsqueda de antecedentes marcarios antes de iniciar
              el proceso.
            </p>
          </div>

          <div>
            <h3>¿Puedo registrar una marca sin abogado?</h3>
            <p>
              Sí, pero aumenta considerablemente el riesgo de errores,
              oposiciones y rechazo por parte de la SIC.
            </p>
          </div>

          <div>
            <h3>¿Qué pasa si la SIC rechaza mi marca?</h3>
            <p>
              Podrías perder el dinero invertido y deberás iniciar un nuevo
              proceso o presentar recursos legales.
            </p>
          </div>

          <div>
            <h3>¿Cuánto tarda registrar una marca en Colombia?</h3>
            <p>
              El proceso puede tardar entre 6 y 12 meses dependiendo de
              oposiciones y requerimientos.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
