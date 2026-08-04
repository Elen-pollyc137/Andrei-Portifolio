"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#formacao", label: "Formação" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#topo" className={styles.brand}>
          <span className={styles.brandMark}>ADO</span>
          <span className={styles.brandName}>Andrei Durães Oliveira</span>
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className={styles.cta}>
          Entrar em contato
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Entrar em contato
          </a>
        </nav>
      )}
    </header>
  );
}
