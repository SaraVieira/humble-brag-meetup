import React from 'react'
import './layout.css'

const Layout = ({ children }) => (
  <div className="main">
    <main>{children}</main>
  </div>
)

export default Layout
