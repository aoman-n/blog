import path from 'path'
import flatMap from 'lodash/flatMap'
import map from 'lodash/map'
import countBy from 'lodash/countBy'
/* graphqlはgraphql-codegen/cliで型を自動生成する時に検知させるためにインポートしている */
import { Actions, CreatePagesArgs, graphql } from 'gatsby'
import { TagsForCreatePagesQuery } from '../types/graphqlTypes'

export const createTagPages = async ({
  graphql,
  createPage,
}: {
  graphql: CreatePagesArgs['graphql']
  createPage: Actions['createPage']
}) => {
  const result = await graphql<TagsForCreatePagesQuery>(`
    query TagsForCreatePages {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  if (result.errors || !result.data) {
    throw result.errors
  }

  const tagsTemplate = path.resolve('src/templates/Tags.tsx')

  // 重複を排除したtag配列を作成
  const posts = result.data.allMarkdownRemark.edges
  const flatedTags = flatMap(posts, p =>
    p.node.frontmatter ? p.node.frontmatter.tags : [],
  )
  const tagCounts = map(countBy(flatedTags), (count, name) => ({ name, count }))

  tagCounts.forEach(tag => {
    createPage({
      path: `/tags/${tag.name}`,
      component: tagsTemplate,
      context: {
        tagname: tag.name,
        count: tag.count,
      },
    })
  })
}
