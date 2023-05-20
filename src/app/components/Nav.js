import React from 'react'
import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles}>
        <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/">
                    Home
                </Link>
            </li>

            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/contact">
                    Contact Us
                </Link>
            </li>

            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/about">
                    About
                </Link>
            </li>

            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/movie">
                    Movie
                </Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Nav