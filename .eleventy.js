module.exports = function (config) {
  config.addPassthroughCopy("assets");
  config.addPassthroughCopy({ "src/styles/css": "styles" });

  config.addLayoutAlias("base", "layouts/base.njk");

  config.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("src/posts/*.md");
  });

  config.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data",
    },
  }
};