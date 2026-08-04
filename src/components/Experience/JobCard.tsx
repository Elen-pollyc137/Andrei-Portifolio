"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Job } from "@/data/profile";
import Icon, { type IconName } from "@/components/Icon/Icon";
import styles from "./JobCard.module.scss";

const CYCLE_INTERVAL_MS = 1000;

export default function JobCard({
  job,
  groupTitle,
  groupIcon,
}: {
  job: Job;
  groupTitle: string;
  groupIcon: IconName;
}) {
  const images = job.images ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, CYCLE_INTERVAL_MS);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, images.length]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveIndex(0);
  };

  return (
    <article
      className={styles.job}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {images.length > 0 && (
        <div className={styles.media}>
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 90vw, 480px"
              priority={index === 0}
              className={`${styles.mediaImage} ${
                index === activeIndex ? styles.mediaImageActive : ""
              }`}
            />
          ))}

          {images.length > 1 && (
            <div className={styles.dots}>
              {images.map((image, index) => (
                <span
                  key={image.src}
                  className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                />
              ))}
            </div>
          )}

          <div className={styles.scrim} />
        </div>
      )}

      <header className={styles.jobHeader}>
        <div className={styles.jobTitles}>
          <span className={styles.jobGroupTag}>
            <Icon name={groupIcon} size={14} />
            {groupTitle}
          </span>
          <h4 className={styles.jobCompany}>{job.company}</h4>
          <span className={styles.jobRole}>{job.role}</span>
        </div>
        {job.period && <span className={styles.jobPeriod}>{job.period}</span>}
      </header>
      <ul className={styles.jobHighlights}>
        {job.highlights.map((item) => (
          <li key={item} className={styles.jobHighlight}>
            <span className={styles.jobBullet} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
