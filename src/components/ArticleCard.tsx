import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Card from './atoms/Card'
import { Size } from '../constants'

interface ArticleCardProps {
  date: string
  description: string
  slug: string
  tags?: string[]
  title: string
  image?: string
}

const imageUrl = 'https://gyazo.com/b58814c38163a3baf8d88d830e5166da/thumb/1000'

const ArticleCard: React.FC<ArticleCardProps> = ({
  date,
  description,
  slug,
  title,
  tags,
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
            <Title>{title}</Title>
            <p>{description}</p>
          </Info>
        </Container>
      </Card>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  margin: 10px 0px 20px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  background: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out 0s;
`
const ImageFrame = styled.div`
  height: 200px;
  display: flex;
  width: 100%;
  border-radius: 2px 2px 0 0;
  background: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgb(248, 248, 248) 25%,
    rgb(212, 212, 212) 50%,
    rgb(177, 177, 177) 75%,
    rgb(73, 73, 73) 100%
  );

  @media screen and (max-width: 480px) {
    height: 150px;
  }
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  object-position: 50% 50%;
  opacity: 0.8;
  border-radius: 2px 2px 0 0;
`
const Info = styled.div`
  height: 90px;
  width: 100%;
  border-radius: 0px 0px 2px 2px;
  margin: 10px 15px;

  @media screen and (max-width: ${Size.breakPoint.mobile}px) {
    height: 100px;
  }
`
const Title = styled.p`
  line-height: 1.5;
  font-size: 1em;
  letter-spacing: 0.15rem;
  font-weight: 600;

  @media screen and (max-width: ${Size.breakPoint.mobile}px) {
    font-size: 1.1rem;
  }
`

export default ArticleCard
