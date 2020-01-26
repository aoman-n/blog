import React from 'react'
import styled from 'styled-components'
import { Size, Color } from '../constants'

const SubTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Component>
      <Title>{title}</Title>
    </Component>
  )
}

const Component = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 5rem;
  margin-bottom: 3rem;
`
const Title = styled.h2`
  font-size: ${Size.font.m}rem;
  padding-bottom: 1rem;
`

export default SubTitle
