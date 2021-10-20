/// <reference types="cypress" />
import Home from '../../support/Pages/Home'

describe('Testes de Login', () => {
  beforeEach('', () => {
    cy.viewport(1024, 768);
    cy.visit('https://www.socarrao.com.br/?ignore=true')
    Home.ClicarBotaoCookies()
  })
  it('Deve poder realizar login', () => {
    Home.AcessarLogin()
    Home.PreencherLogin()
    Home.ValidarLogin()
  })
})