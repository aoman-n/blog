import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Grid, Image, Card, Icon, Header } from 'semantic-ui-react'
import { IndexHogeQuery } from '../../types/graphql-types'
import Layout from '../layouts'

type PostProps = {
  date: string
  description: string
  title: string
  tags: string[]
  slug: string
}

const Post: React.FC<PostProps> = ({
  date,
  description,
  title,
  tags,
  slug,
}) => {
  return (
    <StyledLink to={`/posts/${slug}`}>
      <Card fluid>
        <Image
          src="https://www.minarai.io/img/minarai-for-signage-min.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>{date}</Card.Content>
      </Card>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  margin: 16px 0;
  display: block;
`

type Props = {
  data: IndexHogeQuery
}

const Component: React.FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div>
        <Header as="h1" dividing>
          Tech Blog
        </Header>
        <Grid container columns={3} doubling stackable>
          {/* <Grid.Row columns={3}> */}
          {posts.map((post, id) => (
            <Grid.Column key={id}>
              <Post {...post.node.frontmatter} />
            </Grid.Column>
          ))}
          {/* </Grid.Row> */}
        </Grid>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
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
