const config = require('./src/data/config');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Matt Roth's Portfolio",
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-remove-fingerprints',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/assets/projects/`,
      },
      __key: 'projects',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'Matt Roth',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.logo,
      },
    },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       runtimeCaching: [
    //         {
    //           urlPattern: /(\.js$|\.css$|static\/)/,
    //           handler: `CacheFirst`,
    //         },
    //         {
    //           urlPattern: /^https?:.*\/page-data\/.*\/(page-data|app-data)\.json$/,
    //           handler: `NetworkFirst`,
    //           options: {
    //             networkTimeoutSeconds: 1,
    //           },
    //         },
    //         {
    //           urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
    //           handler: `StaleWhileRevalidate`,
    //         },
    //         {
    //           urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
    //           handler: `StaleWhileRevalidate`,
    //         },
    //         {
    //           urlPattern: /\/$/,
    //           handler: `NetworkFirst`,
    //           options: {
    //             networkTimeoutSeconds: 1,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
