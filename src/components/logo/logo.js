import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./logo.module.scss"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "components/logo/logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
    }
  `)

  return (
    <div className={styles.logo}>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="finikas taverna best food on thassos"
      />
    </div>
  )
}

export default Logo
