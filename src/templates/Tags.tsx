import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { TagsQuery } from '../../types/graphqlTypes'
import Layout from '../layouts'
import SubTitle from '../components/SubTitle'
import PostList from '../components/PostList'
import Author from '../components/Author'

interface TagsProps {
  data: TagsQuery
  pageContext: {
    tagname: string
    count: number
  }
}

const Tags: React.FC<TagsProps> = ({
  data,
  pageContext: { tagname, count },
}) => {
  return (
    <Layout>
      <section>
        <SubTitle>
          {tagname}
          <Small>に関する記事</Small>
          {count}
          <Small>件</Small>
        </SubTitle>
        <PostList posts={data.allMarkdownRemark.edges} />
      </section>
      <section>
        <SubTitle>Author</SubTitle>
        <Author />
      </section>
    </Layout>
  )
}

const Small = styled.span`
  font-weight: normal;
  font-size: 0.8em;
  padding: 0 0.5em;
`

export const templateQuery = graphql`
  query Tags($tagname: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tagname] } } }) {
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

export default Tags
