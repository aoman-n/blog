import { Location } from '@reach/router'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Color } from '../../constants'

export interface OffsetItem {
  id: string
  offsetTop: number
  parents: any
  depth: number
  value: string
}

const Toc: FC<any> = ({ activeItemIds, heading }) => {
  return (
    <Location>
      {({ location }) => (
        <List>
          {heading.map((item: OffsetItem) => (
            <ListItem
              key={item.id}
              style={{ marginLeft: `${(item.depth - 2) * 12}px` }}
            >
              <StyledLink
                isActive={activeItemIds.includes(item.id)}
                to={`${location.pathname}#${item.id}`}
              >
                <LinkItem>{item.value}</LinkItem>
              </StyledLink>
            </ListItem>
          ))}
        </List>
      )}
    </Location>
  )
}

interface LinkProps {
  isActive: boolean
}

const ActiveStyle = css`
  background-color: #e6e5e0;
  color: ${Color.black};
`

const List = styled.ul`
  list-style: none;
  padding-inline-start: 12px;
`
const ListItem = styled.li``
const StyledLink = styled(Link)<LinkProps>`
  display: inherit;
  padding-left: 2px;
  box-shadow: none;
  color: #aaa;
  margin-bottom: 1px;
  padding: 4px 10px !important;
  line-height: 1.4;
  :hover {
    ${ActiveStyle}
  }

  ${props =>
    props.isActive &&
    css`
      ${ActiveStyle}
    `}
`
const LinkItem = styled.span`
  display: inline-block;
  width: 100%;
`

export default Toc
