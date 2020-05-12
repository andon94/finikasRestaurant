// import React from 'react'
// import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from 'gatsby'

// const Head = ({ title, description, url, img }) => {
//     const data = useStaticQuery(graphql`
//         query {
//             site {
//                 siteMetadata {
//                     title
//                     description
//                     url
//                     image
//                 }
//             }
//         }
//     `)
//     return (
//         <Helmet
//             title={`${title} | ${data.site.siteMetadata.title}`}
//         />
//     )
// }

// export default Head


import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Head = ({ title, description, url, img, keywords }) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaUrl = url || data.site.siteMetadata.url
                const metaImg = img || data.site.siteMetadata.img
                const metaKeywords = keywords || ["golden beach restaurant", "best restaurant thassos", "finikas restaurant", "finikas taverna", "thassos taverna", "golden beach taverna", "fresh seafood"]
                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: 'description',
                                content: metaDescription,
                            },
                            {
                                name: 'title',
                                content: metaTitle,
                            },
                            {
                                name: 'url',
                                content: metaUrl,
                            },
                            {
                                name: 'img',
                                content: metaImg,
                            },
                            {
                                name: 'keywords',
                                content: metaKeywords,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: 'keywords',
                                content: metaKeywords.join(`, `),
                            } : []
                        )}
                    />)
            }}
        />
    )
}

const detailsQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                url
                image
            }
        }
    }
`

export default Head