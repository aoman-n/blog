import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/header'
import 'semantic-ui-css/semantic.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
// ______________________________________________________
//
const Component: React.FC = props => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <MarkdownHighLight />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {props.children}
    </div>
  </div>
)
// ______________________________________________________
//

const MarkdownHighLight = createGlobalStyle`
  .gatsby-code-title {
    background: #999
    color: #eee
    margin: 24px 0px -24px
    padding: 6px 12px
    font-size: 0.8em
    line-height: 1
    font-weight: bold
    display: table
    border-radius: 4px 4px 0 0
  }
`

export default Component
