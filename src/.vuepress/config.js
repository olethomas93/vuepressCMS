const { description } = require("../../package");

const fs = require('fs');
const path = require('path');

var dirpath = "./src"

// generate sidenav order by update time
var sb = fs.readdirSync(dirpath).filter(f => {
  console.log(f)
    return f.match(/\.(md)$/i) && f !== 'README.md'
}).map(f => {
  return {
    path:  '/' + f,
    mtime: fs.statSync(dirpath +  '/' + f).mtime
  }
})
.sort((a, b) => a.mtime - b.mtime)
.map(f => f.path)

console.log(sb)

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
    lastUpdated: 'Last updated',
    sidebar:sb,
    docsDir:'src',
    nav:[
      {text:"Home",link:"/"},
      {text:"Admin",link:"/admin/#/"}
    ],
    displayAllHeaders: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
