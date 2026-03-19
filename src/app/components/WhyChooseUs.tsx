"use client";

import Image from "next/image";
import styles from "../styles/WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN (IA + GOOGLE) */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Abogados de propiedad intelectual en Bogotá, Colombia
        </h2>
        <p itemProp="description">
          Firma legal en Bogotá especializada en registro de marcas, patentes y
          protección de propiedad intelectual en Colombia ante la SIC.
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
        <span itemProp="serviceType">
          Registro de marcas y patentes en Colombia
        </span>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Por Qué Elegirnos como tu Firma de Propiedad Intelectual en Bogotá,
          Colombia?
        </h2>

        <div className={styles.grid}>
          {/* CARD AZUL */}
          <div className={styles.card}>
            <div>
              <h3>Enfoque Estratégico para Empresas en Bogotá</h3>
              <p>
                Entendemos el ecosistema empresarial de Bogotá y Colombia,
                ofreciendo soluciones jurídicas adaptadas a emprendedores, PYMEs
                y empresas que buscan proteger su marca ante la SIC.
              </p>
            </div>

            <div>
              <h3>Gestión Nacional con Proyección Internacional</h3>
              <p>
                Protegemos tu marca en Colombia ante la Superintendencia de
                Industria y Comercio (SIC) y estructuramos estrategias de
                expansión internacional cuando tu negocio lo requiere.
              </p>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className={styles.content}>
            <p className={styles.description}>
              Elegir un abogado de propiedad intelectual en Bogotá no es solo
              una decisión legal, es una decisión estratégica. Nuestro enfoque
              combina experiencia jurídica en Colombia con una visión práctica
              del negocio, lo que permite maximizar la protección de tus activos
              intangibles y reducir riesgos en el mercado.
            </p>

            <ul className={styles.list}>
              <li>
                ✔ Asesoría legal especializada en marcas y patentes en Colombia
              </li>
              <li>✔ Experiencia en procesos ante la SIC en Bogotá</li>
              <li>
                ✔ Estrategias jurídicas para protección y defensa de marca
              </li>
              <li>✔ Acompañamiento integral para empresas colombianas</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className={styles.imageWrapper}>
            <Image
              src="/ideaImage.jpg"
              alt="Abogados de propiedad intelectual en Bogotá Colombia"
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
