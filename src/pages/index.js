import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Info from '../components/Info'
import Speakers from '../components/Speakers'
import Attendees from '../components/Attendees'

import { Title, Subtitle, Heading3 } from '../components/Typography'

const IndexPage = ({
  data: {
    allAirtable,
    site: { siteMetadata }
  }
}) => {
  const speakers = allAirtable.edges
  return (
    <Layout>
      <SEO />
      <Title>#{siteMetadata.title.split(' ').join('')}</Title>
      <Subtitle>{siteMetadata.description}</Subtitle>
      <Info />
      <Speakers speakers={speakers} />
      <Attendees />
      <Heading3>Organizers</Heading3>
      <p
        css={`
          margin-bottom: 40px;
        `}
      >
        This meetup is brought you with 💛 by{' '}
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
        ))}
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
    allAirtable(
      filter: { table: { eq: "Speakers" } }
      sort: { fields: data___Name }
    ) {
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
