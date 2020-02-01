import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import TagList from '../components/TagList'
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

  const { title, date, tags } = data.markdownRemark.frontmatter
  const { html, headingsDetail } = data.markdownRemark

  return (
    <Layout>
      <Container>
        <Article>
          <Inner>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <TagList tags={tags || []} />
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
  justify-content: space-between;
  margin: 5rem 0;
`
const Title = styled.h2`
  margin-bottom: 1rem;
`
const Date = styled.p`
  margin-bottom: 0.1rem;
  color: ${Color.gray};
`
const Article = styled.article`
  background-color: #ffffff;
  width: 72%;

  @media (max-width: ${Size.breakPoint.tablet}px) {
    width: 100%;
  }
`
const Inner = styled.div`
  padding: 2rem;

  @media (max-width: ${Size.breakPoint.mobile}px) {
    padding: 1.3rem;
  }

  .gatsby-highlight:not {
    padding: 0;
  }
`
const ScrollNav = styled.aside`
  position: sticky;
  top: 0;
  will-change: transform;
  max-height: 100vh;
  top: 12px;
  width: 28%;
  overflow: auto;

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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
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