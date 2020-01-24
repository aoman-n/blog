import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  shadow?: boolean
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ shadow = false, children, ...props }) => {
  return (
    <Container shadow={shadow} {...props}>
      {children}
    </Container>
  )
}

const Container = styled.div<{ shadow: boolean }>`
  border-radius: 2px;
  display: inline-block;
  background-color: white;
  ${props =>
    props.shadow &&
    css`
      box-shadow: 1px 2px 4px 0 rgba(133, 131, 131, 0.3);
    `}

  &:hover {
    transition: 0.2s;
    transform: translateY(-3px);
    box-shadow: 1px 2px 4px 0 rgba(133, 131, 131, 0.6);
  }
`

export default Card
