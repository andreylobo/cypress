// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//
//
// ***********************************************
//Plugin utilizado para realizar Upload de Imagens
import 'cypress-file-upload';
//
// Comando personalizado que realiza login 
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.socarrao.com.br/?ignore=true')
  cy.get('.banner > .button').click()
  cy.get('.login').click()
  cy.get('form > [type="text"]').type(username)
  cy.get('.password-input > .regular').type(password)
  cy.get('#btn_entrar').click()
})
