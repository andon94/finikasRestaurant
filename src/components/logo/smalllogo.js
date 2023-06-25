import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./logo.module.scss"

const SmallLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "components/logo/logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  `)

  return (
    <div className={styles.small}>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="finikas taverna golden beach thassos"
      />
    </div>
  )
}

export default SmallLogo
