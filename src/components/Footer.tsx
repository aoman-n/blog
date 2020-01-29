import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Size, Color } from '../constants'

const FooterComponent: React.FC = () => (
  <Footer>
    <SiteTitle to="/">Aonohi dot.</SiteTitle>
    <Copyrigth>Copyright © 2020. あおひろ</Copyrigth>
  </Footer>
)

const Footer = styled.footer`
  height: ${Size.footer.height}px;
  border-top: solid 1px ${Color.lightGray};
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Color.primary};
`
const SiteTitle = styled(Link)`
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  font-size: 1.1em;
  letter-spacing: 0.1em;
  text-decoration: underline;
  font-size: ${Size.font.s}rem;
  text-shadow: 0 1px 3px rgba(120, 180, 180, 0.5);

  &:hover {
    opacity: 0.8;
  }
`
const Copyrigth = styled.div`
  color: ${Color.gray};
  font-size: ${Size.font.ss}rem;
`

export default FooterComponent
