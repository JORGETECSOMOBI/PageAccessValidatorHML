const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://web.hml.tmob.autopasscorp.com",
    retries: 1,

    setupNodeEvents(on, config) {
      return config;
    }
  },
  defaultCommandTimeout: 20000
})
