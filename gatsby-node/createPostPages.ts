import path from 'path'
/* graphqlはgraphql-codegen/cliで型を自動生成する時に検知させるためにインポートしている */
import { Actions, CreatePagesArgs, graphql } from 'gatsby'
import { PostsForCreatePagesQuery } from '../types/graphqlTypes'

export type BlogPostTemplateContext = {
  slug: string
  previous: PostsForCreatePagesQuery | null
  next: PostsForCreatePagesQuery | null
}

export const createPostsPages = async ({
  graphql,
  createPage,
}: {
  graphql: CreatePagesArgs['graphql']
  createPage: Actions['createPage']
}) => {
  const result = await graphql<PostsForCreatePagesQuery>(`
    query PostsForCreatePages {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              tags
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors || !result.data) {
    throw result.errors
  }
  const posts = result.data.allMarkdownRemark.edges
  const blogPost = path.resolve('src/templates/Post.tsx')

  posts.forEach((post, i) => {
    if (!post.node.fields || !post.node.fields.slug) {
      throw new Error(`undefined slug.`)
    }

    const previous = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node
    console.log('作成したページのパス: ', `posts/${post.node.fields.slug}`)
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}
