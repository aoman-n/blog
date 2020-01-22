import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Button } from 'semantic-ui-react'
import { IndexHogeQuery } from '../../types/graphql-types'
import Layout from '../layouts'
// ______________________________________________________
//
type Props = {
  data: IndexHogeQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      {/* <h1>Hi people</h1>
      <strong>{data.site?.siteMetadata?.title}</strong> site.
      <p>Welcome to your new </p>
      <p>Now go build something great.</p>
      <ul>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
        <li>
          <Link to="/authors/">Go to authors</Link>
        </li>
      </ul>
      <Button>ボタン</Button> */}
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
// ______________________________________________________
//
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
// ______________________________________________________
//
export default Component
