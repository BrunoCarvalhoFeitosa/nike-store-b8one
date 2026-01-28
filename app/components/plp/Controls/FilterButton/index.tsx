"use client"
import { useFilterStore } from "@/app/store/useFiltersStore"
import { FilterIcon } from "@/app/components/ui/icons/FilterIcon"
import styles from "./filterButton.module.css"

export const FilterButton = () => {
  const toggle = useFilterStore((state) => state.toggleOpen)
  const isOpen = useFilterStore((state) => state.isOpen)

  return (
    <div className={styles["filter-wrapper"]}>
      <button
        className={styles["filter-button"]}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="filter-panel"
      >
        <span>
          {isOpen ? "Esconder filtros" : "Adicionar filtros"}
        </span>
        <FilterIcon width="28" height="28" stroke="var(--black)" />
      </button>
    </div>
  )
}
