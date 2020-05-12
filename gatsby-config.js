require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: 'Finikas Restaurant',
    author: 'andon',
    description: 'Visit Finikas Restaurant while in Golden Beach, Thassos. Try some of the best Greek food!.',
    url: "https://www.finikastaverna.com",
    image: "/static/favicon.ico"
  },
  plugins: [

    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Karla`,
          'Satisfy',
          'Annie Use Your Telescope',
          'Amatic SC'
        ],
        display: 'swap'
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/logo`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
