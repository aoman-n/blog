import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PostCard from '../components/PostCard'
import Author from '../components/Author'
import SubTitle from '../components/SubTitle'
import { IndexPageQuery } from '../../types/graphqlTypes'
import Layout from '../layouts'
import { Size } from '../constants'

type Props = {
  data: IndexPageQuery
}

const title = 'webpackの使い方'
const desc =
  'Reactの開発環境を構築する際 create-react-app に頼りきりで、会社のprojectの…'
const date = '2020.1.20'
const slug = 'webpack-react'
const tags = ['React', 'Typescript']

const Component: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <SubTitle title="Latest stories" />
        <Article>
          <PostCard
            title={title}
            description={desc}
            date={date}
            slug={slug}
            tags={tags}
          />
          <PostCard
            title={title}
            description={desc}
            date={date}
            slug={slug}
            tags={tags}
          />
          <PostCard
            title={title}
            description={desc}
            date={date}
            slug={slug}
            tags={tags}
          />
          <PostCard
            title={title}
            description={desc}
            date={date}
            slug={slug}
            tags={tags}
          />
          <PostCard
            title={title}
            description={desc}
            date={date}
            slug={slug}
            tags={tags}
          />
        </Article>
        {/* <AuthorProfile>
          <Author />
        </AuthorProfile> */}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  max-width: ${Size.width.index}px;
  margin: 0 auto;
  letter-spacing: 0.09em;
`
const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`

const AuthorProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
          frontmatter {
            date
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
