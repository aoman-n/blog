import React from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'
import { IndexPageQuery } from '../../types/graphqlTypes'

type Posts = IndexPageQuery['allMarkdownRemark']['edges']

const PostList: React.FC<{ posts: Posts }> = ({ posts }) => (
  <Component postLength={posts.length}>
    {posts.map(post => (
      <PostCard
        key={post.node.id}
        title={post.node.frontmatter?.title || ''}
        date={post.node.frontmatter?.date || ''}
        slug={post.node.frontmatter?.slug || ''}
        tags={post.node.frontmatter?.tags || []}
        expert={post.node.excerpt || ''}
        thumbnail={post.node.frontmatter?.thumbnail || ''}
      />
    ))}
  </Component>
)

const Component = styled.article<{ postLength: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`

export default PostList
