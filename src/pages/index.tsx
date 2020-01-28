import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PostList from '../components/PostList'
import Author from '../components/Author'
import SubTitle from '../components/SubTitle'
import TagCountList from '../components/TagCountList'
import { IndexPageQuery } from '../../types/graphqlTypes'
import Layout from '../layouts'

type Props = {
  data: IndexPageQuery
}

const Component: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <section>
          <SubTitle>Latest stories</SubTitle>
          <PostList posts={data.allMarkdownRemark.edges} />
        </section>
        <section>
          <SubTitle>Tags</SubTitle>
          <TagCountList data={data.allMarkdownRemark.edges} />
        </section>
        <section>
          <SubTitle>Author</SubTitle>
          <Author />
        </section>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  letter-spacing: 0.09em;
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
            description
            title
            tags
            slug
          }
        }
      }
    }
  }
`

export default Component
