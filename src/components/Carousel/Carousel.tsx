"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import Icon from "@/components/Icon/Icon";
import styles from "./Carousel.module.scss";

type EmblaApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselContextValue = {
  carouselRef: UseEmblaCarouselType[0];
  api: EmblaApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel subcomponents must be used within <Carousel />");
  }
  return context;
}

export function Carousel({
  opts,
  plugins,
  className,
  children,
}: {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  className?: string;
  children: React.ReactNode;
}) {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);
  const [, forceRender] = React.useReducer((tick: number) => tick + 1, 0);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (!api) return;
    api.on("reInit", forceRender);
    api.on("select", forceRender);
    return () => {
      api.off("reInit", forceRender);
      api.off("select", forceRender);
    };
  }, [api]);

  const canScrollPrev = api?.canScrollPrev() ?? false;
  const canScrollNext = api?.canScrollNext() ?? false;

  const value = React.useMemo(
    () => ({ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext }),
    [carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext],
  );

  return (
    <CarouselContext.Provider value={value}>
      <div className={`${styles.carousel} ${className ?? ""}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { carouselRef } = useCarousel();
  return (
    <div className={styles.viewport} ref={carouselRef}>
      <div className={`${styles.track} ${className ?? ""}`}>{children}</div>
    </div>
  );
}

export function CarouselItem({
  basis,
  className,
  children,
}: {
  basis?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`${styles.item} ${className ?? ""}`}
      style={basis ? { flexBasis: basis } : undefined}
    >
      {children}
    </div>
  );
}

export function CarouselPrevious({ className }: { className?: string }) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      type="button"
      className={`${styles.control} ${styles.prev} ${className ?? ""}`}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Slide anterior"
    >
      <Icon name="arrow" size={18} className={styles.prevIcon} />
    </button>
  );
}

export function CarouselNext({ className }: { className?: string }) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      type="button"
      className={`${styles.control} ${styles.next} ${className ?? ""}`}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Próximo slide"
    >
      <Icon name="arrow" size={18} />
    </button>
  );
}
