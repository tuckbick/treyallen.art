const Path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://treyallen.art',
    title: "treyallen.art",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": Path.resolve(__dirname, 'src/components'),
          "@styles": Path.resolve(__dirname, 'src/styles')
        },
        extensions: []
      }
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "275593105",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Dosis:400',
          'Raleway:300',
          'Material+Icons'
        ],
        display: 'swap'
      }
    }
  ],
};
