"use client"
import { useState } from "react"
import { useProductStore } from "@/app/store/useProductStore"
import { SortOption } from "@/app/types"
import clsx from "clsx"
import { ArrowDownIcon } from "../../../ui/icons/ArrowDownIcon"
import styles from "./ordenationButton.module.css"

export const OrdenationButton = () => {
  const [open, setOpen] = useState<boolean>(false)
  const sortBy = useProductStore((state) => state.sortBy)
  const setSortBy = useProductStore((state) => state.setSortBy)

  const options: { label: string; value: SortOption }[] = [
    { label: "Lançamentos", value: "recent" },
    { label: "Mais caro", value: "price-desc" },
    { label: "Mais barato", value: "price-asc" },
  ]

  const handleSelect = (value: SortOption) => {
    setSortBy(value)
    setOpen(false)
  }

  return (
    <div className={styles["dropdown"]}>
      <button
        className={styles["dropdown-button"]}
        onClick={() => setOpen(!open)}
      >
        {options.find((o) => o.value === sortBy)?.label}
        <span className={styles.arrow}>
          {open ? (
            <span className={styles["arrow-down"]}>
              <ArrowDownIcon width="28" height="28" fill="var(--black)" />
            </span>
          ) : (
            <span className={styles["arrow-up"]}>
              <ArrowDownIcon width="28" height="28" fill="var(--black)" />
            </span>
          )}
        </span>
      </button>
      {open && (
        <ul className={styles["dropdown-list"]}>
          {options.map((option) => (
            <li
              key={option.value}
              className={clsx(
                `${styles["dropdown-item"]}`,
                sortBy === option.value ? styles.active : ""
              )}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
