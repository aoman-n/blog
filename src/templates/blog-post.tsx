import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Header, Grid, Segment } from 'semantic-ui-react'
import Content from '../components/Content'
import ScrollSyncToc from '../components/ScrollSyncToc'
import { BlogPostTemplateContext } from '../../gatsby-node/createPostPages'
import { BlogPostQuery } from '../../types/graphql-types'
import Layout from '../layouts'

type Props = {
  data: BlogPostQuery
  pageContext: BlogPostTemplateContext
}

export const templateQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date
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

const Component: React.FC<Props> = ({ data }) => {
  if (!data.markdownRemark || !data.markdownRemark.frontmatter) {
    return null
  }

  const { title } = data.markdownRemark.frontmatter
  const { html, headingsDetail } = data.markdownRemark

  return (
    <Layout>
      <Grid columns={2} stackable>
        <Grid.Column width={11}>
          <Segment>
            <Inner>
              <Header as="h2">{title}</Header>
              <div>
                <Content dangerouslySetInnerHTML={{ __html: html || '' }} />
              </div>
            </Inner>
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <ScrollNav>
            {/* <Segment> */}
            {headingsDetail && <ScrollSyncToc heading={headingsDetail} />}
            {/* </Segment> */}
          </ScrollNav>
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

const Inner = styled.div`
  padding: 18px;
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
`

export default Component
