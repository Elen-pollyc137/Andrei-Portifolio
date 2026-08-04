import SectionHeading from "@/components/SectionHeading/SectionHeading";
import EducationCard from "./EducationCard";
import SkillsCard from "./SkillsCard";
import ToolsCard from "./ToolsCard";
import LanguagesCard from "./LanguagesCard";
import styles from "./Qualifications.module.scss";

export default function Qualifications() {
  return (
    <section id="formacao" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Formação e competências"
          title="Base técnica para conduzir contratos de alta complexidade"
        />
        <div className={styles.grid}>
          <EducationCard />
          <SkillsCard />
          <ToolsCard />
          <LanguagesCard />
        </div>
      </div>
    </section>
  );
}
