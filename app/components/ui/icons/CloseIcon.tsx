"use client"

interface CloseIconProps {
  width: string
  height: string
  fill: string
}

export const CloseIcon = ({ width, height, fill }: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="img"
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      version="1.1"
    >
      <path
        d="M720.7 354.8L669 303.1l-157 157-157-157-51.7 51.7 157 157-157 157 51.7 51.7 157-157 157 157 51.7-51.7-157-157z"
        fill={fill}
      />
    </svg>
  )
}
