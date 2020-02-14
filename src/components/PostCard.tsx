import React from 'react'
import Img from 'gatsby-image'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Card from './atoms/Card'
import TagList from './TagList'
import Date from './atoms/Date'
import { Sizes, Colors } from '../constants'

interface ArticleCardProps {
  date: string
  slug: string
  tags: (string | null | undefined)[]
  title: string
  expert: string
  thumbnail: any
}

const PostCard: React.FC<ArticleCardProps> = ({
  date,
  slug,
  title,
  tags = [],
  thumbnail,
  expert,
}) => {
  /*
    ポストカード全体を記事詳細へリンク、ポストカード内のタグをタグページへリンクするために
    両方のページ遷移をハンドラーを作成してイベントの伝播をストップさせている。
    SEO的にaでなんとかしたい
  */
  const handleNavgate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    navigate(`/posts/${slug}`)
  }

  return (
    <Card shadow>
      <StyledLink onClick={handleNavgate}>
        <ImageFrame>
          <Img sizes={thumbnail.childImageSharp.sizes} />
        </ImageFrame>
        <Info>
          <TagList tags={tags} />
          <Title>{title}</Title>
          <Desc>{expert}</Desc>
          <Day>
            <Date date={date} />
          </Day>
        </Info>
      </StyledLink>
    </Card>
  )
}

const StyledLink = styled.div`
  cursor: pointer;
  text-decoration: none;
`
const ImageFrame = styled.div`
  /* display: flex;
  border-radius: 2px 2px 0 0;
  background: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgb(248, 248, 248) 25%,
    rgb(212, 212, 212) 50%,
    rgb(177, 177, 177) 75%,
    rgb(73, 73, 73) 100%
  ); */
`
const Info = styled.div`
  padding: 1.3rem;
`
const Title = styled.p`
  font-size: ${Sizes.font.s}rem;
  font-weight: bold;
  color: ${Colors.font.base};
  margin: 0.8rem 0 1rem 0;
`
const Desc = styled.p`
  font-size: ${Sizes.font.ss}rem;
  color: ${Colors.font.light};
  line-height: 1.3;
  margin-bottom: 3rem;
`
const Day = styled.div`
  position: absolute;
  bottom: 0.4rem;
  right: 0.8rem;
`

export default PostCard
