import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Grid, Image, Card, Icon, Header } from 'semantic-ui-react'
import ArticleCard from '../components/ArticleCard'
// import { IndexHogeQuery } from '../../types/graphql-types'
import { IndexPageQuery } from '../graphqlTypes'
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
  data: IndexPageQuery
}

const Component: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <AuthorProfile>
          <Avatar>
            <AvatarImage src="https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg" />
          </Avatar>
        </AuthorProfile>
        {/* <Header as="h3" dividing>
          記事一覧
        </Header> */}
        <Articles>
          <Grid container columns={3} doubling stackable>
            {/* {posts.map((post, id) => {
            return ( */}

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
            {/* )
          })} */}
          </Grid>
        </Articles>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
const AuthorProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Avatar = styled.div`
  height: 80px;
  width: 80px;
`
const AvatarImage = styled.img`
  height: 100%;
  border-radius: 50%;
  border: 1px solid gray;
`
const Articles = styled.div`
  /* padding: 0 20px; */

  @media screen and (max-width: 480px) {
    /* padding: 0px 8px; */
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
