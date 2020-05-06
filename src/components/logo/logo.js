
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import logoStyles from "./logo.module.scss"


const Logo = () =>{

    const data = useStaticQuery(graphql`
        query {
            file (relativePath: { eq: "components/logo/logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 550) {
                        ...GatsbyImageSharpFluid
                    }
            }
            }
        }
    `)

    return (
        <div className={logoStyles.logo}>
            <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
    )
}

export default Logo

