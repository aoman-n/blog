import React from 'react'
import styled, { css } from 'styled-components'
import Icon from './Icon'
import { Colors } from '../constants'
import config from '../config'

const Contacts: React.FC = () => {
  return (
    <Wrapper>
      <TwitterLink
        href={config.twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="twitter" fill="gray" width={20} />
      </TwitterLink>
      <GithubLink
        href={config.gitHubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
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
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  line-height: 2.7rem;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #ebebeb;
`
const TwitterLink = styled.a`
  ${commonStyle}
  margin-right: 12px;

  &:hover {
    svg {
      transition: 0.1s;
      fill: ${Colors.twitter};
    }
  }
`
const GithubLink = styled.a`
  ${commonStyle}

  &:hover {
    > svg {
      transition: 0.1s;
      fill: ${Colors.black};
    }
  }
`

export default Contacts
