import { tools } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import styles from "./Qualifications.module.scss";

export default function ToolsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <span className={styles.cardIcon}>
          <Icon name="factory" size={16} />
        </span>
        Softwares e ferramentas
      </h3>
      <div className={styles.tagList}>
        {tools.map((tool) => (
          <span key={tool} className={styles.tag}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
