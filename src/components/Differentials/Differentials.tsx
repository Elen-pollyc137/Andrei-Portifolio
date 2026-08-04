import Image from "next/image";
import { differentials } from "@/data/profile";
import Icon from "@/components/Icon/Icon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Differentials.module.scss";

export default function Differentials() {
  return (
    <section id="diferenciais" className={styles.section}>
      <div className={styles.backdrop}>
        <Image
          src="/obras/cenibra/01.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.backdropImage}
        />
        <div className={styles.scrim} />
      </div>

      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Principais diferenciais para o mercado industrial"
          align="center"
        />
        <ul className={styles.list}>
          {differentials.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.icon}>
                <Icon name="check" size={18} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
