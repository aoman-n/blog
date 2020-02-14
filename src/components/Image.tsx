import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

/*
  パスを渡せば画像表示してくれるコンポーネント
  参考: https://takumon.com/simple-gatsby-image-wrapper
  今は使ってない
    なぜ -> 記事のmarkdownファイルと同ディレクトリにサムネイル画像を置き、
  相対パスでインポートすることでgraphqlからchildImageSharpを取得しているため
*/
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
