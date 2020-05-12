import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import logoStyles from './logo.module.scss'

const SmallLogo = () => {
    const data = useStaticQuery(graphql`
        query {
            file (relativePath: { eq: "components/logo/logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
            }
            }
        }
    `)

    return (
        <div className={logoStyles.small}>
            <Img fluid={data.file.childImageSharp.fluid} alt='finikas taverna golden beach thassos' />
        </div>
    )
}

export default SmallLogo