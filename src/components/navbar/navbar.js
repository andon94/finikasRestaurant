import React from "react"
import * as styles from "./navbar.module.scss"
import Food from "./navbar-components/food"
import Drink from "./navbar-components/drink"

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Food />
      <Drink />
    </div>
  )
}

export default Navbar
