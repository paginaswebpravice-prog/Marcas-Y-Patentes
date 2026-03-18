"use client";

import styles from "../styles/WhyRegister.module.css";

export default function WhyRegister() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* SEO HIDDEN (IA + GOOGLE) */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Registro de marcas en Bogotá y Colombia ante la SIC
        </h2>
        <p itemProp="description">
          Servicio legal de registro de marcas y patentes en Colombia, enfocado
          en empresas de Bogotá. Protección jurídica ante la Superintendencia de
          Industria y Comercio (SIC).
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Por Qué Registrar tu Marca en Colombia ante la SIC es Vital?
        </h2>

        <p className={styles.description}>
          Si tienes un negocio en Bogotá o cualquier ciudad de Colombia,
          registrar tu marca ante la Superintendencia de Industria y Comercio
          (SIC) es una decisión estratégica. No solo protege tu identidad
          comercial, sino que fortalece tu posición en el mercado colombiano
          frente a competidores y posibles imitaciones.
        </p>

        <div className={styles.cards}>
          <div
            className={styles.card}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <h3 itemProp="name">Protección como Activo Empresarial</h3>
            <p itemProp="description">
              En el entorno empresarial de Colombia, tu marca es un activo
              intangible clave. Registrar tu marca en Bogotá te permite proteger
              legalmente tu inversión en branding y asegurar su uso exclusivo en
              todo el territorio colombiano.
            </p>
          </div>

          <div
            className={styles.card}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <h3 itemProp="name">Exclusividad Legal ante la SIC</h3>
            <p itemProp="description">
              Obtener el registro ante la SIC en Colombia te otorga derechos
              exclusivos sobre tu marca, evitando que terceros la utilicen o la
              registren. Esto es clave para empresas en Bogotá que buscan
              seguridad jurídica y crecimiento sostenible.
            </p>
          </div>

          <div
            className={styles.card}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <h3 itemProp="name">Crecimiento desde Bogotá a Colombia</h3>
            <p itemProp="description">
              Registrar tu marca te permite escalar tu negocio desde Bogotá
              hacia todo Colombia con una base legal sólida. Es el primer paso
              para expandirte con confianza en el mercado nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
