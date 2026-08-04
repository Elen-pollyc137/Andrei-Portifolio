import type { IconName } from "@/components/Icon/Icon";
import { experienceGroups } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/Carousel/Carousel";
import JobCard from "./JobCard";
import styles from "./Experience.module.scss";

const jobs = experienceGroups.flatMap((group) =>
  group.jobs.map((job) => ({
    job,
    groupTitle: group.title,
    groupIcon: group.icon as IconName,
  })),
);

export default function Experience() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Experiência profissional"
          title="Obras que exigiram grandes efetivos e alta responsabilidade técnica"
        />

        <div className={styles.stage}>
          <Carousel opts={{ align: "start" }} className={styles.stageCarousel}>
            <CarouselContent className={styles.stageTrack}>
              {jobs.map(({ job, groupTitle, groupIcon }) => (
                <CarouselItem key={job.company} basis="60%" className={styles.stageItem}>
                  <JobCard job={job} groupTitle={groupTitle} groupIcon={groupIcon} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
