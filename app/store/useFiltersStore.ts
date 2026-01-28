import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface FiltersState {
  isOpen: boolean
  colors: string[]
  genders: string[]
  tissues: string[]
  sizes: string[]
  categories: string[]
  toggleOpen: () => void
  toggleColor: (color: string) => void
  toggleGender: (gender: string) => void
  toggleTissue: (tissue: string) => void
  toggleSize: (size: string) => void
  toggleCategory: (category: string) => void
  clearFilters: () => void
}

export const useFilterStore = create<FiltersState>()(
  persist(
    (set) => ({
      isOpen: false,
      colors: [],
      genders: [],
      tissues: [],
      sizes: [],
      categories: [],

      toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),

      toggleColor: (color) =>
        set((state) => ({
          colors: state.colors.includes(color)
            ? state.colors.filter((c) => c !== color)
            : [...state.colors, color],
        })),

      toggleGender: (gender) =>
        set((state) => ({
          genders: state.genders.includes(gender)
            ? state.genders.filter((g) => g !== gender)
            : [...state.genders, gender],
        })),

      toggleTissue: (tissue) =>
        set((state) => ({
          tissues: state.tissues.includes(tissue)
            ? state.tissues.filter((t) => t !== tissue)
            : [...state.tissues, tissue],
        })),

      toggleSize: (size) =>
        set((state) => ({
          sizes: state.sizes.includes(size)
            ? state.sizes.filter((s) => s !== size)
            : [...state.sizes, size],
        })),

      toggleCategory: (category) =>
        set((state) => ({
          categories: state.categories.includes(category)
            ? state.categories.filter((c) => c !== category)
            : [...state.categories, category],
        })),

      clearFilters: () =>
        set({
          colors: [],
          genders: [],
          tissues: [],
          sizes: [],
          categories: [],
        }),
    }),
    {
      name: "filters-storage"
    }
  )
)
