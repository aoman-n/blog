import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Card from './atoms/Card'
import TagList from './TagList'
import Date from './atoms/Date'
import { Size, Color } from '../constants'

interface ArticleCardProps {
  date: string
  description: string
  slug: string
  tags?: string[]
  title: string
  image?: string
}

const imageUrl = 'https://cdn.stocksnap.io/img-thumbs/960w/YVC8CSWY29.jpg'

const PostCard: React.FC<ArticleCardProps> = ({
  date,
  description,
  slug,
  title,
  tags = [],
  image = imageUrl,
}) => {
  return (
    <StyledLink to={`/posts/${slug}`}>
      <Card shadow>
        <Container>
          <ImageFrame>
            <Image src={image} />
          </ImageFrame>
          <Info>
            <TagList tags={tags} />
            <Title>{title}</Title>
            <Desc>{description}</Desc>
            <Day>
              <Date date={date} />
            </Day>
          </Info>
        </Container>
      </Card>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  cursor: pointer;
`
const Container = styled.div``
const ImageFrame = styled.div`
  display: flex;
  border-radius: 2px 2px 0 0;
  background: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgb(248, 248, 248) 25%,
    rgb(212, 212, 212) 50%,
    rgb(177, 177, 177) 75%,
    rgb(73, 73, 73) 100%
  );
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-position: 50% 50%;
  opacity: 0.8;
  border-radius: 2px 2px 0 0;
`
const Info = styled.div`
  padding: 1rem;
`
const Title = styled.p`
  font-size: ${Size.font.l}rem;
  font-weight: bold;
  color: ${Color.font.base};
  margin-top: 0.8rem;
`
const Desc = styled.p`
  font-size: ${Size.font.s}rem;
  color: ${Color.font.light};
  line-height: 1.3;
  margin-bottom: 1.6rem;
`
const Day = styled.p`
  text-align: right;
`

export default PostCard
