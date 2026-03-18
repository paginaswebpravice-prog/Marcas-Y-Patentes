"use client";

import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      id="hero"
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN (IA + GOOGLE) */}
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
        <h1>
          Registro de Marcas y Patentes en Colombia:
          <br />
          Abogados Especialistas en Bogotá
        </h1>

        <p>
          Protegemos tu marca, logo o invención en Colombia con asesoría legal
          especializada ante la Superintendencia de Industria y Comercio (SIC).
          Acompañamos a empresas en Bogotá y todo el país en el registro de
          marcas, patentes y propiedad intelectual, asegurando la protección
          legal de tus activos y el crecimiento de tu negocio.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Asesoría en Marcas y Patentes
          </button>

          <button className={styles.secondary}>
            Servicios de Propiedad Intelectual
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className={styles.imageContainer}
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <Image
          src="/marcas&patentes.jpg"
          alt="Abogados expertos en registro de marcas y patentes en Bogotá Colombia"
          fill
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
}
