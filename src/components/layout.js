import React from "react"
import Header from "./header"
import Footer from "./footer"
import * as styles from "./styles/layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />

        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
