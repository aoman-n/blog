import { Location } from '@reach/router'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Colors } from '../../constants'

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
              <StyledLink to={`${location.pathname}#${item.id}`}>
                <LinkItem isactive={activeItemIds.includes(item.id) as boolean}>
                  {item.value}
                </LinkItem>
              </StyledLink>
            </ListItem>
          ))}
        </List>
      )}
    </Location>
  )
}

interface LinkProps {
  isactive: boolean
}

const ActiveStyle = css`
  background-color: #e6e5e0;
  color: ${Colors.black};
`

const List = styled.ul`
  list-style: none;
  padding-inline-start: 12px;
`
const ListItem = styled.li``
const StyledLink = styled(Link)`
  display: inherit;
  padding-left: 2px;
  box-shadow: none;
  color: #aaa;
  margin-bottom: 1px;
  line-height: 1.4;
  :hover {
    ${ActiveStyle}
  }
`
const LinkItem = styled.span<LinkProps>`
  display: inline-block;
  width: 100%;
  padding: 4px 10px !important;

  ${props =>
    props.isactive &&
    css`
      ${ActiveStyle}
    `}
`

export default Toc
