import { GatsbyNode } from 'gatsby'
import { createPostsPages } from './createPostPages'
import { createTagPages } from './createTagPages'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) =>
  Promise.all([
    await createPostsPages({ graphql, createPage }),
    await createTagPages({ graphql, createPage }),
  ])
