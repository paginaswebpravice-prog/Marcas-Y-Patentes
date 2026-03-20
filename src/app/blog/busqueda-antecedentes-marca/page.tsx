"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function BusquedaAntecedentesMarca() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          Búsqueda de antecedentes marcarios en Colombia
        </h1>
        <p itemProp="description">
          Aprende cómo verificar la disponibilidad de tu marca en Colombia antes
          de registrarla ante la SIC y evitar rechazos legales.
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
        <h1>
          Búsqueda de antecedentes marcarios en Colombia: paso clave antes de
          registrar tu marca
        </h1>

        <p>
          Antes de iniciar el registro de marca en Colombia, es fundamental
          verificar si ya existe una marca igual o similar. Este proceso,
          conocido como búsqueda de antecedentes marcarios, evita rechazos y
          problemas legales ante la Superintendencia de Industria y Comercio
          (SIC).
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. ¿Qué es la búsqueda de antecedentes marcarios?",
            text: (
              <>
                <p>
                  Es un análisis previo que permite identificar si una marca ya
                  está registrada o en proceso de registro en Colombia.
                </p>
                <p>
                  Se realiza consultando la base de datos oficial de la SIC y
                  evaluando posibles similitudes con otras marcas existentes.
                </p>
              </>
            ),
          },
          {
            title: "2. ¿Por qué es importante hacer esta búsqueda?",
            text: (
              <>
                <p>
                  Realizar la búsqueda antes de registrar tu marca reduce el
                  riesgo de rechazo y evita conflictos legales con terceros.
                </p>
                <p>
                  Además, te permite tomar decisiones estratégicas sobre el
                  nombre o identidad de tu negocio en Bogotá o cualquier ciudad
                  de Colombia.
                </p>
              </>
            ),
          },
          {
            title: "3. ¿Dónde se realiza la búsqueda en Colombia?",
            text: (
              <>
                <p>
                  La búsqueda se realiza en la base de datos de la
                  Superintendencia de Industria y Comercio (SIC).
                </p>
                <p>
                  Esta plataforma permite consultar marcas registradas,
                  solicitadas y publicadas en el territorio colombiano.
                </p>
              </>
            ),
          },
          {
            title: "4. Tipos de búsqueda de marca",
            text: (
              <>
                <p>
                  Existen diferentes tipos de búsqueda según el nivel de
                  análisis:
                </p>
                <p>
                  • Búsqueda básica (coincidencias exactas) <br />
                  • Búsqueda fonética (sonidos similares) <br />
                  • Búsqueda conceptual (ideas similares) <br />• Búsqueda por
                  clases (Clasificación de Niza)
                </p>
              </>
            ),
          },
          {
            title: "5. Errores comunes en la búsqueda de antecedentes",
            text: (
              <>
                <p>
                  Muchas empresas en Colombia cometen errores al hacer este
                  proceso:
                </p>
                <p>
                  • Buscar solo coincidencias exactas <br />
                  • Ignorar similitudes fonéticas <br />
                  • No revisar la clase correcta <br />• Confiar únicamente en
                  búsquedas automáticas
                </p>
              </>
            ),
          },
          {
            title: "6. ¿Es suficiente hacer la búsqueda por tu cuenta?",
            text: (
              <>
                <p>
                  Aunque puedes realizar una búsqueda básica en la SIC, lo más
                  recomendable es contar con asesoría legal especializada.
                </p>
                <p>
                  Un abogado puede interpretar correctamente los resultados y
                  evaluar el riesgo real de registro en Colombia.
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Verifica tu marca antes de registrarla</h3>
          <p>
            Nuestro equipo en Bogotá realiza un análisis profesional de
            antecedentes marcarios en Colombia para aumentar tus probabilidades
            de éxito ante la SIC.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar estudio de marca
          </motion.button>
        </motion.div>

        {/* ================= FAQ ================= */}
        <motion.div
          className={styles.faq}
          itemScope
          itemType="https://schema.org/FAQPage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Preguntas frecuentes</h2>

          {[
            {
              q: "¿Es obligatorio hacer la búsqueda de antecedentes?",
              a: "No es obligatorio, pero es altamente recomendable para evitar rechazos en el registro de marca en Colombia.",
            },
            {
              q: "¿La SIC hace la búsqueda por mí?",
              a: "No. La SIC evalúa la solicitud, pero no realiza un estudio previo personalizado para evitar conflictos.",
            },
            {
              q: "¿Cuánto cuesta una búsqueda de marca?",
              a: "Puede ser gratuita si la haces directamente en la SIC, pero un análisis profesional tiene un costo adicional.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
