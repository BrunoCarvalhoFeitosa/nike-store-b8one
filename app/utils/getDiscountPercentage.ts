export const getDiscountPercentage = (listPrice: number, price: number): number => {
  if (listPrice <= price || listPrice === 0) {
    return 0
  }

  const discount = ((listPrice - price) / listPrice) * 100
  return Math.round(discount)
}
