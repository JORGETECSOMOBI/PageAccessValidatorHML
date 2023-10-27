const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://web.test.tmob.com.br",
    retries: 2,

    setupNodeEvents(on, config) {
      return config;
    }
  },
  defaultCommandTimeout: 25000
})
