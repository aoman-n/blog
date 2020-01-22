import React from 'react'
import { Link, graphql } from 'gatsby'
import { IndexHogeQuery } from '../../types/graphql-types'
import Layout from '../layouts'

type Props = {
  data: IndexHogeQuery
}

const Component: React.FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div>
        <div>記事一覧</div>
        <ul>
          {posts.map((post, id) => (
            <li key={id}>
              <Link to={`/posts/${post.node.frontmatter?.slug}`}>
                {post.node.frontmatter?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default Component
