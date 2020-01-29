import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Icon from '../Icon'
import { Color } from '../../constants'

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <Component to={`/tags/${tag}`}>
    <Icon icon="tag" width={8} fill="#fff" />
    <span>{tag}</span>
  </Component>
)

const Component = styled(Link)`
  padding: 2px 6px;
  background-color: ${Color.secondary};
  font-size: 1rem;
  border-radius: 2px;
  color: #fff;
  text-decoration: none;
  margin: 0 4px 4px 0;

  & > svg {
    vertical-align: middle;
    margin-right: 4px;
  }

  &:hover {
    opacity: 0.7;
  }
`

export default Tag
