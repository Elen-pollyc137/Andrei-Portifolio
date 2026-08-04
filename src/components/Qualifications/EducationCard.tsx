import { education } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import styles from "./Qualifications.module.scss";

export default function EducationCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <span className={styles.cardIcon}>
          <Icon name="building" size={16} />
        </span>
        Formação acadêmica
      </h3>
      <ul className={styles.eduList}>
        {education.map((item) => (
          <li key={item.value} className={styles.eduItem}>
            <span className={styles.eduLabel}>{item.label}</span>
            <span className={styles.eduValue}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
