import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { AuthorsQuery } from '../../types/graphql-types'
import Layout from '../layouts'
// ______________________________________________________
//
type Props = {
  data: AuthorsQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
  <Layout>
    <h1>Authors</h1>
    <ul>
      {data.site?.siteMetadata?.authors?.map(
        author =>
          author?.slug && (
            <li key={author.slug}>
              <Link to={`/authors/${author.slug}`}>{author.name}</Link>
            </li>
          )
      )}
    </ul>
    <ul>
      <li>
        <Link to="/">Back to top</Link>
      </li>
    </ul>
  </Layout>
)
// ______________________________________________________
//
export const pageQuery = graphql`
  query Authors {
    site {
      siteMetadata {
        authors {
          name
          slug
        }
      }
    }
  }
`
// ______________________________________________________
//
export default Component
