import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Size, Color } from '../constants'

const HeaderComponent: React.FC = () => (
  <Container>
    <LogoArea to="/">Aonohi dot.</LogoArea>
  </Container>
)

const Container = styled.div`
  height: ${Size.header.height}px;
  border-bottom: solid 1px ${Color.lightGray};
  background-color: #ffffff;
  padding: 0 20px;
  display: flex;
`
const LogoArea = styled(Link)`
  color: ${Color.black};
  font-size: 24px;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
`

export default HeaderComponent
