import { graphql } from 'gatsby'

export const postsForCreatePagesQuery = graphql`
  query PostsForCreatePages {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            description
            keyword
            keywords
            slug
            tags
            title
          }
        }
      }
    }
  }
`