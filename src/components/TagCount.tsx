import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Color, Size } from '../constants'

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
  font-size: ${Size.font.ss}rem;
  color: ${Color.font.base};
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline solid ${Color.secondary};
  }
`
const Name = styled.span`
  background-color: #eee;
  padding: 0.8rem 1.2rem;
  border-radius: 4px 0 0 4px;
  background-color: whitesmoke;
`
const Count = styled.span`
  font-weight: bold;
  letter-spacing: 0.01rem;
  background-color: #ddd;
  padding: 0.8rem 0.8rem;
  border-radius: 0 4px 4px 0;
  background-color: #e7e7e7;
`

export default TagCount
