import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PostList from '../components/PostList'
import Author from '../components/Author'
import SubTitle from '../components/SubTitle'
import TagCountList from '../components/TagCountList'
import Seo from '../components/Seo'
import { IndexPageQuery } from '../../types/graphqlTypes'
import Layout from '../layouts'
import { Size } from '../constants'

type Props = {
  data: IndexPageQuery
}

const Component: React.FC<Props> = ({ data }) => (
  <Layout>
    <Seo isRoot={true} />
    <Container>
      <PostsSection>
        <SubTitle>Latest stories</SubTitle>
        <PostList posts={data.allMarkdownRemark.edges} />
      </PostsSection>
      <TagsSection>
        <SubTitle>Tags</SubTitle>
        <TagCountList data={data.allMarkdownRemark.edges} />
      </TagsSection>
      <AuthorSection>
        <SubTitle>Author</SubTitle>
        <Author />
      </AuthorSection>
    </Container>
  </Layout>
)

const PostsSection = styled.section`
  order: 1;

  @media (max-width: ${Size.breakPoint.mobile}px) {
    order: 2;
  }
`
const TagsSection = styled.section`
  order: 2;

  @media (max-width: ${Size.breakPoint.mobile}px) {
    order: 3;
  }
`
const AuthorSection = styled.section`
  order: 3;

  @media (max-width: ${Size.breakPoint.mobile}px) {
    order: 1;
  }
`
const Container = styled.div`
  letter-spacing: 0.09em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${Size.breakPoint.mobile}px) {
    padding: 0 24px;
  }
`

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 60, format: PLAIN)
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            tags
            slug
            thumbnail
          }
        }
      }
    }
  }
`

export default Component
