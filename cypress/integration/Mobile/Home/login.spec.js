/// <reference types="cypress" />
import Home from '../../../support/Pages/Home'

describe('Testes de Login', () => {
  beforeEach('', () => {
    cy.viewport(375, 667);
    cy.visit('https://www.socarrao.com.br/?ignore=true')
    Home.ClicarBotaoCookies()
  })
  it('Dado um Usuario e Senha já cadastrados do sistema, quando realizado o login, então deve conseguir se logar', () => {
    Home.AcessarLogin()
    Home.PreencherLogin()
    Home.ClicarBotao()
    Home.ValidarLogin()
  })
})
