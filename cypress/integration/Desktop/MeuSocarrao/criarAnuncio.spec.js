/// <reference types="cypress" />
import MeuSocarrao from '../../support/Pages/MeuSocarrao';
import Home from '../../support/Pages/Home';

describe('Testes de Criacao do Anuncio', () => {
  beforeEach(
    'Realiza login em um usaurio ja existente antes de criar um anuncio',
    () => {
      cy.viewport(1024, 768);
      cy.visit('https://www.socarrao.com.br/?ignore=true');
      Home.ClicarBotaoCookies();
      Home.AcessarLogin();
      Home.PreencherLogin();
      Home.ClicarBotao();
      //Home.ValidarLogin();
    }
  );
  it('Cria um anuncio quando já logado, como meio de pagamento: Boleto', () => {
    MeuSocarrao.ListenApis();
    MeuSocarrao.ClicarBotaoHome();
    MeuSocarrao.ClicarVenderVeiculo();
    MeuSocarrao.EscolherPlano();
    MeuSocarrao.PreecherPlaca();
    MeuSocarrao.PreencherMarcaModeloVersao();
    MeuSocarrao.PreencheAno();
    MeuSocarrao.PreencherKmCombustivel();
    MeuSocarrao.PreencherCambioCor();
    MeuSocarrao.PreeenchePortaBanco();
    MeuSocarrao.PreecherEstadoCidade();
    MeuSocarrao.PreencherAcessoriosCompleto();
    MeuSocarrao.PreencherBuscaAcessorios();
    MeuSocarrao.ClicarBotaoProximoPasso2();
    MeuSocarrao.PreenchePrecoDescricao();
    MeuSocarrao.ClicarBotaoProximoPasso3();
    //MeuSocarrao.UploadImagens();
    //MeuSocarrao.ValidaUploadImg();
    MeuSocarrao.ClicarBotaoProximoPasso4();
    MeuSocarrao.UploadImagensRG();
    MeuSocarrao.UploadImagensSelf();
    MeuSocarrao.UploadImagensCRV();
    //MeuSocarrao.ValidaUploadImgDocs();
    MeuSocarrao.ClicarBotaoProximoPasso5();
    MeuSocarrao.PreenchimentoDadosBoleto();
    MeuSocarrao.ClicarBotaoConcluir();
    MeuSocarrao.ValidaCriarAnuncio();
    MeuSocarrao.ValidaCriarVeiculo();
  });
});
