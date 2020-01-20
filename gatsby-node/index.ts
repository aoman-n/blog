import { GatsbyNode } from "gatsby"
import { createAutorPages } from './createAutorPages'
import { createPostsPages } from './createPostPages'
// ______________________________________________________
//
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => Promise.all([
  await createAutorPages({ graphql, createPage }),
  await createPostsPages({ graphql, createPage }),
])
