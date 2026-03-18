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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

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

  /* ================= NAVIGATION HYBRID ================= */

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(`/#${id}`);
    }

    setMenuOpen(false);
  };

  const handleContact = () => {
    if (pathname === "/") {
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  /* ================= COMPONENT ================= */

  return (
    <header className={styles.header}>
      {/* ================= TOPBAR ================= */}
      <div className={styles.topbar}>
        <div className={styles.topbarContainer}>
          <div className={styles.topLeft}>
            <span>
              <FontAwesomeIcon icon={faPhone} /> (601) 3099331
            </span>

            <span>
              <FontAwesomeIcon icon={faLocationDot} /> Bogotá - Colombia
            </span>
          </div>

          <div className={styles.topRight}>
            <a
              href="https://www.facebook.com/praviceabogadosespecializados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="https://www.instagram.com/pravice_abogados/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://co.linkedin.com/company/praviceabogadosespecializados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://www.tiktok.com/@pravice_abogados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
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
            <Link href="/">
              <Image
                src="/logo_pravice.png"
                alt="Firma de abogados en Bogotá"
                width={70}
                height={70}
                priority
              />
            </Link>
          </div>

          {/* LINKS */}
          <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
            {sections.map((section) => (
              <li key={section.id}>
                <button onClick={() => handleNavigation(section.id)}>
                  {section.name}
                </button>
              </li>
            ))}

            {/* BLOG COMO RUTA */}
            <li>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
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
