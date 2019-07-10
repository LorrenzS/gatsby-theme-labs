module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    { 
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'data'
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'WeddingDetail'
      }
    }
  
  ],
}
