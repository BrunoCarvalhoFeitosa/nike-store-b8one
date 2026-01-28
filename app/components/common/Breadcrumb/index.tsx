"use client"
import { usePathname } from "next/navigation"
import styles from "./breadcrumb.module.css"
import Link from "next/link"

export const Breadcrumb = () => {
  const pathname = usePathname()
  
  const segments = pathname
    .split("?")[0]
    .split("/")
    .filter(Boolean)

  return (
    <div className={styles["breadcrumb-wrapper"]}>
      <div className={styles["breadcrumb-nav"]}>
        <ol className={styles["breadcrumb-list"]}>
          <li className={styles["breadcrumb-list-item"]}>
            <Link href="/">
              Página inicial
            </Link>
          </li>
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/")
            const isLast = index === segments.length - 1

            return (
              <li key={href} className={styles["breadcrumb-list-item"]}>
                <span className={styles["breadcrumb-separator"]}>/</span>

                {isLast ? (
                  <span className={styles["breadcrumb-current"]}>
                    {decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link href={href}>
                    {decodeURIComponent(segment)}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
