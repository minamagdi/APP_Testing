const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      mochawesome(on);
      return config;
    },
   baseUrl:"https://todo.qacart.com/",
    specPattern: "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
  },
  env: {
    APIUrl: 'https://todo.qacart.com',
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
});