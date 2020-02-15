module.exports = {
  siteMetadata: {
    title: `Aonohi dot..`,
    description: `Webエンジニアのブログ。`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              // showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/components/Icon/svg`,
        },
      },
    },
    `gatsby-remark-headings-detail`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://aonohi.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aonohi dot..`,
        short_name: `Aonohi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#B3D0D7`,
        display: `minimal-ui`,
        icon: `src/images/aonohi-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-157929213-1`
      }
    },
  ],
}
