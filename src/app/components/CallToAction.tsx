"use client";

import Image from "next/image";
import styles from "../styles/CallToAction.module.css";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Abogados de marcas en Bogotá Colombia - Asesoría legal
        </h2>
        <p itemProp="description">
          Asesoría legal en Bogotá para registro de marcas y patentes en
          Colombia ante la Superintendencia de Industria y Comercio (SIC).
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        {/* ================= LEFT ================= */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* TITLE */}
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Protege tu Marca en Bogotá y Colombia Hoy
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Evita riesgos legales y asegura la exclusividad de tu marca en
            Colombia. Nuestro equipo en Bogotá te guía en todo el proceso ante
            la Superintendencia de Industria y Comercio (SIC), garantizando un
            registro seguro y estratégico.
          </motion.p>

          {/* INFO BOX 1 */}
          <motion.div
            className={styles.infoBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3>Asesoría Legal en Bogotá</h3>
            <p>
              Agenda una consulta con abogados especializados en propiedad
              intelectual en Bogotá y comienza el registro de tu marca o patente
              en Colombia con respaldo profesional.
            </p>
          </motion.div>

          {/* INFO BOX 2 */}
          <motion.div
            className={styles.infoBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3>Registro de Marca ante la SIC</h3>
            <p>
              Gestionamos todo el proceso en Colombia: búsqueda de antecedentes,
              solicitud ante la SIC y acompañamiento hasta la concesión del
              registro.
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className={styles.buttons}
            itemScope
            itemType="https://schema.org/ContactAction"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className={styles.primaryBtn}
              itemProp="name"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Solicitar Asesoría Gratuita en Bogotá
            </motion.button>

            <motion.button
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver Servicios de Propiedad Intelectual
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ width: "100%", height: "100%" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/logo_pravice.png"
              alt="Asesoría legal en Bogotá Colombia registro de marcas"
              fill
              className={styles.image}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
