import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Colors, Sizes } from '../constants'

export interface TagCountProps {
  name: string
  count: number
}

const TagCount: React.FC<TagCountProps> = ({ name, count }) => (
  <Component to={`/tags/${name}`}>
    <Name>{name}</Name>
    <Count>{count}</Count>
  </Component>
)

const Component = styled(Link)`
  font-size: ${Sizes.font.ss}rem;
  color: ${Colors.font.base};
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.7;
  }
`
const Name = styled.span`
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 4px 0 0 4px;
  background-color: ${Colors.secondary};
`
const Count = styled.span`
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.01rem;
  background-color: #ddd;
  padding: 0.8rem 0.8rem;
  border-radius: 0 4px 4px 0;
  background-color: ${Colors.primary};
`

export default TagCount
