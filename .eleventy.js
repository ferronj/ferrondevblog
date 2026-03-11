module.exports = config => {
  // Date filter for templates
  config.addFilter("date", (dateObj, format) => {
    const d = new Date(dateObj);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    if (format === "yyyy-MM-dd") {
      return d.toISOString().split("T")[0];
    }
    if (format === "MMMM d, yyyy") {
      return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
    }
    return d.toLocaleDateString();
  });

  // Add watch targets for live reloading
  config.addWatchTarget("./src/");
  config.addWatchTarget("./_includes/");

  // Passthrough copy static assets
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/images");

  // Date formatting filters
  config.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  config.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  // Configure BrowserSync for live reloading
  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
    notify: true
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};