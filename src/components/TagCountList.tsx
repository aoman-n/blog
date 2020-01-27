import React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import flatMap from 'lodash/flatMap'
import countBy from 'lodash/countBy'
import orderBy from 'lodash/orderBy'
import { IndexPageQuery } from '../../types/graphqlTypes'
import TagCount from './TagCount'

export interface TagCountListProps {
  data: IndexPageQuery['allMarkdownRemark']['edges']
}

const TagCountList: React.FC<TagCountListProps> = ({ data }) => {
  const tags = flatMap(data, p => p.node.frontmatter?.tags)
  const tagCounts = map(countBy(tags), (value, key) => ({
    name: key,
    count: value,
  }))
  const sortedTagCounts = orderBy(tagCounts, ['name', 'count'], ['desc', 'asc'])

  return (
    <Component>
      {sortedTagCounts.map(tag => (
        <TagCount key={tag.name} name={tag.name} count={tag.count} />
      ))}
    </Component>
  )
}

const Component = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > a {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`

export default TagCountList
