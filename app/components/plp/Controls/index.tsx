"use client"
import { FilterButton } from "./FilterButton"
import { OrdenationButton } from "./Ordenation"
import styles from "./controls.module.css"

export const Controls = () => {
  return (
    <div className={styles["controls-wrapper"]}>
      <FilterButton />
      <OrdenationButton />
    </div>
  )
}
