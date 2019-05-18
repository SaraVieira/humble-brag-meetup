import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Title, Subtitle } from './__elements'

import './styles.css'
import Info from '../components/Info'
import Speakers from '../components/Speakers'

const IndexPage = ({
  data: {
    allAirtable,
    site: { siteMetadata }
  }
}) => {
  const speakers = allAirtable.edges
  return (
    <Layout>
      <SEO keywords={[`meetup`, `humble`, `brag`]} />
      <Title>#{siteMetadata.title.split(' ').join('')}</Title>
      <Subtitle>{siteMetadata.description}</Subtitle>
      <Info />
      <Speakers speakers={speakers} />
      <h3 className="speakers-title">Want to speak?</h3>
      <p
        css={`
          margin-bottom: 40;
        `}
      >
        Please DM{' '}
        {siteMetadata.organizers.map(organizer => (
          <>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${organizer.twitter}`}
            >
              @{organizer.twitter}
            </a>{' '}
          </>
        ))}{' '}
        on Twitter
      </p>
    </Layout>
  )
}

export const Query = graphql`
  {
    site {
      siteMetadata {
        description
        title
        organizers {
          twitter
        }
      }
    }
    allAirtable(sort: { fields: data___Name }) {
      edges {
        node {
          data {
            Job
            Twitter_handle
            GithubUsername
            Name
          }
        }
      }
    }
  }
`

export default IndexPage
