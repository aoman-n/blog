import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import ArticleCard from '../components/ArticleCard'
import Author from '../components/Author'
import { IndexPageQuery } from '../../types/graphqlTypes'
import Layout from '../layouts'

type Props = {
  data: IndexPageQuery
}

const Component: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <AuthorProfile>
          <Author />
        </AuthorProfile>
        <Articles>
          <Grid container columns={3} doubling stackable>
            {data.allMarkdownRemark.edges.map(({ node }, id) => {
              const frontmatter = node.frontmatter
              return (
                <Grid.Column key={id}>
                  <ArticleCard
                    key={node.id}
                    title={frontmatter?.title || ''}
                    date={frontmatter?.date || ''}
                    slug={frontmatter?.slug || ''}
                    description={frontmatter?.description || ''}
                    // tags={frontmatter?.tags || ([] as string[])}
                  />
                </Grid.Column>
              )
            })}
          </Grid>
        </Articles>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  letter-spacing: 0.09em;
`
const AuthorProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Articles = styled.div`
  margin: 0 auto;
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
