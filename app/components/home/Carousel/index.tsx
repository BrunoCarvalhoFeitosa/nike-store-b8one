"use client"
import type { Swiper as SwiperClass } from "swiper"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { homeCarouselSlides } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import styles from "./carousel.module.css"
import "swiper/css"

export const Carousel = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null)
  const progressContent = useRef<HTMLElement>(null)

  const onAutoplayTimeLeft = (
    _swiper: SwiperClass,
    timeLeft: number,
    progress: number
  ) => {
    if (!progressCircle.current || !progressContent.current) {
      return
    }

    progressCircle.current.style.setProperty("--progress", String(1 - progress))
    progressContent.current.textContent = `${Math.ceil(timeLeft / 1000)}`
  }

  return (
    <section className={styles["carousel-wrapper"]}>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        grabCursor={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {homeCarouselSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href="/ofertas">
              <figure className={styles["carousel-figure"]}>
                <Image
                  src={slide.src}
                  width={1920}
                  height={800}
                  alt={slide.alt}
                  className={styles["carousel-image"]}
                />
                <figcaption className={styles["carousel-caption"]}>
                  <h2 className={styles["carousel-article-title"]}>
                    {slide.title}
                  </h2>
                  <p className={styles["carousel-article-paragraph"]}>
                    {slide.description}
                  </p>
                  <button className={styles["carousel-article-button"]}>
                    Comprar
                  </button>
                </figcaption>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
        <div className={styles["autoplay-progress"]}>
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} />
        </div>
      </Swiper>
    </section>
  )
}
