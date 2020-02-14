import React from 'react'
import styled from 'styled-components'
import Contacts from '../components/Contacts'
import { Sizes } from '../constants'
import config from '../config'

const Author: React.FC = () => {
  return (
    <Component>
      <Avatar>
        <AvatarImage
          src={config.authorAvatarUrl}
          alt="avatar image"
          width={80}
        />
      </Avatar>
      <Name>{config.authorName}</Name>
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
  font-size: ${Sizes.font.m}rem;
  margin: 16px 0 12px;
  font-weight: 700;
`
const Description = styled.div`
  font-size: ${Sizes.font.s}rem;
  text-align: center;
  margin: 1em 0 0;
`
const AvatarImage = styled.img`
  height: 100%;
  border-radius: 50%;
`

export default Author
