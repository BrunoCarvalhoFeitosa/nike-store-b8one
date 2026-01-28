"use client"
import { Filter } from "../Filter"
import { Shelf } from "../Shelf"
import styles from "./content.module.css"

export const Content = () => {
  return (
    <div className={styles["content-wrapper"]}>
      <Filter />
      <Shelf />
    </div>
  )
}
