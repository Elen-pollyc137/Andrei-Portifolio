import { personal } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Vamos conversar</span>
        <h2 className={styles.title}>
          Disponível para novos contratos de gestão de obra e supervisão técnica
        </h2>

        <div className={styles.channels}>
          <a href={`mailto:${personal.emails[0]}`} className={styles.channel}>
            <Icon name="mail" size={18} />
            <div>
              <span className={styles.channelLabel}>E-mail</span>
              <span className={styles.channelValue}>{personal.emails[0]}</span>
            </div>
          </a>
          <a href={`tel:${personal.phone.replace(/\D/g, "")}`} className={styles.channel}>
            <Icon name="phone" size={18} />
            <div>
              <span className={styles.channelLabel}>Telefone</span>
              <span className={styles.channelValue}>{personal.phone}</span>
            </div>
          </a>
          <div className={styles.channel}>
            <Icon name="pin" size={18} />
            <div>
              <span className={styles.channelLabel}>Localização</span>
              <span className={styles.channelValue}>{personal.location}</span>
            </div>
          </div>
        </div>

        <a href={`mailto:${personal.emails[0]}`} className={styles.cta}>
          Enviar e-mail
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </section>
  );
}
