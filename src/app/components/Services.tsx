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
    <section
      className={styles.section}
      id="services"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* SEO HIDDEN (IA + GOOGLE) */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Servicios de propiedad intelectual en Bogotá y Colombia
        </h2>
        <p itemProp="description">
          Servicios legales de registro de marcas, patentes y protección de
          propiedad intelectual en Colombia. Asesoría especializada en Bogotá
          ante la Superintendencia de Industria y Comercio (SIC).
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          Servicios de Propiedad Intelectual en Bogotá y Colombia
        </h2>

        <p className={styles.description}>
          Ofrecemos servicios legales especializados en registro de marcas,
          patentes y propiedad intelectual en Colombia, con enfoque en empresas
          y emprendedores en Bogotá. Protegemos tus activos ante la
          Superintendencia de Industria y Comercio (SIC) y fortalecemos la
          seguridad jurídica de tu negocio.
        </p>

        <div className={styles.grid}>
          {/* SERVICIO 1 */}
          <div
            className={styles.service}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTrademark} />
            </div>
            <div>
              <h3 itemProp="name">Registro de Marcas en Colombia</h3>
              <p itemProp="description">
                Gestionamos el registro de marcas en Bogotá y Colombia ante la
                SIC, asegurando exclusividad legal y protección frente a
                terceros.
              </p>
            </div>
          </div>

          {/* SERVICIO 2 */}
          <div
            className={styles.service}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div>
              <h3 itemProp="name">
                Patentes y Modelos de Utilidad en Colombia
              </h3>
              <p itemProp="description">
                Asesoramos solicitudes de patentes ante la SIC en Colombia,
                protegiendo innovaciones tecnológicas de empresas en Bogotá y
                todo el país.
              </p>
            </div>
          </div>

          {/* SERVICIO 3 */}
          <div
            className={styles.service}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <div>
              <h3 itemProp="name">Diseños Industriales en Colombia</h3>
              <p itemProp="description">
                Protegemos la apariencia de tus productos en el mercado
                colombiano, ideal para empresas y emprendimientos en Bogotá.
              </p>
            </div>
          </div>

          {/* SERVICIO 4 */}
          <div
            className={styles.service}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUserSecret} />
            </div>
            <div>
              <h3 itemProp="name">Protección de Secretos Empresariales</h3>
              <p itemProp="description">
                Protegemos el know-how y la información confidencial de empresas
                en Bogotá y Colombia mediante estrategias legales y contratos.
              </p>
            </div>
          </div>

          {/* SERVICIO 5 */}
          <div
            className={styles.service}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCopyright} />
            </div>
            <div>
              <h3 itemProp="name">Derechos de Autor en Colombia</h3>
              <p itemProp="description">
                Registro y protección de software, contenido digital y obras
                creativas bajo la legislación colombiana.
              </p>
            </div>
          </div>

          {/* SERVICIO 6 */}
          <div
            className={styles.service}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMicrochip} />
            </div>
            <div>
              <h3 itemProp="name">
                Protección Legal en Tecnología y Datos en Colombia
              </h3>
              <p itemProp="description">
                Asesoría en protección de datos, inteligencia artificial y
                comercio electrónico para empresas en Bogotá y el entorno
                digital colombiano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
