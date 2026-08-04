import { skills } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import styles from "./Qualifications.module.scss";

export default function SkillsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <span className={styles.cardIcon}>
          <Icon name="hardhat" size={16} />
        </span>
        Competências técnicas
      </h3>
      <div className={styles.tagList}>
        {skills.map((skill) => (
          <span key={skill} className={styles.tag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
