module.exports = {
  siteMetadata: {
    title: `Humble Brag Meetup`,
    description: `Watch humble humans struggle as they have to talk about themselves for 8 minutes`,
    author: `Carolyn Stransky && Sara Vieira`,
    organizers: [
      {
        name: 'Sara Vieira',
        twitter: 'NikkitaFTW'
      },
      {
        name: 'Carolyn Stransky',
        twitter: 'carolstran'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f7567c`,
        theme_color: `#f7567c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyJugfwdJzOyL7Aa`, // may instead specify via env, see below
        tables: [
          {
            baseId: `appfpCQ68PP8qjDqu`,
            tableName: `Speakers`
          },
          {
            baseId: `appfpCQ68PP8qjDqu`,
            tableName: `Atendees`
          }
        ]
      }
    }
  ]
}
