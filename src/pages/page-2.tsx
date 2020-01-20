import * as React from "react"
import { Link } from "gatsby"
import Layout from '../layouts'
// ______________________________________________________
//
const Component: React.FC = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to="/">Back to top</Link>
      </li>
    </ul>
  </Layout>
)
// ______________________________________________________
//
export default Component
