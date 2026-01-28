"use client"

interface ArrowUpIconProps {
  width: string
  height: string
  fill: string
}

export const ArrowUpIcon = ({ width, height, fill }: ArrowUpIconProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 48 48"
      role="img"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h48v48H0z" stroke={fill} />
      <g>
        <polygon points="6.586,30.586 9.414,33.414 24,18.828 38.586,33.414 41.414,30.586 24,13.172" />
      </g>
    </svg>
  )
}
