const el = require('./elements').ELEMENTS;
const dt = require('../../../fixtures/dadosUsuario').DATA;
class MeuSocarrao {
  // FUncao que fica escutando as APIs Acionadas durante o processo
  ListenApis() {
    cy.intercept('GET', '**/api/plate?plate**').as('Placa');
    cy.intercept('GET', '**/api/brands**').as('Marca');
    cy.intercept('GET', '**/api/models/all?brandId**').as('Modelo');
    cy.intercept('GET', '**/api/versions/all?modelId**').as('Versao');
    cy.intercept('POST', '**/api/announce/images').as('UploadImgVeiculo');
    cy.intercept('POST', '**/api/announce/moderation/user/**').as(
      'UploadImgDocs'
    );
    cy.intercept('POST', '**/api/announce/createVehicleWithAds').as(
      'CriaVeiculo'
    );
    cy.intercept('POST', '**/api/announce/store/vehicles').as('CriaAnuncio');
  }
  //Clica na logo par aque seja direcionado para a home
  ClicarBotaoHome() {
    cy.get(el.fraseMeuSocarrao).should('be.visible');
    cy.get(el.logo).click();
    cy.get(el.fraseTopoHome).should('be.visible');
  }
  //Mobile - Clica na logo para que seja direcionado para a home 
  ClicarBotaoHomeMobile() {
    cy.get(el.fraseMeuSocarrao).should('be.visible');
    cy.get(el.logo).click();
    cy.get(el.menuMobile).should('be.visible');
  }
  //Clica em "Vender Veiculo" para que seja direcionado para a tela de Planos
  ClicarVenderVeiculo() {
    cy.get(el.botaoVenderVeiculo).click();
    cy.get(el.planos).should('be.visible');
  }
  //É selecionado o plano Starter para criar um anuncio
  EscolherPlanoStarter() {
    cy.get(el.planoStarter).click();
    cy.get(el.passoUmAtivo).should('be.visible');
  }
  //É selecionado o plano Starter para criar um anuncio
  EscolherPlanoTurbo() {
    cy.get(el.planoTurbo).click();
    cy.get(el.passoUmAtivo).should('be.visible');
  }
  //É selecionado o plano Starter para criar um anuncio
  EscolherPlanoMelhor() {
    cy.get(el.planoMelhor).click();
    cy.get(el.passoUmAtivo).should('be.visible');
  }
  //É selecionado o plano Starter para criar um anuncio
  EscolherPlanoGratis() {
    cy.get(el.planoGratis).click();
    cy.get(el.passoUmAtivo).should('be.visible');
  }
  // Localiza o input da placa e inseri uma placa
  PreecherPlaca() {
    cy.get(el.acessorios).should('be.visible');
    cy.get(el.inputPlaca).type('dfj-4t54');
  }
  ValidaApiPlacaNaoEncontrada() {
    cy.wait('@Placa');
    cy.get('@Placa').then(({ request, response }) => {
      expect(response.statusCode).to.eq(404);
    });
  }
  ValidaApiPlacaEncontrada() {
    cy.wait('@Placa');
    cy.get('@Placa').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
  }
  // Localiza os e seleciona marca, Modelo e Versao
  PreencherMarcaModeloVersao() {
    cy.get(el.inputMarca).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectMarca).click({ force: true });
    cy.get(el.inputModelo).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectModelo).click({ force: true });
    cy.get(el.inputVersao).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectVersao).click({ force: true });
  }
  //Localiza e preenche AnoFabricaçáo e AnoModelo
  PreencheAno() {
    cy.get(el.inputAnoF).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectAnoF).click({ force: true });
    cy.get(el.inputAnoM).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectAnoM).click({ force: true });
  }
  //Localiza e preenche Kilometragem e Combustivel
  PreencherKmCombustivel() {
    cy.get(el.inputKm).type('123321');
    cy.get(el.inputCombustivel).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCombustivel).click({ force: true });
  }
  //Localiza e preenche Cambio e Cor
  PreencherCambioCor() {
    cy.get(el.inputCambio).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCambio).click({ force: true });
    cy.get(el.inputCor).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCor).click({ force: true });
  }
  //Localiza e preeenche portase bancos
  PreeenchePortaBanco() {
    cy.get(el.inputPorta).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectPorta).click({ force: true });
    cy.get(el.inputBanco).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectBanco).click({ force: true });
  }
  // Localiza e preenche estado e cidade
  PreecherEstadoCidade() {
    cy.get(el.inputEstado).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectEstado).click({ force: true });
    cy.get(el.inputCidade).click({ force: true });
    cy.get(el.dropdownInput).should('be.visible');
    cy.get(el.selectCidade).click({ force: true });
  }
  // Clia no check 'completo' na listagem de acessorios
  PreencherAcessoriosCompleto() {
    cy.get(el.checkAcessoriosCompleto).click({ force: true });
  }
  // Clica na busca por acessorios digita um termo e seleciona o check do termi pesquisado
  PreencherBuscaAcessorios() {
    cy.get(el.inputBuscaAcessorios).type('som');
    cy.get(el.checkAcessorioBuscado).click({ force: true });
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
    cy.get(el.loadBotaoProximo).should('not.exist');
    cy.get(el.botaoProximo).click();
    cy.get(el.passoQuatroAtivo).should('be.visible');
    cy.url().should('include', '/passo?advertisement=1&stepper=4');
  }
  //Realiza o upload da imagens rg
  UploadImagensRG() {
    cy.get(el.uploadImagemRG).attachFile(['docPessoal.png'], {
      subjectType: 'drag-n-drop',
    });
  }
  //Realiza o upload da imagens da self
  UploadImagensSelf() {
    cy.get(el.uploadImagemSelf).attachFile(['docPessoalRosto.png'], {
      subjectType: 'drag-n-drop',
    });
  }
  //Realiza o upload da imagens do crv
  UploadImagensCRV() {
    cy.get(el.uploadImagemCRV).attachFile(['docVeiculo.png'], {
      subjectType: 'drag-n-drop',
    });
  }
  //Clica no botão 'Proximo' e valida que foi direcionado para a URL correta
  ClicarBotaoProximoPasso5() {
    cy.get(el.botaoRemoverImagem).should('be.visible');
    cy.get('.uploaded').should('be.visible');
    cy.get(el.botaoProximo).click();
    cy.get(el.passoCincoAtivo).should('be.visible');
    cy.url().should('include', '/passo?advertisement=1&stepper=5');
  }
  //Seleciona pagamento boleto e insere dados de pagamento
  PreenchimentoDadosBoleto() {
    cy.get(el.selecionaBoleto).click();
    cy.get(el.formDadosBoleto).should('be.visible');
    cy.clearLocalStorage();
    cy.get(el.inputNome).clear().type(dt.name);
    cy.get(el.inputRua).clear().type(dt.rua);
    cy.get(el.inputNumero).clear().type(dt.numero);
    cy.get(el.inputBairro).clear().type(dt.bairro);
    cy.get(el.inputCep).clear().type(dt.cep);
    cy.get(el.inputCidadeBoleto).clear().type(dt.cidade);
    cy.get(el.inputEstadoBoleto).click();
    cy.get(el.selectEstadoBoleto).click();
    cy.get(el.inputCpf).clear().type(dt.cpf);
    cy.get(el.inputDtNasc).clear().type(dt.dataNasc);
    cy.get(el.inputEmail).clear().type(dt.email);
    cy.get(el.inputFone).clear().type(dt.fone);
  }
  //clica no botão "Concluir" e valida se direcionou para a url de finalização de anuncio
  ClicarBotaoConcluir() {
    cy.get(el.botaoConcluir).click();
    cy.url().should('include', '/meu-socarrao/anunciar/finished');
  }
  // valida o retorno da api se o anuncio foi criado corretamente
  ValidaCriarAnuncio() {
    cy.wait('@CriaAnuncio');
    cy.get('@CriaAnuncio').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.action).to.equal('CREATE');
    });
  }
  // Valida o retorno da api se o veiuclo foi criado
  ValidaCriarVeiculo() {
    cy.wait('@CriaVeiculo');
    cy.get('@CriaVeiculo').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.advertisement.action).to.equal('CREATED');
    });
  }
  // Valida na Api de o upload dos domumentos retorna sucesso
  ValidaUploadImgDocs() {
    cy.wait('@UploadImgDocs');
    cy.get('@UploadImgDocs').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
    cy.wait('@UploadImgDocs');
    cy.get('@UploadImgDocs').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
    cy.wait('@UploadImgDocs');
    cy.get('@UploadImgDocs').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
    });
  }
}
export default new MeuSocarrao();
