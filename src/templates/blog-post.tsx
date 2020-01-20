import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { BlogPostTemplateContext } from '../../gatsby-node/createPostPages'
import { BlogPostQuery } from '../../types/graphql-types'
import Layout from '../layouts'

type Props = {
  data: BlogPostQuery
  pageContext: BlogPostTemplateContext
}

export const templateQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date
        description
        slug
        tags
        title
      }
      html
    }
  }
`

const Component: React.FC<Props> = ({ data }) => {
  if (!data.markdownRemark || !data.markdownRemark.frontmatter) {
    return null
  }

  const { title } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html

  return (
    <Layout>
      <Title>{title}</Title>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html || '' }} />
      </div>
    </Layout>
  )
}
// ______________________________________________________
//

const Title = styled.h1`
  color: greenyellow;
`

export default Component
