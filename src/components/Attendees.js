import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Heading3 } from './Typography'
import shuffle from '../utils/shuffle'

const Attendees = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  img {
    border-radius: 50%;
    margin-left: -4px;
  }
`

const Button = styled.a`
  margin-top: 20px;
  display: inline-block;
  background: ${props => props.theme.colors.yellow};
  border-radius: 8px;
  font-size: 24px;
  color: ${props => props.theme.colors.red};
  text-decoration: none;
  padding: 8px 47px;
  transition: all 200ms ease;

  &:hover {
    color: ${props => props.theme.colors.yellow};
    background: #632432;
  }

  @media (max-width: 410px) {
    margin-top: 20px;
    display: inline-block;
  }
`

export default () => {
  const { allAirtable: attendees } = useStaticQuery(
    graphql`
      query {
        allAirtable(
          filter: { table: { eq: "Attendees" } }
          sort: { fields: data___Name }
        ) {
          totalCount
          edges {
            node {
              data {
                GitHub_Username
                Name
              }
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Heading3>Attendees</Heading3>
      <p>Some of the people coming to watch us struggle.</p>
      <p>There will be food and drinks. Join us in this meetup.</p>
      <Attendees>
        {shuffle(attendees.edges).map(({ node: { data: human } }) => (
          <li>
            <img
              src={`https://github.com/${human.GitHub_Username}.png`}
              alt={human.Name}
              width="24"
            />
          </li>
        ))}
      </Attendees>
      <Button
        className="sign-up"
        href="https://airtable.com/shrum2ya8oEJghz0U"
        target="_blank"
        rel="noopener noreferrer"
      >
        ATTEND
      </Button>
    </>
  )
}
