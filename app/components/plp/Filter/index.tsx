"use client"
import { useEffect } from "react"
import { useFilterStore } from "@/app/store/useFiltersStore"
import { useProductStore } from "@/app/store/useProductStore"
import clsx from "clsx"
import { FilterGroup } from "../FilterGroup"
import { Checkbox } from "../Checkbox"
import { FilterIcon } from "../../ui/icons/FilterIcon"
import { CloseIcon } from "../../ui/icons/CloseIcon"
import { CATEGORIES, COLORS, GENDERS, SIZES, TISSUES } from "@/app/constants"
import styles from "./filter.module.css"

export const Filter = () => {
  const {
    isOpen,
    colors,
    genders,
    tissues,
    sizes,
    categories,
    toggleColor,
    toggleGender,
    toggleTissue,
    toggleSize,
    toggleCategory,
    clearFilters,
    toggleOpen
  } = useFilterStore()

  const filterAndSortProducts = useProductStore(
    (state) => state.filterAndSortProducts
  )

  const hasActiveFilters =
    colors.length > 0 ||
    genders.length > 0 ||
    tissues.length > 0 ||
    sizes.length > 0 ||
    categories.length > 0

  useEffect(() => {
    filterAndSortProducts()
  }, [])

  return (
    <aside
      className={clsx(
        styles["filter-wrapper"],
        isOpen && styles["filter-active"]
      )}
    >
      <div className={styles["filter-content"]}>
        <div className={styles["filter-header"]}>
          <div className={styles["filter-title"]}>
            <h3>Filtros</h3>
          </div>
          <div className={styles["filter-controls"]}>
            <FilterIcon width="32" height="32" stroke="var(--black)" />
            <button
              type="button"
              onClick={toggleOpen}
            >
              <CloseIcon width="40" height="40" fill="var(--black)" />
            </button>
          </div>
        </div>
        {hasActiveFilters && (
          <div className={styles["filter-delete"]}>
            <button onClick={() => {
              clearFilters()
              filterAndSortProducts()
            }}>
              Limpar
            </button>
          </div>
        )}
        <FilterGroup title="Cor">
          {COLORS.map((color) => (
            <Checkbox
              key={color}
              label={color}
              checked={colors.includes(color)}
              onChange={() => {
                toggleColor(color)
                filterAndSortProducts()
              }}
            />
          ))}
        </FilterGroup>
        <FilterGroup title="Gênero">
          {GENDERS.map((gender) => (
            <Checkbox
              key={gender}
              label={gender}
              checked={genders.includes(gender)}
              onChange={() => {
                toggleGender(gender)
                filterAndSortProducts()
              }}
            />
          ))}
        </FilterGroup>
        <FilterGroup title="Tecido">
          {TISSUES.map((tissue) => (
            <Checkbox
              key={tissue}
              label={tissue}
              checked={tissues.includes(tissue)}
              onChange={() => {
                toggleTissue(tissue)
                filterAndSortProducts()
              }}
            />
          ))}
        </FilterGroup>
        <FilterGroup title="Tamanho">
          {SIZES.map((size) => (
            <Checkbox
              key={size}
              label={size}
              checked={sizes.includes(size)}
              onChange={() => {
                toggleSize(size)
                filterAndSortProducts()
              }}
            />
          ))}
        </FilterGroup>
        <FilterGroup title="Categorias">
          {CATEGORIES.map((category) => (
            <Checkbox
              key={category}
              label={category}
              checked={categories.includes(category)}
              onChange={() => {
                toggleCategory(category)
                filterAndSortProducts()
              }}
            />
          ))}
        </FilterGroup>
      </div>
    </aside>
  )
}
