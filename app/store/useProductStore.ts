import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useFilterStore } from "./useFiltersStore"
import { Product, SortOption } from "@/app/types"
import { productListSummary } from "@/app/constants"

interface ProductState {
  products: Product[]
  isLoading: boolean
  sortBy: SortOption
  setSortBy: (sort: SortOption) => void
  filterAndSortProducts: () => void
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: productListSummary,
      isLoading: false,
      sortBy: "recent",

      setSortBy: (sortBy) => {
        set({ sortBy })
        useProductStore.getState().filterAndSortProducts()
      },

      filterAndSortProducts: () => {
        const {
          colors,
          genders,
          tissues,
          sizes,
          categories,
        } = useFilterStore.getState()

        const { sortBy } = useProductStore.getState()

        set({ isLoading: true })

        setTimeout(() => {
          let result = productListSummary.filter((product) => {
            const colorMatch =
              colors.length === 0 ||
              colors.includes(product.color)

            const genderMatch =
              genders.length === 0 ||
              genders.includes(product.gender)

            const tissueMatch =
              tissues.length === 0 ||
              tissues.includes(product.tissue)

            const sizeMatch =
              sizes.length === 0 ||
              product.sizes.some((s) =>
                sizes.includes(s.size)
              )

            const categoryMatch =
              categories.length === 0 ||
              categories.includes(product.category)

            return (
              colorMatch &&
              genderMatch &&
              tissueMatch &&
              sizeMatch &&
              categoryMatch
            )
          })

          if (sortBy === "recent") {
            result.sort(
              (a, b) =>
                new Date(b.releaseDate).getTime() -
                new Date(a.releaseDate).getTime()
            )
          }

          if (sortBy === "price-asc") {
            result.sort((a, b) => a.listPrice - b.listPrice)
          }

          if (sortBy === "price-desc") {
            result.sort((a, b) => b.listPrice - a.listPrice)
          }

          set({
            products: result,
            isLoading: false,
          })
        }, 1800)
      },
    }),
    {
      name: "product-storage",
      partialize: (state) => ({
        sortBy: state.sortBy
      })
    }
  )
)
