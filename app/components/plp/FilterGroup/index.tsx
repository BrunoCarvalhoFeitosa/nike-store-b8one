"use client"
import { useState } from "react"
import { ArrowDownIcon } from "../../ui/icons/ArrowDownIcon"
import styles from "./filterGroup.module.css"

interface FilterGroupProps {
  title: string
  children: React.ReactNode
}

export const FilterGroup = ({ title, children }: FilterGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles["filter-group"]}>
      <button
        type="button"
        aria-label="Abrir menu"
        className={styles["filter-group-button"]}
        onClick={handleOpen}
      >
        <h4 className={styles["filter-group-title"]}>
          {title}
        </h4>
        <ArrowDownIcon width="24" height="24" fill="var(--black)" />
      </button>
      {isOpen && (
        <div className={styles["filter-group-content"]}>
          {children}
        </div>
      )}
    </div>
  )
}
