import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Header } from 'semantic-ui-react'
import Content from '../components/Content'
import ScrollSyncToc from '../components/ScrollSyncToc'
import { BlogPostTemplateContext } from '../../gatsby-node/createPostPages'
import { BlogPostQuery } from '../graphqlTypes'
import Layout from '../layouts'
import { Size } from '../constants'

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
      headingsDetail {
        id
        value
        depth
        parents {
          id
          value
          depth
        }
      }
    }
  }
`

const Component: React.FC<Props> = ({ data }) => {
  if (!data.markdownRemark || !data.markdownRemark.frontmatter) {
    return null
  }

  const { title } = data.markdownRemark.frontmatter
  const { html, headingsDetail } = data.markdownRemark

  return (
    <Layout>
      <Container>
        <Article>
          <Inner>
            <Header as="h2">{title}</Header>
            <div>
              <Content dangerouslySetInnerHTML={{ __html: html || '' }} />
            </div>
          </Inner>
        </Article>
        <ScrollNav>
          {headingsDetail && <ScrollSyncToc heading={headingsDetail} />}
        </ScrollNav>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Article = styled.article`
  background-color: #ffffff;
  width: calc(100% - 240px);

  @media screen and (max-width: ${Size.breakPoint.tablet}px) {
    width: 100%;
  }
`
const Inner = styled.div`
  padding: 32px;
  .gatsby-highlight:not {
    padding: 0;
  }
`
const ScrollNav = styled.div`
  position: sticky;
  top: 0;
  will-change: transform;
  max-height: 100vh;
  top: 12px;
  width: 240px;

  @media screen and (max-width: ${Size.breakPoint.tablet}px) {
    display: none;
  }
`

export default Component
