import { GatsbyNode } from 'gatsby'
import { createPostsPages } from './createPostPages'
// ______________________________________________________
//
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => Promise.all([await createPostsPages({ graphql, createPage })])
