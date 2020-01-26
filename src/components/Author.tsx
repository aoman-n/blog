import React from 'react'
import styled from 'styled-components'
import Contacts from '../components/Contacts'
import { Color, Size } from '../constants'

const Author: React.FC = () => {
  return (
    <Component>
      <Avatar>
        <AvatarImage src="https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg" />
      </Avatar>
      <Name>おおひろ</Name>
      <div>
        <Contacts />
      </div>
      <Description>
        20代後半で一念発起してWebエンジニアになったひと
        <br />
        Ruby/Rails, Node/Express/Koa, Typescript/React/Redux
      </Description>
    </Component>
  )
}

const Component = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Avatar = styled.div`
  height: 80px;
  width: 80px;
`
const Name = styled.div`
  font-size: ${Size.font.m}rem;
  margin: 16px 0 12px;
  font-weight: 700;
`
const Description = styled.div`
  font-size: ${Size.font.s}rem;
  text-align: center;
  margin: 1em 0 4em;
`
const AvatarImage = styled.img`
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${Color.font.light};
`

export default Author
