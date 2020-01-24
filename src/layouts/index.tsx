import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
      <BodyInner>{props.children}</BodyInner>
    </Body>
    <Footer />
  </div>
)

const Body = styled.div`
  min-height: calc(100vh - ${Size.footer.height}px - ${Size.header.height}px);
`
const BodyInner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 40px 10px;
  box-sizing: border-box;

  @media screen and (max-width: ${Size.breakPoint.tablet}px) {
    max-width: 680px;
  }
  @media screen and (max-width: ${Size.breakPoint.mobile}px) {
    padding-right: 0;
    padding-left: 0;
  }
`
const MarkdownHighLight = createGlobalStyle`
  body {
    background-color: ${Color.background};
  }
`

export default Component
