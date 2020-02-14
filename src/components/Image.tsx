import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image: React.FC<{ filename: string }> = ({ filename }) => {
  const data = useStaticQuery(graphql`
    query FetchAllImage {
      allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 800) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const image = data.allFile.edges.find((n: any) => {
    return n.node.relativePath.includes(filename)
  })

  if (!image) return null

  const imageSizes = image.node.childImageSharp.sizes

  return <Img sizes={imageSizes} />
}

export default Image
