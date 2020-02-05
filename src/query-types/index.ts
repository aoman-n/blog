import { graphql } from 'gatsby'

export const postsForCreatePagesQuery = graphql`
  query PostsForCreatePages {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
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
