require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: el que generamos recién, requerido por la API de GitHub
        token: process.env.GATSBY_GH_KEY,

        // GraphQLquery: con esta query, traemos a nuestro backend lo que
        // queremos tener disponible para mostrar en nuestro frontend
        graphQLQuery: `query {
          user (login:"Guusy"){
          repositories(first:50,orderBy:{field:STARGAZERS, direction:DESC},privacy:PUBLIC){
            edges {
              node {
                id
                name
                description
                isPrivate
                url
                }
              }
            }
          }
        }`,

        // variables: por si necesitamos utilizar variables en nuestra query,
        // no vamos a usarlo así que podemos borrarlo
        //variables: algunObject,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
