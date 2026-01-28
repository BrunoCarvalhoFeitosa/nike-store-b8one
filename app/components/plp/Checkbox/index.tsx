"use client"
import styles from "./checkbox.module.css"

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className={styles["filter-checkbox-wrapper"]}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles["filter-checkbox-input"]}
      />
      <span className="filter-checkbox-text">
        {label}
      </span>
    </label>
  )
}
