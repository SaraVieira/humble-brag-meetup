import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito|Roboto');

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${props => props.theme.colors.red};
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.white};
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  height: 100%;
}

a {
  color: inherit;
}
.main {
    margin: 0 auto;
    max-width: 700px;
}

@media (max-width: 600px) {
  .main {
    max-width: 90%;
  }
}
`
