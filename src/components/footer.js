import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={styles.footer}>
      <p>
        Created by {data.site.siteMetadata.author} &#169; Copyright {year}
      </p>
    </footer>
  )
}

export default Footer
