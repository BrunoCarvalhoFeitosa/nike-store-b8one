"use client"
import { useMobileMenuStore } from "@/app/store/useMobileMenu"
import clsx from "clsx"
import Link from "next/link"
import { JordanIcon } from "../../ui/icons/JordanIcon"
import { ConverseIcon } from "../../ui/icons/ConverseIcon"
import { NikeIcon } from "../../ui/icons/NikeIcon"
import { SearchIcon } from "../../ui/icons/SearchIcon"
import { WishlistIcon } from "../../ui/icons/WishlistIcon"
import { BagIcon } from "../../ui/icons/BagIcon"
import { MenuIcon } from "../../ui/icons/MenuIcon"
import styles from "./header.module.css"

export const Header = () => {
  const { open } = useMobileMenuStore()

  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles["header-row"]}>
        <div className={styles["header-column"]}>
          <ul className={styles["header-list"]}>
            <li className={styles["header-list-item"]}>
              <JordanIcon width="32" height="32" fill="var(--black)" />
            </li>
            <li className={styles["header-list-item"]}>
              <ConverseIcon width="32" height="32" fill="var(--black)" />
            </li>
          </ul>
        </div>
        <div className={styles["header-column"]}>
          <ul className={styles["header-list"]}>
            <li className={clsx(styles["header-list-item"], styles["hidden-mobile"])}>
             Encontre uma loja
            </li>
            <span className={clsx(styles["header-list-separator"], styles["hidden-mobile"])} />
            <li className={styles["header-list-item"]}>
              Ajuda
            </li>
            <span className={clsx(styles["header-list-separator"], styles["hidden-mobile"])} />
            <li className={clsx(styles["header-list-item"], styles["hidden-mobile"])}>
              Junte-se a nós
            </li>
            <span className={styles["header-list-separator"]} />
            <li className={styles["header-list-item"]}>
              Faça login
            </li>
          </ul>
        </div>
      </div>
     <div className={clsx(styles["header-row"], styles["header-row-2"])}>
        <div className={styles["header-column"]}>
          <NikeIcon width="90" height="90" fill="var(--black)" />
        </div>
        <div className={clsx(
          styles["header-column"],
          styles["header-departments"],
          open && styles["is-mobile-menu-open"]
        )}>
          <ul className={styles["header-list"]}>
            <li className={styles["header-list-item-department"]}>
              <Link href="/ofertas">
                Homem
              </Link>
            </li>
            <li className={styles["header-list-item-department"]}>
              <Link href="/ofertas">
                Mulher
              </Link>
            </li>
            <li className={styles["header-list-item-department"]}>
              <Link href="/ofertas">
                Crianças
              </Link>
            </li>
            <li className={styles["header-list-item-department"]}>
              <Link href="/ofertas">
                Jordan
              </Link>
            </li>
            <li className={styles["header-list-item-department"]}>
              <Link href="/ofertas">
                NikeSKIMS
              </Link>
            </li>
            <li className={styles["header-list-item-department"]}>
              <Link href="/ofertas">
                Esporte
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["header-column"]}>
          <ul className={styles["header-list"]}>
            <li className={styles["header-list-item"]}>
              <SearchIcon width="28" height="28" fill="var(--black)" />
            </li>
            <li className={styles["header-list-item"]}>
              <WishlistIcon width="26" height="26" stroke="var(--black)" hasLink={true} />
            </li>
            <li className={styles["header-list-item"]}>
              <BagIcon width="26" height="26" stroke="var(--black)" />
              <span className={styles["header-counter"]}>
                0
              </span>
            </li>
            <li className={clsx(styles["header-list-item"], styles["hidden-desktop"])}>
              <MenuIcon width="26" height="26" stroke="var(--black)" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}