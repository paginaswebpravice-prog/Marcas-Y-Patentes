"use client";

import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <h1>
          Protege tu Innovación y Marca en Colombia:
          <br />
          Tu Aliado Legal en Bogotá
        </h1>

        <p>
          Somos especialistas en propiedad intelectual, marcas y patentes ante
          la Superintendencia de Industria y Comercio (SIC). Protegemos los
          activos de emprendedores, PYMES y empresas colombianas con rigor local
          y visión global mediante el Sistema de Madrid y convenios ante la
          OMPI.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Solicitar Asesoría Gratuita
          </button>

          <button className={styles.secondary}>
            Conocer Nuestros Servicios
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className={styles.imageContainer}>
        <Image
          src="/hero-law.jpg"
          alt="Oficina legal moderna"
          fill
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
}
