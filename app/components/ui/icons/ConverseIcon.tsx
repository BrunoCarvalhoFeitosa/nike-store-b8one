"use client"
import Link from "next/link"

interface ConverseIconProps {
  width: string
  height: string
  fill: string
}

export const ConverseIcon = ({ width, height, fill }: ConverseIconProps) => {
  return (
    <Link
      aria-label="Converse"
      data-testid="link"
      href="/ofertas"
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
          fill={fill}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.045 10.99V7.73L6.19 10.37 3.115 9.35l1.94 2.64-1.905 2.64 3.045-1.005 1.855 2.64v-3.26l3.11-1.02-3.115-.995zm12.84 1.02l-6.82 7.49H8.21l6.825-7.49L8.21 4.5h5.856l6.819 7.51z"
        />
      </svg>
    </Link>
  )
}
