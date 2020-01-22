import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { Size, Color } from '../constants'
import 'semantic-ui-css/semantic.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

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
    <Body>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1120,
          paddingTop: 0,
        }}
      >
        {props.children}
      </div>
    </Body>
  </div>
)

const Body = styled.div`
  /* height: calc(100vh - ${Size.header.height}px); */
  /* background-color: #f6f8fa; */
`
const MarkdownHighLight = createGlobalStyle`
  body {
    background-color: ${Color.background};
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em; /* 3 */
  }

  /* .gatsby-code-title {
    background: #999;
    color: #eee;
    margin: 24px 0px -24px;
    padding: 6px 12px;
    font-size: 0.8em;
    line-height: 1;
    font-weight: bold;
    display: table;
    border-radius: 4px 4px 0 0;
  } */

  .gatsby-code-title {
    background: #f3e3b9;
    color: #b38383;
    margin-bottom: -0.65em;
    padding: 0.7rem 1.05rem;
    font-size: 0.8em;
    line-height: 0.2;
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
    display: table;
  }
`

export default Component
