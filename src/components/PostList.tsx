import React from 'react'
import PostCard from '../components/PostCard'
import { IndexPageQuery } from '../../types/graphqlTypes'

type Posts = IndexPageQuery['allMarkdownRemark']['edges']

const PostList: React.FC<{ posts: Posts }> = ({ posts }) => (
  <>
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
  </>
)

export default PostList
