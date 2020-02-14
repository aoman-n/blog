import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import TagList from '../components/TagList'
import Content from '../components/Content'
import ScrollSyncToc from '../components/ScrollSyncToc'
import Seo from '../components/Seo'
import { BlogPostTemplateContext } from '../../gatsby-node/createPostPages'
import { BlogPostQuery } from '../../types/graphqlTypes'
import Layout from '../components/Layout'
import config from '../config'
import { Sizes, Colors } from '../constants'

type Props = {
  data: BlogPostQuery
  pageContext: BlogPostTemplateContext
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  if (!data.markdownRemark || !data.markdownRemark.frontmatter) {
    return null
  }

  const { excerpt } = data.markdownRemark
  const { title, date, tags, thumbnail } = data.markdownRemark.frontmatter
  const { html, headingsDetail } = data.markdownRemark
  const { slug } = pageContext

  return (
    <Layout>
      <Seo
        isRoot={false}
        title={title}
        description={excerpt}
        thumbnail={thumbnail}
        postUrl={`${config.blogUrl}${slug}`}
      />
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
  color: ${Colors.gray};
`
const Article = styled.article`
  background-color: #ffffff;
  width: 72%;

  @media (max-width: ${Sizes.breakPoint.tablet}px) {
    width: 100%;
  }
`
const Inner = styled.div`
  padding: 2rem;

  @media (max-width: ${Sizes.breakPoint.mobile}px) {
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

  @media screen and (max-width: ${Sizes.breakPoint.tablet}px) {
    display: none;
  }
`

export const templateQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 100, format: PLAIN)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        tags
        title
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 800) {
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
