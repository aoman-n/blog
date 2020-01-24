import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Size, Color } from '../constants'

const FooterComponent: React.FC = () => (
  <Footer>
    <SiteTitle to="#">Aonohi dot.</SiteTitle>
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
`
const SiteTitle = styled(Link)`
  cursor: pointer;
  color: ${Color.darkGray};
  font-size: 1.1em;
  letter-spacing: 0.1em;
  text-decoration: underline;
`
const Copyrigth = styled.div`
  color: ${Color.gray};
  font-size: 0.9em;
`

export default FooterComponent
