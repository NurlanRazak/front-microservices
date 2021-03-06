module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'front-balalar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type:'text/css', href: '/animate.css' },
      { rel: 'stylesheet', type:'text/css', href: '/bootstrap.min.css' },
      { rel: 'stylesheet', type:'text/css', href: '/flaticon.css' },
      { rel: 'stylesheet', type:'text/css', href: '/style.css' },
      { rel: 'stylesheet', type:'text/css', href: '/owl.carousel.css' },
      { rel: 'stylesheet', type:'text/css', href: '/font-awesome.min.css' },

    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
      proxyHeaders: false,
      credentials: false
  },

  plugins: [
      { src: '~/plugins/axios' },
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
