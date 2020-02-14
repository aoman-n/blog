import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { Colors, Sizes } from '../../constants'

const Date: React.FC<{ date: string }> = ({ date }) => (
  <Comment>
    <Icon icon="clock" width={12} fill={Colors.font.light} />
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
    font-size: ${Sizes.font.ss}rem;
    color: ${Colors.font.light};
  }
`

export default Date
