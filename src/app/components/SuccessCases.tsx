"use client";

import Image from "next/image";
import styles from "../styles/SuccessCases.module.css";

export default function SuccessCases() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Casos de éxito en registro de marcas en Bogotá Colombia
        </h2>
        <p itemProp="description">
          Experiencia comprobada en registro de marcas, patentes y diseños
          industriales en Colombia ante la SIC para empresas en Bogotá.
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          Casos de Éxito en Registro de Marcas y Patentes en Bogotá, Colombia
        </h2>

        <p className={styles.description}>
          Hemos acompañado a emprendedores, startups y empresas en Bogotá y toda
          Colombia en la protección legal de sus marcas, patentes y diseños
          industriales ante la Superintendencia de Industria y Comercio (SIC),
          asegurando resultados sólidos en el mercado nacional.
        </p>

        <div className={styles.grid}>
          {/* ITEM 1 */}
          <div
            className={styles.card}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <div className={styles.icon}>
              <Image
                src="/icons/marcas.jpg"
                alt="Registro de marca en Bogotá Colombia"
                width={60}
                height={60}
              />
            </div>

            <div>
              <h3 itemProp="name">Registro de Marcas Exitoso en Bogotá</h3>

              <p itemProp="description">
                Asesoramos a empresas en Bogotá y Colombia en el registro de
                marcas ante la SIC, logrando exclusividad legal y
                posicionamiento competitivo en el mercado colombiano.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div
            className={styles.card}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <div className={styles.icon}>
              <Image
                src="/icons/patentes.jpg"
                alt="Registro de patentes en Colombia"
                width={60}
                height={60}
              />
            </div>

            <div>
              <h3 itemProp="name">Patentes Gestionadas en Colombia</h3>

              <p itemProp="description">
                Protegemos innovaciones desde Bogotá mediante solicitudes de
                patentes ante la SIC en Colombia, garantizando seguridad
                jurídica para inventores y empresas tecnológicas.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div
            className={styles.card}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <div className={styles.icon}>
              <Image
                src="/icons/disenos.jpg"
                alt="Diseños industriales en Colombia"
                width={60}
                height={60}
              />
            </div>

            <div>
              <h3 itemProp="name">
                Protección de Diseños Industriales en Colombia
              </h3>

              <p itemProp="description">
                Defendemos la identidad visual de productos en el mercado
                colombiano, asegurando su registro y protección legal frente a
                imitaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
