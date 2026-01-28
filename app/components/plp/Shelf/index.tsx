"use client"
import { useState } from "react"
import { useProductStore } from "@/app/store/useProductStore"
import { Product } from "@/app/types"
import clsx from "clsx"
import Image from "next/image"
import { WishlistIcon } from "../../ui/icons/WishlistIcon"
import { ShelfSkeleton } from "../../common/Skeleton"
import { getDiscountPercentage } from "@/app/utils/getDiscountPercentage"
import styles from "./shelf.module.css"

export const Shelf = () => {
  const products = useProductStore((state) => state.products)
  const isLoading = useProductStore((state) => state.isLoading)

  return (
    <section className={styles["shelf-wrapper"]}>
      <div className={styles["shelf-grid"]}>
        {isLoading ? (
          <ShelfSkeleton />
        ) : products.length ? (
          products.map((product) => (
            <ShelfItem
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className={styles["shelf-empty"]}>
            Nenhum produto encontrado
          </p>
        )}
      </div>
    </section>
  )
}

const ShelfItem = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState(product.image)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  return (
    <figure className={styles["shelf-grid-item"]}>
      <div className={styles["shelf-image"]}>
        <Image
          src={activeImage}
          width={500}
          height={600}
          alt={product.title}
        />
        <button
          type="button"
          className={styles["shelf-wishlist-button"]}
        >
          <WishlistIcon width="25" height="25" stroke="var(--black)" />
        </button>
      </div>
      <div
        className={styles["shelf-image-list"]}
        onMouseLeave={() => {
          setActiveImage(product.image)
          setHoveredImage(null)
        }}
      >
        {product.images.map((img, index) => {
          const isHovered = hoveredImage === img.image

          return (
            <div
              key={img.image}
              tabIndex={0}
              className={clsx(
                styles["shelf-image-list-image"],
                isHovered && styles["is-active"]
              )}
              onMouseEnter={() => {
                setActiveImage(img.image)
                setHoveredImage(img.image)
              }}
              onTouchStart={() => {
                setActiveImage(img.image)
                setHoveredImage(img.image)
              }}
              onFocus={() => {
                setActiveImage(img.image)
                setHoveredImage(img.image)
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  setActiveImage(img.image)
                  setHoveredImage(img.image)
                }
              }}
            >
              <Image
                src={img.image}
                width={100}
                height={100}
                alt={`${product.title} - imagem ${index + 1}`}
              />
            </div>
          )
        })}
      </div>
      <figcaption className={styles["shelf-details"]}>
        <h3 className={styles["shelf-title"]}>
          {product.title}
        </h3>
        <p className={styles["shelf-category"]}>
          {product.category}
        </p>
        <div className={styles["shelf-discount-flag"]}>
          {getDiscountPercentage(product.price, product.listPrice)}% OFF
        </div>
        <div className={styles["shelf-price-container"]}>
          <span className={styles["shelf-list-price"]}>
            {product.listPrice}
          </span>
          <span className={styles["shelf-price"]}>
            {product.price}
          </span>
        </div>
        <div className={styles["shelf-buy-button-container"]}>
          <button
            type="button"
            aria-label="Comprar produto"
            className={styles["shelf-buy-button"]}
          >
            Comprar
          </button>
        </div>
      </figcaption>
    </figure>
  )
}
