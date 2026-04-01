# Cypress Data Generator with Gerador-BR

Example of using [Cypress](https://www.cypress.io/) with the [Gerador-BR](https://box4.dev/gerador-br/) data generator to automatically fill forms with Brazilian mock data.

## Prerequisites

* [Node.js](https://nodejs.org/) (includes npm)
* [Cypress](https://www.cypress.io/): `npm i -D cypress`

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Cypress:
   ```bash
   npx cypress install
   ```

## Running Tests

### Run tests in interactive mode:
```bash
npm run cypress:open
```

### Run tests in headless mode:
```bash
npm test
```

### Run specific test file:
```bash
npx cypress run --spec "cypress/e2e/gerador-br.cy.js"
```

## Main Dependencies

* [cypress](https://www.npmjs.com/package/cypress): End-to-end testing framework for web applications.
* [gerador-br](https://www.npmjs.com/package/gerador-br): Library to generate Brazilian mock data.

## Target Page

The auto-fill example will be on the following form:
[Formulário para Teste - Gerador BR](https://box4.dev/gerador-br/formulario-para-teste)

## Documentation

[gerador-br](https://box4.dev/gerador-br/)
