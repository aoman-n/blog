import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { Color, Size } from '../../constants'

const Date: React.FC<{ date: string }> = ({ date }) => (
  <Comment>
    <Icon icon="clock" width={12} fill={Color.font.light} />
    <span>{date}</span>
  </Comment>
)

const Comment = styled.p`
  display: inline;

  & > svg {
    vertical-align: middle;
    margin-right: 4px;
  }

  & span {
    font-size: ${Size.font.ss}rem;
    color: ${Color.font.light};
  }
`

export default Date
