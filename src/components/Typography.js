import styled from 'styled-components'

export const Title = styled.h1`
  transform: rotate(-3deg);
  font-size: 62.6px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-top: 80px;
  margin-bottom: 70px;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`
export const Subtitle = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  max-width: 700px;
  color: ${props => props.theme.colors.white};
  display: block;
  margin: auto;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export const Heading3 = styled.h3`
  margin-top: 60px;
  font-size: 42px;
  color: ${props => props.theme.colors.pastel};
  margin-bottom: 40px;
`
