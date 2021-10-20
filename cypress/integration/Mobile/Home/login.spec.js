/// <reference types="cypress" />
import Home from '../../support/Pages/Home'

describe('Testes de Login', () => {
  beforeEach('', () => {
    cy.viewport(375, 667);
    cy.visit('https://www.socarrao.com.br/?ignore=true')
    Home.ClicarBotaoCookies()
  })
  it('Deve poder realizar login na versão mobile do site', () => {
    Home.AcessarLogin()
    Home.PreencherLogin()
    Home.ValidarLogin()
  })
})
