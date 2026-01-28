export type SortOption = "recent" | "price-desc" | "price-asc"

export interface ProductImage {
  image: string
}

export interface ProductRating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  listPrice: number
  description: string
  category: string
  image: string
  images: ProductImage[]
  rating: ProductRating
  releaseDate: string
}

