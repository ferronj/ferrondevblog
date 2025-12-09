module.exports = config => {
  // Add watch targets for live reloading
  config.addWatchTarget("./src/");
  config.addWatchTarget("./_includes/");

  // Configure BrowserSync for live reloading
  config.setBrowserSyncConfig({
    files: ["dist/**/*"], // Watch the output directory
    open: true, // Automatically open the browser
    notify: true // Show notifications in the browser
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