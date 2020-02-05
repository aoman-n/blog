import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Icon from '../Icon'
import { Color } from '../../constants'

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  const handleNavgate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    navigate(`/tags/${tag}`)
  }

  return (
    <Component onClick={handleNavgate}>
      <Icon icon="tag" width={8} fill="#fff" />
      <span>{tag}</span>
    </Component>
  )
}

const Component = styled.div`
  cursor: pointer;
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
