"use client"

import { useMobileMenuStore } from "@/app/store/useMobileMenu"

interface MenuIconProps {
  width: string
  height: string
  stroke: string
}

export const MenuIcon = ({ width, height, stroke }: MenuIconProps) => {
  const { open, setOpen } = useMobileMenuStore()

  const handleMobileMenuOpen = () => {
    setOpen(!open)
  }

  return (
    <button
      type="button"
      aria-label="Menu"
      onClick={handleMobileMenuOpen}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        role="img"
        width={width}
        height={height}
        fill="none"
      >
        <path
          stroke={stroke}
          strokeWidth="1.5"
          d="M21 5.25H3M21 12H3m18 6.75H3"
        />
      </svg>
    </button>
  )
}
