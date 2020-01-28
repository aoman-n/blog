module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    authors: [
      { name: 'hoge', slug: 'miso' },
      { name: 'sakana', slug: 'kun' },
      { name: 'nanachi', slug: 'nnhaa' },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-plugin-react-svg',
            options: {
              rule: {
                include: `${__dirname}/src/components/Icon/svg`,
              },
            },
          },
          // `gatsby-plugin-sharp`,
          // {
          //   resolve: `gatsby-transformer-remark`,
          //   options: {
          //     plugins: [
          //       {
          //         resolve: `gatsby-remark-images`,
          //         options: {
          //           maxWidth: 590,
          //         },
          //       },
          //     ],
          //   },
          // },
        ],
      },
    },
    `gatsby-remark-headings-detail`,
    `gatsby-plugin-styled-components`,
  ],
}
