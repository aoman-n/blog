import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "2020/iphone.jpg" }) {
        id
        childImageSharp {
          fluid {
            aspectRatio
            base64
            src
            sizes
            srcSet
          }
        }
      }
    }
  `)
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: "thumbnails/2020/iphone.jpg" }) {
  //       id
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  console.log(data.file.childImageSharp.fluid)

  /*
    base64: '',
    aspectRatio: '',
    src: '',
    srcSet: '',
    sizes: '',
  */

  return (
    <div>
      <h2>Image Sample</h2>
      <Img fluid={data.file.childImageSharp.fluid} alt="iphone image" />
    </div>
  )
}

export default Image
