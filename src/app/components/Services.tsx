"use client";

import styles from "../styles/Services.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nuestros Servicios Integrales para tu Propiedad Intelectual en
          Colombia
        </h2>

        <p className={styles.description}>
          Desde el registro de marcas en Bogotá hasta patentes internacionales,
          cubrimos cada ángulo de la protección jurídica de tus activos
          creativos y tecnológicos en el mercado colombiano y latinoamericano.
        </p>

        <div className={styles.grid}>
          <div className={styles.service}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTrademark} />
            </div>
            <div>
              <h3>Registro de Marcas</h3>
              <p>
                Trámites ante la Superintendencia de Industria y Comercio (SIC)
                y registros internacionales mediante el Sistema de Madrid.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div>
              <h3>Patentes y Modelos de Utilidad</h3>
              <p>
                Solicitudes nacionales ante la SIC y protección global mediante
                el Tratado de Cooperación en materia de Patentes (PCT).
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <div>
              <h3>Diseños Industriales</h3>
              <p>
                Protección estratégica de la identidad visual de tus productos
                para emprendedores y empresas en Bogotá y todo el país.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUserSecret} />
            </div>
            <div>
              <h3>Secretos Empresariales</h3>
              <p>
                Protección del know-how, innovaciones técnicas y acuerdos de
                confidencialidad para PYMEs colombianas.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCopyright} />
            </div>
            <div>
              <h3>Derechos de Autor</h3>
              <p>
                Registro de software, bases de datos y protección de activos
                digitales bajo la normativa vigente en Colombia.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMicrochip} />
            </div>
            <div>
              <h3>Nuevas Tecnologías</h3>
              <p>
                Asesoramiento en protección de datos (Ley 1581), IA, blockchain
                y comercio electrónico para el ecosistema digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
