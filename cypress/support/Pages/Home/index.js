const el = require('./elements').ELEMENTS;
class Home {
  // Ações Login
  // Ação de Clique no botão entrar;
  // Ouvindo  o endpoint /api/auth/login
  AcessarLogin() {
    cy.intercept('POST', '**/api/auth/login').as('login');
    cy.get(el.login).click();
  }
  // Confirma se o drop down esta visivel
  // Preenche os inputs de Email e Senha
  // Clica no botão Entrar
  PreencherLogin() {
    cy.get(el.loginDropDown).should('be.visible');
    cy.get(el.inputEmail).type('andrey.loboo@gmail.com');
    cy.get(el.inputSenha).type('12345678');
  }
  // Clica no botao "Entrar"
  ClicarBotao() {
    cy.get(el.buttonEntrar).click();
  }

  // Valida se o response dp request de login retorna 200
  // Valida de o body do response tem a propriedade "success"
  // Printa o conteudo da propriedade "success"
  ValidarLogin() {
    cy.wait('@login');
    cy.get('@login').then(({ request, response }) => {
      cy.log(request.body);
      cy.log(response.body);
      expect(response.statusCode).to.eq(200);
      expect(response.body).has.property('success');
      expect(response.body.success).to.eq(true);
      cy.log(request.body.useuser_access);
      expect(request.body.user_access).to.equal('andrey.loboo@gmail.com');
    });
  }
  // end Login
}

export default new Home();
