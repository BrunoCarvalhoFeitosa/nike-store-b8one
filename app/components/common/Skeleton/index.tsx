import styles from "./skeleton.module.css"

export const ShelfSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={styles["shelf-skeleton-item"]}
        >
          <div className={styles["shelf-skeleton-image"]} />
          <div className={styles["shelf-skeleton-text"]} />
          <div className={styles["shelf-skeleton-text"]} />
        </div>
      ))}
    </>
  )
}
