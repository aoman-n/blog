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
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
  ],
}
