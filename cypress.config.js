const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl : "http://103.69.127.118/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: { 
      url : 'http://103.69.127.118'

    },
  },
});
