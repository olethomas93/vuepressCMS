const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "JM Docs",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/images/JM Hansen_Logo.png",
    repo: "olethomas93/vuepressCMS",
    editLinks: true,
    editLinkText: "Editer",
    lastUpdated: false,
    sidebar:[
      '/',
      {
        title:'Docs',
        collapsable:false,
        children:[
          ["/", "Home"],
          "/docs/Atvise/",
          "/docs/Frontend/",
          "/docs/Howtos/"

        ]
      }

    ],
    nav:[
      {text:"Home",link:"/"},
      {text:"Admin",link:"/docs/admin/#/"}
    ],
    displayAllHeaders: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
