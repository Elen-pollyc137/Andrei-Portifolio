import Image from "next/image";
import { personal } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Portfólio profissional</span>
          <h1 className={styles.name}>{personal.name}</h1>
          <p className={styles.role}>{personal.role}</p>

          <div className={styles.contactRow}>
            <span className={styles.contactItem}>
              <Icon name="pin" size={16} />
              {personal.location}
            </span>
            <span className={styles.contactItem}>
              <Icon name="phone" size={16} />
              {personal.phone}
            </span>
            {personal.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className={styles.contactItem}>
                <Icon name="mail" size={16} />
                {email}
              </a>
            ))}
          </div>

          <div className={styles.actions}>
            <a href="#contato" className={styles.primaryCta}>
              Entrar em contato
              <Icon name="arrow" size={16} />
            </a>
            <a href="#experiencia" className={styles.secondaryCta}>
              Ver experiência
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.photoFrame}>
            <div className={styles.photoGlow} aria-hidden="true" />
            <div className={styles.photoInner}>
              <Image
                src="/foto-perfil.png"
                alt={personal.name}
                fill
                sizes="(min-width: 1024px) 280px, 220px"
                className={styles.photoImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
