"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function TiempoRegistroMarca() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">Tiempo de registro de marca en Colombia</h1>
        <p itemProp="description">
          Conoce cuánto tarda el proceso de registro de marca en Colombia ante
          la SIC y qué factores pueden influir en su duración.
        </p>
        <span itemProp="author">Firma de abogados en Bogotá</span>
        <span itemProp="publisher">PRAVICE Abogados</span>
      </div>

      {/* ================= HERO ================= */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>¿Cuánto tarda registrar una marca en Colombia desde Bogotá?</h1>

        <p>
          Registrar una marca en Colombia no es inmediato. El proceso ante la
          Superintendencia de Industria y Comercio (SIC) puede tardar varios
          meses dependiendo de distintos factores. Aquí te explicamos los
          tiempos reales y qué puedes esperar en cada etapa.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. Tiempo promedio del proceso",
            text: (
              <>
                <p>
                  En Colombia, el registro de marca suele tardar entre 6 y 12
                  meses desde la presentación de la solicitud hasta la decisión
                  final de la SIC.
                </p>
                <p>
                  Este tiempo puede variar dependiendo de la complejidad del
                  caso y la existencia de oposiciones.
                </p>
              </>
            ),
          },
          {
            title: "2. Etapas del proceso y duración",
            text: (
              <>
                <p>
                  El proceso de registro de marca en Colombia incluye varias
                  fases:
                </p>
                <p>
                  • Examen de forma: 1 a 2 meses <br />
                  • Publicación en gaceta: 30 días <br />
                  • Periodo de oposiciones: 30 días <br />• Examen de fondo: 3 a
                  6 meses
                </p>
              </>
            ),
          },
          {
            title: "3. Factores que pueden retrasar el registro",
            text: (
              <>
                <p>
                  Algunos factores que pueden alargar el proceso en Colombia
                  son:
                </p>
                <p>
                  • Oposiciones de terceros <br />
                  • Errores en la solicitud <br />
                  • Requerimientos de la SIC <br />• Elección incorrecta de la
                  clase
                </p>
              </>
            ),
          },
          {
            title: "4. ¿Se puede acelerar el proceso?",
            text: (
              <>
                <p>
                  No existe un trámite exprés oficial en Colombia, pero puedes
                  evitar retrasos presentando una solicitud correcta desde el
                  inicio.
                </p>
                <p>
                  Una buena asesoría legal reduce tiempos al prevenir errores y
                  responder adecuadamente a requerimientos.
                </p>
              </>
            ),
          },
          {
            title: "5. ¿Desde cuándo estás protegido?",
            text: (
              <>
                <p>
                  Aunque el registro toma tiempo, tu solicitud genera una
                  prioridad desde la fecha de presentación ante la SIC.
                </p>
                <p>
                  Esto significa que tienes cierta protección mientras el
                  proceso está en curso.
                </p>
              </>
            ),
          },
          {
            title: "6. ¿Cuánto dura el registro una vez aprobado?",
            text: (
              <>
                <p>
                  Una vez concedido, el registro de marca en Colombia tiene una
                  vigencia de 10 años.
                </p>
                <p>
                  Puede renovarse indefinidamente por periodos iguales,
                  asegurando la protección continua de tu marca.
                </p>
              </>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{item.title}</h2>
            {item.text}
          </motion.div>
        ))}

        {/* ================= CTA ================= */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Registra tu marca sin retrasos innecesarios</h3>
          <p>
            Nuestro equipo en Bogotá te ayuda a presentar tu solicitud ante la
            SIC correctamente desde el inicio, reduciendo tiempos y evitando
            errores.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar asesoría gratuita
          </motion.button>
        </motion.div>

        {/* ================= FAQ ================= */}
        <motion.div
          className={styles.faq}
          itemScope
          itemType="https://schema.org/FAQPage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Preguntas frecuentes</h2>

          {[
            {
              q: "¿Cuánto tarda registrar una marca en Colombia?",
              a: "Generalmente entre 6 y 12 meses, dependiendo del proceso y posibles oposiciones.",
            },
            {
              q: "¿Qué puede retrasar el registro de marca?",
              a: "Errores en la solicitud, oposiciones o requerimientos de la SIC pueden alargar el proceso.",
            },
            {
              q: "¿Mi marca está protegida mientras está en trámite?",
              a: "Sí, tienes prioridad desde la fecha de solicitud, aunque la protección total se obtiene al ser concedida.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 itemProp="name">{faq.q}</h3>

              <p
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{faq.a}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </article>
  );
}
