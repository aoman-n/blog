import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Sizes, Colors, Styles } from '../constants'
import config from '../config'

const HeaderComponent: React.FC = () => (
  <Container>
    <LogoArea>
      <StyledLink to="/">
        <Title>{config.blogTitle}</Title>
      </StyledLink>
      <Info>{config.blogSubTitle}</Info>
    </LogoArea>
  </Container>
)

const Container = styled.div`
  height: ${Sizes.header.height}px;
  background-color: ${Colors.primary};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
`
const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin: 0 auto;

  ${Styles.layoutWidthStyle}

  @media (max-width: ${Sizes.breakPoint.mobile}px) {
    align-items: center;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`
const Title = styled.h1`
  font-size: ${Sizes.font.ll}rem;
  color: #fff;
  letter-spacing: 2.66px;
  text-shadow: 0 1px 3px rgba(130, 200, 200, 0.5);
`
const Info = styled.p`
  font-size: ${Sizes.font.ss}rem;
  color: #fff;
`

export default HeaderComponent
