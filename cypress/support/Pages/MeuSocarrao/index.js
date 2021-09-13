const el = require('./elements').ELEMENTS;
class MeuSocarrao {
  // FUncao que fica escutando as APIs Acionadas durante o processo
  ListenApis() {
    cy.intercept('GET', '**/api/brands?id=0&all=0').as('Marca');
    cy.intercept('GET', '**/api/models/all?brandId[]=139').as('Modelo');
    cy.intercept('GET', '**/api/versions/all?modelId[]=2').as('Versao');
    cy.intercept('POST', '**/api/announce/images').as('UploadImgVeiculo');
    cy.intercept('POST', '**/api/announce/createVehicleWithAds').as(
      'CriaAnuncio'
    );
  }
  //Clica la logo par aque seja direcionado para a home
  ClicarBotaoHome() {
    cy.get(el.logo).click();
    cy.get(el.fraseTopoHome).should('be.visible');
  }
  //Clica em "Vender Veiculo" para que seja direcionado para a tela de Planos
  ClicarVenderVeiculo() {
    cy.get(el.botaoVenderVeiculo).click();
    cy.get(el.planos).should('be.visible');
  }
  //É selecionado um plano dos disponivels , para criar um anuncio
  EscolherPlano() {
    cy.get(el.planoStarter).click();
    cy.get(el.passoUmAtivo).should('be.visible');
  }
  // Localiza o input da placa e inseri uma placa
  PreecherPlaca() {
    cy.get(el.acessorios).should('be.visible');
    cy.get(el.inputPlaca).type('dfj-4t54');
  }
  // Localiza os e seleciona marca, Modelo e Versao
  PreencherMarcaModeloVersao() {
    cy.get(el.inputMarca).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectMarca).click();
    cy.get(el.inputModelo).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectModelo).click();
    cy.get(el.inputVersao).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectVersao).click();
  }
  //Localiza e preenche AnoFabricaçáo e AnoModelo
  PreencheAno() {
    cy.get(el.inputAnoF).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectAnoF).click();
    cy.get(el.inputAnoM).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectAnoM).click();
  }
  //Localiza e preenche Kilometragem e Combustivel
  PreencherKmCombustivel() {
    cy.get(el.inputKm).type('123321');
    cy.get(el.inputCombustivel).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCombustivel).click();
  }
  //Localiza e preenche Cambio e Cor
  PreencherCambioCor() {
    cy.get(el.inputCambio).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCambio).click();
    cy.get(el.inputCor).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCor).click();
  }
  //Localiza e preeenche portase bancos
  PreeenchePortaBanco() {
    cy.get(el.inputPorta).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectPorta).click();
    cy.get(el.inputBanco).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectBanco).click();
  }
  // Localiza e preenche estado e cidade
  PreecherEstadoCidade() {
    cy.get(el.inputEstado).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectEstado).click();
    cy.get(el.inputCidade).click();
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCidade).click();
  }
  // Clia no check 'completo' na listagem de acessorios
  PreencherAcessoriosCompleto() {
    cy.get(el.checkAcessoriosCompleto).click();
  }
  // Clica na busca por acessorios digita um termo e seleciona o check do termi pesquisado
  PreencherBuscaAcessorios() {
    cy.get(el.inputBuscaAcessorios).type('som');
    cy.get(el.checkAcessorioBuscado).click();
  }
  //Clica no botão 'Proximo' e valida que foi direcionado para a URL correta
  ClicarBotaoProximoPasso2() {
    cy.get(el.botaoProximo).click();
    cy.url().should('include', '/passo?advertisement=1&stepper=2');
    cy.get(el.passoDoisAtivo).should('be.visible');
  }
  // Preenche os inputs de preço e descrição
  PreenchePrecoDescricao() {
    cy.get(el.inputValor).type(20000);
    cy.get(el.inputDescricao).type(
      'Descrição do veiculo inserida pelo usuário.'
    );
  }
  //Clica no botão proximo e validar se foi redirecionado para a url correta
  ClicarBotaoProximoPasso3() {
    cy.get(el.botaoProximo).click();
    cy.url().should('include', '/passo?advertisement=1&stepper=3');
    cy.get(el.passoTresAtivo).should('be.visible');
    cy.get(el.botãoTutorialImagens).click();
  }
  //Realiza o uploads das imagens atravez de arrastar e soltar
  UploadImagens() {
    cy.get(el.uploadImagens).attachFile(
      ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'],
      { subjectType: 'drag-n-drop' }
    );
  }
  //Valida se o retorno do uploads das imagens inseridas retorna status 200
  ValidaUploadImg() {
    //Validação da img1 imagens se retornou status 200
    cy.wait('@UploadImgVeiculo');
    cy.get('@UploadImgVeiculo').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
    //Validação da img2 imagens se retornou status 200
    cy.wait('@UploadImgVeiculo');
    cy.get('@UploadImgVeiculo').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
    //Validação da img3 imagens se retornou status 200
    cy.wait('@UploadImgVeiculo');
    cy.get('@UploadImgVeiculo').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
    //Validação da img4 imagens se retornou status 200
    cy.wait('@UploadImgVeiculo');
    cy.get('@UploadImgVeiculo').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
    //Validação da img5 imagem se retornou status 200
    cy.wait('@UploadImgVeiculo');
    cy.get('@UploadImgVeiculo').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
  }
  //Clica no botão 'Proximo' e valida que foi direcionado para a URL correta
  ClicarBotaoProximoPasso4() {
    cy.get(el.botaoProximo).click();
    cy.url().should('include', '/passo?advertisement=1&stepper=4');
    cy.get(el.passoQuatroAtivo).should('be.visible');
  }
}
export default new MeuSocarrao();
