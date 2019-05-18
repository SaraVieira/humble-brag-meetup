import React from 'react'
import styled from 'styled-components'

export const Title = styled.h3`
  margin-top: 60px;
  font-size: 42px;
  color: ${props => props.theme.colors.pastel};
  margin-bottom: 40px;
`

const Speakers = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  margin: 0;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colors.white};

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
  }

  img {
    border-radius: 4px;
    border: 3px solid ${props => props.theme.colors.white};
    margin: 0;

    :hover {
      box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.13);
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);

    img {
      display: block;
    }
  }
`

const Job = styled.span`
  display: block;
  font-size: 14px;
  font-weight: normal;
`

export default ({ speakers }) => (
  <>
    <Title>What?</Title>
    <p>We gathered some people and they have three rules.</p>
    <ol>
      <li>All talks are 10 minutes.</li>
      <li>They must take at least 8 minutes to introduce themselves.</li>
      <li>They must speak about a tech topic for the last 2 minutes.</li>
    </ol>

    <Title>Speakers</Title>
    <Speakers>
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
          <Job>{speaker.Job}</Job>
        </li>
      ))}
    </Speakers>
  </>
)
