import React from 'react'
import { ThemeProvider } from 'styled-components'
import LayoutCSS from './layout.elements.js'

const theme = {
  fonts: {
    default: "'Nunito', sans-serif",
    sans: "'Roboto', sans-serif"
  },
  colors: {
    white: '#fcfcfc',
    pastel: '#fffae3',
    yellow: '#fef58a',
    red: '#f7567c'
  }
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <LayoutCSS />
      <div className="main">
        <main>{children}</main>
      </div>
    </>
  </ThemeProvider>
)

export default Layout
