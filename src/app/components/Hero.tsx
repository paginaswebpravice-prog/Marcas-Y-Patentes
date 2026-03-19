"use client";

import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      id="hero"
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Abogados de marcas y patentes en Colombia y Bogotá
        </h2>
        <p itemProp="description">
          Firma legal especializada en registro de marcas, patentes y propiedad
          intelectual en Colombia. Asesoramos empresas en Bogotá ante la SIC y
          procesos internacionales vía OMPI.
        </p>
        <span itemProp="areaServed">Colombia</span>
        <span itemProp="address">Bogotá, Colombia</span>
      </div>

      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Registro de Marcas y Patentes en Colombia:
          <br />
          Abogados Especialistas en Bogotá
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Protegemos tu marca, logo o invención en Colombia con asesoría legal
          especializada ante la Superintendencia de Industria y Comercio (SIC).
          Acompañamos a empresas en Bogotá y todo el país en el registro de
          marcas, patentes y propiedad intelectual, asegurando la protección
          legal de tus activos y el crecimiento de tu negocio.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.button
            className={styles.primary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Asesoría en Marcas y Patentes
          </motion.button>

          <motion.button
            className={styles.secondary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Servicios de Propiedad Intelectual
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className={styles.imageContainer}
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/marcas&patentes.jpg"
          alt="Abogados expertos en registro de marcas y patentes en Bogotá Colombia"
          fill
          priority
          className={styles.image}
        />
      </motion.div>
    </section>
  );
}
