require('dotenv').config();

const { ANALYTICS_ID } = process.env;

const plugins = [
  'gatsby-plugin-sass',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-fontawesome-css',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
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
  siteMetadata: {
    title: 'Beetoven Desir',
    description: 'dbeetoven Portfolio, gatsby, scss',
    siteUrl: 'https://dbeetoven.me/',
  },
  plugins,
};
