import * as React from 'react'
import { Link } from 'gatsby'
import { AuthorPageContext } from '../../gatsby-node/createAutorPages'
import Layout from '../layouts'
// ______________________________________________________
//
type Props = {
  pageContext: AuthorPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <Layout>
    <h1>Author name is {pageContext.author.name}</h1>
    <ul>
      <li>
        <Link to="/authors/">Back to authors</Link>
      </li>
      <li>
        <Link to="/">Back to top</Link>
      </li>
    </ul>
  </Layout>
)
// ______________________________________________________
//
export default Component
