import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PostList from '../components/PostList'
import Author from '../components/Author'
import SubTitle from '../components/SubTitle'
import TagCount from '../components/TagCount'
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
          <SubTitle title="Latest stories" />
          <Article>
            <PostList posts={data.allMarkdownRemark.edges} />
          </Article>
        </section>
        <section>
          <SubTitle title="Tags" />
          <TagCountList data={data.allMarkdownRemark.edges} />
        </section>
        <section>
          <SubTitle title="Author" />
          <Author />
        </section>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  letter-spacing: 0.09em;
`
const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  gap: 25px;
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
