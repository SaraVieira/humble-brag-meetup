import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import pin from "../images/pin.svg"
import clock from "../images/clock.svg"

import "./styles.css"

const IndexPage = ({ data: { allAirtable } }) => {
  const speakers = allAirtable.edges
  console.log(speakers)
  return (
    <Layout>
      <SEO title="Humble Brag Meetup" keywords={[`meetup`, `humble`, `brag`]} />
      <h1 className="title">#HumbleBragMeetup</h1>
      <h2 className="subtitle">
        Watch humble humans struggle as they have to talk about themselves for 8
        minutes
      </h2>
      <section className="info">
        <div className="location-time">
          <div>
            <img src={pin} alt="location" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Blacklane/@52.48483,13.357146,15z/data=!4m5!3m4!1s0x0:0xed8509375258b285!8m2!3d52.48483!4d13.357146"
            >
              {" "}
              Blacklane, Berlin
            </a>
          </div>
          <div>
            <img src={clock} alt="time" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Humble+Brag+Meetup&location=Blacklane&dates=20190604T170000Z%2F20190604T190000Z"
            >
              19:00, 4th June
            </a>
          </div>
        </div>
        <a
          className="sign-up"
          href="https://airtable.com/shrum2ya8oEJghz0U"
          target="_blank"
          rel="noopener noreferrer"
        >
          I AM IN
        </a>
      </section>
      <h3 className="speakers-title">What?</h3>
      <p>We gathered some people and they have three rules.</p>
      <ol>
        <li>All talks are 10 minutes.</li>
        <li>They must take at least 8 minutes to introduce themselves.</li>
        <li>They must speak about a tech topic for the last 2 minutes.</li>
      </ol>

      <h3 className="speakers-title">Speakers</h3>
      <ul className="speakers">
        {speakers.map(({ node: { data: speaker } }) => (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${speaker.Twitter_handle}`}
            >
              <img
                src={`https://github.com/${speaker.GithubUsername}.png`}
                alt={speaker.Name}
                width="150"
              />

              {speaker.Name}
            </a>
            <span className="job">{speaker.Job}</span>
          </li>
        ))}
      </ul>
      <h3 className="speakers-title">Want to speak?</h3>
      <p style={{ marginBottom: 40 }}>
        Please DM{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/NikkitaFTW`}
        >
          @NikkitaFTW
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/NikkitaFTW`}
        >
          @carolstran
        </a>{" "}
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
