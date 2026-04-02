# Cypress Data Generator with Gerador-BR

Example of using **Cypress** with the **Gerador-BR** data generator to automatically fill forms with Brazilian mock data.

## Prerequisites

* [Node.js](https://nodejs.org/) (includes npm)
* [Cypress](https://www.cypress.io/): `npm install cypress --save-dev`

## Installation

1. Clone this repository
2. Install dependencies:
   
```bash
npm install
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
[Formulário para Teste - Gerador-BR](https://box4.dev/gerador-br/formulario-para-teste/?utm_source=github&utm_medium=cypress_data_generator)

## Documentation

[Cypress documentation](https://docs.cypress.io/app/get-started/why-cypress)
[Gerador-BR documentation](https://box4.dev/gerador-br/documentacao/?utm_source=github&utm_medium=cypress_data_generator)
