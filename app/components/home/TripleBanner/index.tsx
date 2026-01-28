"use client"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { homeTripleBanners } from "@/app/constants"
import styles from "./tripleBanner.module.css"

export const TripleBanner = () => {
  return (
    <section className={clsx(styles["triple-banner-wrapper"], styles["hidden-scrollbar"])}>
      {homeTripleBanners.map((banner, index) => (
        <div key={index} className={styles["triple-banner-item"]}>
          <Link href={banner.href}>
            <figure className={styles["triple-banner-figure"]}>
              <picture className={styles["triple-banner-picture"]}>
                <Image
                  src={banner.src}
                  width={600}
                  height={760}
                  alt={banner.title}
                  className={styles["triple-banner-image"]}
                  priority={index === 0}
                />
              </picture>
              <figcaption className={styles["triple-banner-caption"]}>
                <button
                  type="button"
                  className={styles["triple-banner-button"]}
                >
                  {banner.title}
                </button>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </section>
  )
}
