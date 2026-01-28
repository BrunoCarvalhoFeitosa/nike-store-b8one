"use client"
import Link from "next/link"

interface NikeIconProps {
  width: string
  height: string
  fill: string
}

export const NikeIcon = ({ width, height, fill }: NikeIconProps) => {
  return (
    <Link
      aria-label="Nike"
      data-testid="link"
      href="/"
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
          d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
        />
      </svg>
    </Link>
  )
}
