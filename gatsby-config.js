require('dotenv').config();
const config = require('./src/config');

const { ANALYTICS_ID } = process.env;

const plugins = [
  'gatsby-plugin-sass',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-fontawesome-css',
  `gatsby-plugin-robots-txt`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
    __key: 'images',
  },
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true,
      jsxPragma: `jsx`,
      allExtensions: true,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_blank',
            rel: 'nofollow noopener noreferrer',
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 700,
            linkImagesToOriginal: true,
            quality: 90,
            tracedSVG: { color: config.colors.green },
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Beetoven.D',
      short_name: 'Beetoven.D',
      start_url: '/',
      background_color: config.colors.darkNavy,
      theme_color: config.colors.navy,
      display: 'minimal-ui',
      icon: 'src/images/logo.png',
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  pathPrefix: '/dbeetoven',
  siteMetadata: {
    title: 'Beetoven D.',
    description: 'Beetoven Desir Portfolio',
    siteUrl: 'https://dbeetoven.com',
    url: 'https://dbeetoven.com',
    twitterUsername: '@dbeetoven',
    image: '/banner.png',
  },
  plugins,
};
