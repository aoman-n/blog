import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Size, Color } from '../constants'
// import 'semantic-ui-css/semantic.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'ress'

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
    <Body>{props.children}</Body>
    <Footer />
  </div>
)

const Body = styled.div`
  min-height: calc(100vh - ${Size.footer.height}px - ${Size.header.height}px);
`
const MarkdownHighLight = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  @media screen and (max-width: ${Size.breakPoint.mobile}px) {
    html {
      font-size: 50%;
    }
  }

  body {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Hiragino Sans", ヒラギノ角ゴシック, sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    color: ${Color.font.base};
  }
`

export default Component
