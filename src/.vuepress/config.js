const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/images/JM Hansen_Logo.png',
    repo: 'olethomas93/vuepressCMS',
    editLinks: false,
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'kunder',
        ariaLabel: 'kunder',
        link:'/kunder/',
        items: [
            {text: 'Arnøy laks', link: '/kunder/arnoylaks/'},
            {text: 'Flakstadvåg laks', link: '/kunder/flakstadvag/'},
            {text: 'Lerøy', link: '/kunder/leroy/'},
            {text: 'NRS', link: '/kunder/nrs/'},
            {text: 'Salaks', link: '/kunder/salaks/'},
            {text: 'Salmar', link: '/kunder/salmar/'}
        ]
    },
    {
      text: 'Admin',
      link: '/admin/#/',
    },
      {
        text: 'Utstyr',
        link: '/manual/',
        items:[
          {text:"Montering SLS",link:'/manual/montSLS' },
          {text:"Miljøsensor",link:'/manual/vedMiljoSen' }
        ] 
      },
      {
        text: 'Utstyr',
        ariaLabel: 'Hardware',
        items: [
            {text: 'SLS', link: '/utstyr/SLS/'},
            {text: 'Oksygen sensorer', link: '/utstyr/oksygensensorer/'}
        ]
    },
    ],
    sidebar: 'auto'
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
