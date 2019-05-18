import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ meta = [], title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: description || site.siteMetadata.description
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title
        },
        {
          property: `og:description`,
          content: description || site.siteMetadata.description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title || site.siteMetadata.title
        },
        {
          name: `twitter:description`,
          content: description || site.siteMetadata.description
        },
        {
          name: `keywords`,
          content: [`meetup`, `humble`, `brag`]
        }
      ].concat(meta)}
    />
  )
}

export default SEO
