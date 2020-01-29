import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from '../components/Image'
import Card from './atoms/Card'
import TagList from './TagList'
import Date from './atoms/Date'
import { Size, Color } from '../constants'

interface ArticleCardProps {
  date: string
  description: string
  slug: string
  tags: (string | null | undefined)[]
  title: string
  expert: string
  thumbnail: string
}

const imageUrl = 'https://cdn.stocksnap.io/img-thumbs/960w/YVC8CSWY29.jpg'

const PostCard: React.FC<ArticleCardProps> = ({
  date,
  description,
  slug,
  title,
  tags = [],
  thumbnail,
  expert,
}) => {
  console.log('thumbnail: ', thumbnail)
  return (
    <Card shadow>
      <StyledLink to={`/posts/${slug}`}>
        <ImageFrame>
          {thumbnail ? (
            <Image filename={thumbnail} />
          ) : (
            <StyledImage src={imageUrl} alt="thumbnailUrl" />
          )}
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

const StyledLink = styled(Link)`
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
const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-position: 50% 50%;
  opacity: 0.8;
  border-radius: 2px 2px 0 0;
`
const Info = styled.div`
  padding: 1.3rem;
`
const Title = styled.p`
  font-size: ${Size.font.s}rem;
  font-weight: bold;
  color: ${Color.font.base};
  margin: 0.8rem 0 1rem 0;
`
const Desc = styled.p`
  font-size: ${Size.font.ss}rem;
  color: ${Color.font.light};
  line-height: 1.3;
  margin-bottom: 3rem;
`
const Day = styled.p`
  position: absolute;
  bottom: 0.4rem;
  right: 0.8rem;
`

export default PostCard
