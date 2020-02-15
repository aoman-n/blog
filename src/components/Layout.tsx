import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Sizes, Colors, Styles } from '../constants'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'ress'

const Component: React.FC = props => (
  <>
    <Header />
    <GlobalStyles />
    <Body>
      <Inner>{props.children}</Inner>
    </Body>
    <Footer />
  </>
)

const Body = styled.div`
  min-height: calc(100vh - ${Sizes.footer.height}px - ${Sizes.header.height}px);
  margin-bottom: 5rem;
`
const Inner = styled.div`
  margin: 0 auto;

  ${Styles.layoutWidthStyle}
`
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  @media (max-width: ${Sizes.breakPoint.tablet}px) {
    html {
      font-size: 59.4%;
    }
  }

  @media (max-width: ${Sizes.breakPoint.mobile}px) {
    html {
      font-size: 56%;
    }
  }

  body {
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Hiragino Sans", ヒラギノ角ゴシック, sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    color: ${Colors.font.base};
    background-color: ${Colors.background};
  }
`

export default Component
