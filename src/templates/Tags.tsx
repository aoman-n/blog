import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { TagsQuery } from '../../types/graphqlTypes'
import Layout from '../layouts'
import SubTitle from '../components/SubTitle'
import PostList from '../components/PostList'
import Author from '../components/Author'
import TagCountList from '../components/TagCountList'
import { Size } from '../constants'

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
  const { filteredPosts, allPosts } = data

  return (
    <Layout>
      <Container>
        <section>
          <SubTitle>
            {tagname}
            <Small>に関する記事</Small>
            {count}
            <Small>件</Small>
          </SubTitle>
          <PostList posts={filteredPosts.edges} />
        </section>
        <section>
          <SubTitle>Tags</SubTitle>
          <TagCountList data={allPosts.edges} />
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
  @media (max-width: ${Size.breakPoint.mobile}px) {
    padding: 0 24px;
  }
`
const Small = styled.span`
  font-weight: normal;
  font-size: 0.8em;
  padding: 0 0.5em;
`

/*
  tagCountsを表示するためにallPostsも取得している
  tagCountsに必要な項目のみに絞り込んだほうがよいかも(同じindexページの修正も必要になる)
*/
export const templateQuery = graphql`
  query Tags($tagname: String!) {
    filteredPosts: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tagname] } } }
    ) {
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
            thumbnail
          }
        }
      }
    }
    allPosts: allMarkdownRemark {
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
            thumbnail
          }
        }
      }
    }
  }
`

export default Tags
