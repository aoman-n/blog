import React from 'react'
import styled, { css } from 'styled-components'
import PostCard from '../components/PostCard'
import { IndexPageQuery } from '../../types/graphqlTypes'
import { Size } from '../constants'

type Posts = IndexPageQuery['allMarkdownRemark']['edges']

const PostList: React.FC<{ posts: Posts }> = ({ posts }) => (
  <Component postLength={posts.length}>
    {posts.map(post => (
      <PostCard
        key={post.node.id}
        title={post.node.frontmatter?.title || ''}
        date={post.node.frontmatter?.date || ''}
        slug={post.node.frontmatter?.slug || ''}
        description={post.node.frontmatter?.description || ''}
        tags={post.node.frontmatter?.tags || []}
        expert={post.node.excerpt || ''}
      />
    ))}
  </Component>
)

const Component = styled.article<{ postLength: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;

  @media (max-width: ${Size.breakPoint.tablet}px) {
    gap: 10px;
  }

  /*
    記事が3つ未満の時にPC画面ではポストカードが広がりすぎて見にくいため、
    max値を設定している
  */
  ${props =>
    props.postLength < 3 &&
    css`
      @media (min-width: ${Size.breakPoint.tablet}px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
      }
    `}
`

export default PostList
