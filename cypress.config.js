const { defineConfig } = require('cypress');

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'https://box4.dev/pt-br/brasil',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: false,
    screenshotOnRunFailure: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 10000,
  },
});
