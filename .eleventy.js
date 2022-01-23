module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/images");
  
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  };