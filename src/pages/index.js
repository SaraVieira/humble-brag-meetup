import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Title, Subtitle } from './__elements'

import './styles.css'
import Info from '../components/Info'
import Speakers from '../components/Speakers'

const IndexPage = ({ data: { allAirtable } }) => {
  const speakers = allAirtable.edges
  return (
    <Layout>
      <SEO title="Humble Brag Meetup" keywords={[`meetup`, `humble`, `brag`]} />
      <Title>#HumbleBragMeetup</Title>
      <Subtitle>
        Watch humble humans struggle as they have to talk about themselves for 8
        minutes
      </Subtitle>
      <Info />
      <Speakers speakers={speakers} />
      <h3 className="speakers-title">Want to speak?</h3>
      <p
        css={`
          margin-bottom: 40;
        `}
      >
        Please DM{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/NikkitaFTW`}
        >
          @NikkitaFTW
        </a>{' '}
        or{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/NikkitaFTW`}
        >
          @carolstran
        </a>{' '}
        on Twitter
      </p>
    </Layout>
  )
}

export const Query = graphql`
  {
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
