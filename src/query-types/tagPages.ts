import { graphql } from 'gatsby'

export const postsForCreatePagesQuery = graphql`
  query TagsForCreatePages {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
