import React from 'react'
import styled from 'styled-components'
import pin from '../images/pin.svg'
import clock from '../images/clock.svg'

const Info = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 410px) {
    display: block;
  }
`

const LocationAndTime = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: 0;
    margin-right: 10px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`

const Button = styled.a`
  background: #fef58a;
  border-radius: 8px;
  font-size: 24px;
  color: #f7567c;
  text-decoration: none;
  padding: 8px 47px;
  transition: all 200ms ease;

  &:hover {
    color: #fef58a;
    background: #632432;
  }

  @media (max-width: 410px) {
    margin-top: 20px;
    display: inline-block;
  }
`
export default () => (
  <Info>
    <LocationAndTime>
      <div>
        <img src={pin} alt="location" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/Blacklane/@52.48483,13.357146,15z/data=!4m5!3m4!1s0x0:0xed8509375258b285!8m2!3d52.48483!4d13.357146"
        >
          {' '}
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
          19:00, 4th June (Add to Calendar)
        </a>
      </div>
    </LocationAndTime>
    <Button
      className="sign-up"
      href="https://airtable.com/shrum2ya8oEJghz0U"
      target="_blank"
      rel="noopener noreferrer"
    >
      ATTEND
    </Button>
  </Info>
)
