import React from 'react'
import styled, { css } from 'styled-components'
import Icon from './Icon'
import { Color } from '../constants'

const Contacts: React.FC = () => {
  return (
    <Wrapper>
      <TwitterLink href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon="twitter" fill="gray" width={20} />
      </TwitterLink>
      <GithubLink href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon="github" fill="gray" width={20} />
      </GithubLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`
const commonStyle = css`
  padding: 0;
  margin: 0.25rem;
  display: flex;
  align-content: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 2.7rem;
  width: 2.7rem;
  line-height: 2.7rem;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #ebebeb;
`
const TwitterLink = styled.a`
  ${commonStyle}

  > svg {
    :hover {
      transition: 0.1s;
      fill: ${Color.twitter};
    }
  }
`
const GithubLink = styled.a`
  ${commonStyle}

  > svg {
    :hover {
      transition: 0.1s;
      fill: ${Color.black};
    }
  }
`

export default Contacts
