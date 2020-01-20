import path from 'path'
import { Actions, CreatePagesArgs } from 'gatsby'
import { PostsForCreatePagesQuery } from '../types/graphql-types'

// type Result = {
//   data: PostsForCreatePagesQuery
// }

export type BlogPostTemplateContext = {
  slug: string
  previous: PostsForCreatePagesQuery | null
  next: PostsForCreatePagesQuery | null
}

const query = `
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            description
            keyword
            keywords
            slug
            tags
            title
          }
        }
      }
    }
  }
`

export const createPostsPages = async ({ graphql, createPage }: {
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage']
}) => {
  const result = await graphql<PostsForCreatePagesQuery>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const posts = result.data.allMarkdownRemark.edges
  const blogPost = path.resolve('src/templates/blog-post.tsx')

  posts.forEach((post, i) => {
    if (!post.node.frontmatter || !post.node.frontmatter.slug) {
      throw new Error(`undefined slug. frontmatter: ${post.node.frontmatter}`)
    }

    const previous = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node
    console.log('作成したページのパス: ', `posts/${post.node.frontmatter.slug}`)
    createPage({
      path: `posts/${post.node.frontmatter.slug}`,
      component: blogPost,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      }
    })
  })
}