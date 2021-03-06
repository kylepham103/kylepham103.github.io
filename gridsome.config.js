// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/style/_variables.scss"),
        path.resolve(__dirname, "./src/assets/style/_function.scss"),
      ],
    });
}

module.exports = {
  siteUrl: "https://kylepham103.github.io",
  pathPrefix: "/",
  siteName: "kylepham103.github.io",
  siteDescription:
    "Tutorials, Blog, Hướng dẫn, chia sẽ kinh nghiệm về Frontend, react, vue, ux, ui",

  icon: "./src/assets/images/logo.svg",

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");

    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },

  templates: {
    Post: "/:slug",
    Tag: "/tag/:id",
  },

  plugins: [
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/assets/images/author.jpg",
        name: "Kyle's blog",
        short_name: "Kyle's blog",
        theme_color: "#01A1B1",
        lang: "vi",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: ["/exclude-me"],
        config: {
          "/articles/*": {
            changefreq: "weekly",
            priority: 0.5,
            lastmod: "2020-02-19",
          },
          "/about": {
            changefreq: "monthly",
            priority: 0.7,
            lastmod: "2020-05-12",
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-29685098-2",
      },
    },
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        searchFields: ["title"],
        collections: [
          {
            typeName: "Post",
            indexName: "Post",
            fields: ["title", "desc", "path", "slug"],
          },
        ],
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        "gridsome-plugin-remark-prismjs-all",
      ],
    },
  },
};
