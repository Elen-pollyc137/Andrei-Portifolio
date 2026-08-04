import Image from "next/image";
import { stats } from "@/data/profile";
import styles from "./Stats.module.scss";

export default function Stats() {
  return (
    <section id="numeros" className={styles.section}>
      <div className={styles.backdrop}>
        <Image
          src="/Tipos-de-servicos-na-Engenharia-6-1-1024x682.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.backdropImage}
        />
        <div className={styles.scrim} />
      </div>

      <div className={styles.inner}>
        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statValue}>{stat.value}</dt>
              <dd className={styles.statLabel}>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
