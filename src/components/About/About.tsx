import { objective, summary } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Síntese executiva"
          title="Mais de três décadas entregando obras de grande porte"
          description={summary.intro}
        />

        <div className={styles.grid}>
          <ul className={styles.bullets}>
            {summary.bullets.map((item) => (
              <li key={item} className={styles.bullet}>
                <Icon name="check" size={16} className={styles.bulletIcon} />
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.side}>
            <div className={styles.objectiveCard}>
              <span className={styles.cardEyebrow}>Objetivo profissional</span>
              <p>{objective}</p>
            </div>
            <p className={styles.note}>{summary.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
