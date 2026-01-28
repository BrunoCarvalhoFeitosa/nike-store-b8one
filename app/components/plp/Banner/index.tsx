"use client"
import Image from "next/image"
import styles from "./banner.module.css"

export const Banner = () => {
  return (
    <div className={styles["banner-wrapper"]}>
      <div className={styles["banner-desktop"]}>
        <Image
          src="/images/plp/banner/banner-plp.webp"
          width={2000}
          height={340}
          alt="Banner ofertas da semana"
          className={styles["banner-image"]}
        />
      </div>
      <div className={styles["banner-mobile"]}>
        <Image
          src="/images/plp/banner/banner-plp.webp"
          width={1200}
          height={150}
          alt="Banner ofertas"
          className={styles["banner-image"]}
        />
      </div>
    </div>
  )
}
