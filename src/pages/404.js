import React from 'react'

import { Title, Heading3 } from '../components/Typography'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>NOT FOUND</Title>
    <Heading3>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Heading3>
  </Layout>
)

export default NotFoundPage
