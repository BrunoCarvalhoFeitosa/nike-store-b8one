"use client"
import Image from "next/image"
import Link from "next/link"
import { homeDoubleBanners } from "@/app/constants"
import styles from "./doubleBanner.module.css"

export const DoubleBanner = () => {
  return (
    <section className={styles["double-banner-wrapper"]}>
      {homeDoubleBanners.map((banner, index) => (
        <div key={index} className={styles["double-banner-item"]}>
          <Link href={banner.href}>
            <figure className={styles["double-banner-figure"]}>
              <picture className={styles["double-banner-picture"]}>
                <Image
                  src={banner.src}
                  width={900}
                  height={900}
                  alt={banner.alt}
                  className={styles["double-banner-image"]}
                  priority={index === 0}
                />
              </picture>
              <figcaption className={styles["double-banner-caption"]}>
                <h3 className={styles["double-banner-title"]}>
                  {banner.title}
                </h3>
                <p className={styles["double-banner-description"]}>
                  {banner.description}
                </p>
                <button
                  type="button"
                  className={styles["double-banner-button"]}
                >
                  Comprar
                </button>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </section>
  )
}
