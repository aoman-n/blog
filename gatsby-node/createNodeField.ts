import { Actions, CreateNodeArgs } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

export const createSlug = ({
  node,
  createNodeField,
  getNode,
}: {
  node: CreateNodeArgs['node']
  createNodeField: Actions['createNodeField']
  getNode: CreateNodeArgs['getNode']
}) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
