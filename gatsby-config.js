require('dotenv').config();

const { ANALYTICS_ID } = process.env;

const plugins = [
  'gatsby-plugin-sass',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-typescript',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
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
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },

  // siteMetaData:{
  //   titla: `dbeetoven`,
  //  description:`portfolio, dbeetoven, software developer,  Front end dev, web developmente, Back end, node js, Angular`
  //  author:`@gatsbyjs`
  // },
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
  plugins,
};
