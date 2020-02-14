import { GatsbyNode } from 'gatsby'
import { createPostsPages } from './createPostPages'
import { createTagPages } from './createTagPages'
import { createSlug } from './createNodeField'

export const createNode: GatsbyNode['onCreateNode'] = async ({
  node,
  actions: { createNodeField },
  getNode,
}) => Promise.all([await createSlug({ node, createNodeField, getNode })])

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) =>
  Promise.all([
    await createPostsPages({ graphql, createPage }),
    await createTagPages({ graphql, createPage }),
  ])
