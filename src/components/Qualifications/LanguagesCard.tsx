import { languages } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import styles from "./Qualifications.module.scss";

export default function LanguagesCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <span className={styles.cardIcon}>
          <Icon name="road" size={16} />
        </span>
        Idiomas
      </h3>
      <ul className={styles.langList}>
        {languages.map((lang) => (
          <li key={lang.name} className={styles.langItem}>
            <span>{lang.name}</span>
            {lang.level && <span className={styles.langLevel}>{lang.level}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
