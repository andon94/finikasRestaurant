import React from "react"
import { Link } from "gatsby"
import * as styles from "./styles/header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ulist}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
