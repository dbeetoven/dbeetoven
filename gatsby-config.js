const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: 'Beetoven D.',
    description:
      'Beetoven Desir is a software developer who specializes in building web aplication',
    siteUrl: 'https://dbeetoven.com',
    image: '/banner.png',
    twitterUsername: '@dbeetoven',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '22222',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Beetoven.D',
        short_name: 'Beetoven.D',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Share Tech Mono\:400,700`,
          `cambay\:400,700`,
          `arvo\:400,700`,
          `ubuntu mono\:400,700`,
        ],
        display: 'swap',
      },
    }
  ],
}
