const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://web.hml.tmob.autopasscorp.com",
    retries: 0,

    setupNodeEvents(on, config) {
      return config;
    }
  },
  defaultCommandTimeout: 10000
})
