import { personal } from "@/data/profile";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>
          © {year} {personal.name}
        </span>
        <span className={styles.location}>{personal.location}</span>
      </div>
    </footer>
  );
}
