import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Content from '../components/Content'
import ScrollSyncToc from '../components/ScrollSyncToc'
import { BlogPostTemplateContext } from '../../gatsby-node/createPostPages'
import { BlogPostQuery } from '../../types/graphqlTypes'
import Layout from '../layouts'
import { Size, Color } from '../constants'

type Props = {
  data: BlogPostQuery
  pageContext: BlogPostTemplateContext
}

const BlogPost: React.FC<Props> = ({ data }) => {
  if (!data.markdownRemark || !data.markdownRemark.frontmatter) {
    return null
  }

  const { title, date } = data.markdownRemark.frontmatter
  const { html, headingsDetail } = data.markdownRemark

  return (
    <Layout>
      <Container>
        <Article>
          <Inner>
            <Date>{date}</Date>
            <StyledHeader as="h1">{title}</StyledHeader>
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
const StyledHeader = styled.div`
  margin-top: 0;
`
const Date = styled.p`
  margin-bottom: 4px;
  color: ${Color.gray};
`
const Article = styled.article`
  background-color: #ffffff;
  width: calc(100% - 240px);

  @media screen and (max-width: ${Size.breakPoint.tablet}px) {
    width: 100%;
  }
`
const Inner = styled.div`
  padding: 40px;

  @media screen and (max-width: ${Size.breakPoint.mobile}px) {
    padding: 24px;
  }

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

export const templateQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date(formatString: "YYYY.MM.DD")
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

export default BlogPost
