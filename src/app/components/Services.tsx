"use client";

import styles from "../styles/Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faTrademark,
  faLightbulb,
  faIndustry,
  faUserSecret,
  faCopyright,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section
      className={styles.section}
      id="services"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Servicios de propiedad intelectual en Bogotá y Colombia
        </h2>
        <p itemProp="description">
          Servicios legales de registro de marcas, patentes y protección de
          propiedad intelectual en Colombia. Asesoría especializada en Bogotá
          ante la SIC.
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        {/* TITLE */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Servicios de Propiedad Intelectual en Bogotá y Colombia
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ofrecemos servicios legales especializados en registro de marcas,
          patentes y propiedad intelectual en Colombia, con enfoque en empresas
          y emprendedores en Bogotá.
        </motion.p>

        <div className={styles.grid}>
          {/* SERVICIO 1 */}
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTrademark} />
            </div>
            <div>
              <h3>Registro de Marcas en Colombia</h3>
              <p>
                Gestionamos el registro ante la SIC en Bogotá y Colombia,
                asegurando protección legal.
              </p>
            </div>
          </motion.div>

          {/* SERVICIO 2 */}
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div>
              <h3>Patentes en Colombia</h3>
              <p>
                Protegemos innovaciones ante la SIC con enfoque en empresas
                bogotanas.
              </p>
            </div>
          </motion.div>

          {/* SERVICIO 3 */}
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <div>
              <h3>Diseños Industriales</h3>
              <p>Protegemos la identidad visual de productos en Colombia.</p>
            </div>
          </motion.div>

          {/* SERVICIO 4 */}
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUserSecret} />
            </div>
            <div>
              <h3>Secretos Empresariales</h3>
              <p>Protección del know-how para empresas en Bogotá y Colombia.</p>
            </div>
          </motion.div>

          {/* SERVICIO 5 */}
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCopyright} />
            </div>
            <div>
              <h3>Derechos de Autor</h3>
              <p>Protección de software y contenido digital en Colombia.</p>
            </div>
          </motion.div>

          {/* SERVICIO 6 */}
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMicrochip} />
            </div>
            <div>
              <h3>Tecnología y Datos</h3>
              <p>Asesoría legal en IA, datos y comercio digital en Colombia.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
