module.exports = {
  siteMetadata: {
    title: `nikbelikov.ru`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '46631805',
        webvisor: true,
        trackHash: true
      },
    },
  ],
};
