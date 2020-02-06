import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { FetchAllImageForSeoQuery } from '../../types/graphqlTypes'
import config from '../config'

interface SeoProps {
  isRoot: boolean
  title?: string | null
  description?: string | null
  postUrl?: string | null
  postDate?: string | null
  thumbnailPath?: string | null
}

const Seo: React.FC<SeoProps> = ({
  isRoot,
  title,
  description,
  postUrl,
  // postDate,
  thumbnailPath,
}) => {
  const data = useStaticQuery<FetchAllImageForSeoQuery>(graphql`
    query FetchAllImageForSeo {
      images: allFile {
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
          }
        }
      }
    }
  `)

  const imageNode = data.images.edges.find(n => {
    return n.node.relativePath.includes(
      thumbnailPath || config.blogThumbnailPath,
    )
  })

  const image = config.blogUrl + imageNode?.node.childImageSharp?.sizes?.src
  const type = isRoot ? 'website' : 'article'
  const twitterCard = 'summary'
  const shareTitle =
    isRoot || !title ? config.blogTitle : `${title} - ${config.blogTitle}`

  return (
    <Helmet>
      {/* Site Title */}
      <title>{shareTitle}</title>

      {/* General tags */}
      <meta
        name="description"
        content={description || config.blogDescription}
      />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={shareTitle} />
      <meta
        property="og:description"
        content={description || config.blogDescription}
      />
      <meta property="og:url" content={config.blogUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={config.blogTitle} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={shareTitle} />
      <meta
        name="twitter:description"
        content={description || config.blogDescription}
      />
      <meta name="twitter:site" content={`@${config.twitterUsername}`} />

      {/* プラグインで追加 */}
      {/* <link rel="canonical" href={postUrl || config.blogUrl} /> */}
    </Helmet>
  )
}

export default Seo
