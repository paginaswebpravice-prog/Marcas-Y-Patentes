"use client";

import { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { name: "Inicio", id: "hero" },
    { name: "Servicios", id: "services" },
    { name: "Proceso", id: "process" },
    { name: "Experiencia", id: "experience" },
  ];

  /* ================= SCROLL NAVBAR ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= SCROLL SECTIONS ================= */

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const handleContact = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* ================= COMPONENT ================= */

  return (
    <header className={styles.header}>
      {/* ================= TOPBAR ================= */}

      <div className={styles.topbar}>
        <div className={styles.topbarContainer}>
          <div className={styles.topLeft}>
            <span>
              <FontAwesomeIcon icon={faPhone} /> +57 300 000 0000
            </span>

            <span>
              <FontAwesomeIcon icon={faLocationDot} /> Bogotá - Colombia
            </span>
          </div>

          <div className={styles.topRight}>
            <a
              href="https://www.instagram.com/pravice_abogados/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Pravice Abogados"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/pravice_abogados/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Pravice Abogados"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://co.linkedin.com/company/praviceabogadosespecializados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Pravice Abogados"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.tiktok.com/@pravice_abogados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Pravice Abogados"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.container}>
          {/* LOGO */}
          <div className={styles.logo}>
            <Image
              src="/logo_pravice.png"
              alt="Firma de abogados en Bogotá"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* LINKS */}
          <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
            {sections.map((section) => (
              <li key={section.id}>
                <button onClick={() => handleScrollTo(section.id)}>
                  {section.name}
                </button>
              </li>
            ))}

            <li>
              <button>Blog</button>
            </li>
          </ul>

          {/* CTA */}
          <button className={styles.ctaButton} onClick={handleContact}>
            Ver mi caso
          </button>

          {/* HAMBURGER */}
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
