"use client"

interface FilterIconProps {
  width: string
  height: string
  stroke: string
}

export const FilterIcon = ({ width, height, stroke }: FilterIconProps) => {
  return (
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
        d="M21 8.25H10m-5.25 0H3m0 7.5h10.75m5 0H21m-2.25 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM7.5 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
      />
    </svg>
  )
}
