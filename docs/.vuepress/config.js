const sidebar = {
  "/Chapter/": [
    "/Chapter/1.md",
    "/Chapter/2.md",
    "/Chapter/3.md",
    "/Chapter/4.md",
    "/Chapter/5.md",
    "/Chapter/6.md",
    "/Chapter/7.md",
    "/Chapter/8.md",
    "/Chapter/9.md",
    "/Chapter/10.md",
    "/Chapter/11.md",
    "/Chapter/12.md",
    "/Chapter/13.md",
    "/Chapter/14.md",
    "/Chapter/15.md",
    "/Chapter/16.md",
    "/Chapter/17.md",
    "/Chapter/18.md",
    "/Chapter/19.md",
  ],
  "/Summary/": ["/Summary/InputOutputTools.md"],
  "/Examination/": ["/Examination/"],
};

module.exports = {
  // 配置插件  plugins: ["demo-container"],
  title: "软考-系统集成项目管理工程师",
  base: "/",
  port: "8880",
  evergreen: true,
  themeConfig: {
    sidebar,
    head: [],
    markdown: {},
    sidebarDepth: 2,
    nav: [
      { text: "书本章节", link: "/Chapter/1.md" },
      { text: "一些归纳", link: "/Summary/InputOutputTools.md" },
      { text: "一些试题", link: "/Examination/" },
    ],
  },
};
