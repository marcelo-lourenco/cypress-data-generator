import { gerar } from 'gerador-br';

describe('Gerador BR Formulário', () => {
  const url = 'https://marcelo-lourenco.github.io/gerador-br/formulario-para-teste/';
  beforeEach(() => {
    cy.visit(url);
  });

  it('Validates data generation WITHOUT MASK', () => {

    // Pessoa
    const nomeCompleto = gerar.nome.aleatorioCompleto();
    cy.get('[data-testid="input-nome"]').type(nomeCompleto);
    cy.get('[data-testid="input-pai"]').type(gerar.nome.paiCompleto());
    cy.get('[data-testid="input-mae"]').type(gerar.nome.maeCompleto());
    cy.get('[data-testid="input-apelido"]').type(gerar.apelido());
    cy.get('[data-testid="input-escolaridade"]').type(gerar.escolaridade());
    cy.get('[data-testid="input-profissao"]').type(gerar.profissao());
    cy.get('[data-testid="input-cor-pele"]').type(gerar.corPele());
    cy.get('[data-testid="input-genero"]').type(gerar.genero());
    cy.get('[data-testid="input-orientacao-sexual"]').type(gerar.orientacaoSexual());
    cy.get('[data-testid="input-identidade-genero"]').type(gerar.identidadeGenero());
    cy.get('[data-testid="input-tipo-sanguineo"]').type(gerar.tipoSanguineo());
    cy.get('[data-testid="input-data-nascimento"]').type(gerar.dataNascimento());

    // Documentos PJ
    cy.get('[data-testid="input-cnpj"]').type(gerar.cnpj());
    cy.get('[data-testid="input-inscricao-estadual"]').type(gerar.inscricaoEstadual() ?? '');

    // Documentos PF
    cy.get('[data-testid="input-cpf"]').type(gerar.cpf());
    cy.get('[data-testid="input-cnh"]').type(gerar.cnh());
    cy.get('[data-testid="input-cnh-categoria"]').type(gerar.cnhCategoria());
    cy.get('[data-testid="input-rg"]').type(gerar.rg());
    cy.get('[data-testid="input-cns"]').type(gerar.cns());
    cy.get('[data-testid="input-pis"]').type(gerar.pis());
    cy.get('[data-testid="input-titulo-eleitor"]').type(gerar.tituloEleitor());
    cy.get('[data-testid="input-passaporte"]').type(gerar.passaporte());
    cy.get('[data-testid="input-certidao-nascimento"]').type(gerar.certidao.nascimento());
    cy.get('[data-testid="input-certidao-casamento"]').type(gerar.certidao.casamento());
    cy.get('[data-testid="input-certidao-obito"]').type(gerar.certidao.obito());

    // Contatos
    cy.get('[data-testid="input-email"]').type(gerar.email(nomeCompleto));
    cy.get('[data-testid="input-ddd"]').type(gerar.ddd());
    cy.get('[data-testid="input-celular"]').type(gerar.celular());
    cy.get('[data-testid="input-telefone"]').type(gerar.telefone());

    // Endereços
    const endereco = gerar.endereco();
    cy.get('[data-testid="input-logradouro"]').type(endereco.logradouro);
    cy.get('[data-testid="input-numero"]').type(endereco.numero);
    cy.get('[data-testid="input-complemento"]').type(endereco.complemento ? endereco.complemento : '-');
    cy.get('[data-testid="input-bairro"]').type(endereco.bairro);
    cy.get('[data-testid="input-localidade"]').type(endereco.localidade);
    cy.get('[data-testid="input-estado"]').type(endereco.estado);
    cy.get('[data-testid="input-cep"]').type(endereco.cep);

    // Cartão de Crédito
    const cartaoCredito = gerar.cartaoCredito();
    console.log("cartaoCredito",cartaoCredito);
    cy.get('[data-testid="input-cartao-credito"]').type(cartaoCredito.numero);
    cy.get('[data-testid="input-bandeira"]').type(cartaoCredito.bandeira);
    cy.get('[data-testid="input-nome-titular"]').type(cartaoCredito.nomeTitular);
    cy.get('[data-testid="input-cvv"]').type(cartaoCredito.cvv);
    cy.get('[data-testid="input-data-expiracao"]').type(cartaoCredito.dataExpiracao);

    // Conta Bancária
    const cb = gerar.contaBancaria();
    cy.get('[data-testid="input-codigo-banco-conta"]').type(cb.codigoBanco);
    cy.get('[data-testid="input-nome-banco-conta"]').type(cb.nomeBanco);
    cy.get('[data-testid="input-agencia"]').type(cb.agencia);
    cy.get('[data-testid="input-agencia-dv"]').type(cb.agenciaDv ? cb.agenciaDv : '-');
    cy.get('[data-testid="input-conta"]').type(cb.conta);
    cy.get('[data-testid="input-conta-dv"]').type(cb.contaDv ? cb.contaDv : '-');

    // Banco
    const banco = gerar.banco();
    cy.get('[data-testid="input-banco-codigo"]').type(banco.codigoBanco);
    cy.get('[data-testid="input-banco-nome"]').type(banco.nomeBanco);
    cy.get('[data-testid="input-razao-social"]').type(banco.razaoSocial);
    cy.get('[data-testid="input-ispb"]').type(banco.ispb);

    // Veículo
    cy.get('[data-testid="input-placa-antiga"]').type(gerar.placaAntiga());
    cy.get('[data-testid="input-placa-mercosul"]').type(gerar.placaMercosul());
    cy.get('[data-testid="input-renavam"]').type(gerar.renavam());

    // Lorem Ipsum
    cy.get('[data-testid="input-palavra"]').type(gerar.palavra());
    cy.get('[data-testid="textarea-sentenca"]').type(gerar.sentenca());
    cy.get('[data-testid="textarea-paragrafos"]').type(gerar.paragrafo());

    cy.contains('button', 'Enviar').click();
    cy.wait(3000);
  });

  it('Validates data generation WITH MASK', () => {

    // Documentos PJ
    cy.get('[data-testid="input-cnpj"]').type(gerar.cnpj(true));

    // Documentos PF
    cy.get('[data-testid="input-cpf"]').type(gerar.cpf(true));
    cy.get('[data-testid="input-rg"]').type(gerar.rg(true));
    cy.get('[data-testid="input-cns"]').type(gerar.cns(true));
    cy.get('[data-testid="input-pis"]').type(gerar.pis(true));
    cy.get('[data-testid="input-titulo-eleitor"]').type(gerar.tituloEleitor(true));
    cy.get('[data-testid="input-certidao-nascimento"]').type(gerar.certidao.nascimento(true));
    cy.get('[data-testid="input-certidao-casamento"]').type(gerar.certidao.casamento(true));
    cy.get('[data-testid="input-certidao-obito"]').type(gerar.certidao.obito(true));

    // Contato
    cy.get('[data-testid="input-email"]').type(gerar.email(gerar.apelido()));
    cy.get('[data-testid="input-ddd"]').type(gerar.ddd());
    cy.get('[data-testid="input-celular"]').type(gerar.celular(true));
    cy.get('[data-testid="input-telefone"]').type(gerar.telefone(true));

    // Endereço
    const endereco = gerar.endereco(true);
    cy.get('[data-testid="input-cep"]').type(endereco.cep);

    // Cartão de Crédito
    const cartaoCredito = gerar.cartaoCredito(true);
    cy.get('[data-testid="input-cartao-credito"]').type(cartaoCredito.numero);

    // Veículo
    cy.get('[data-testid="input-placa-antiga"]').type(gerar.placaAntiga(true));
    cy.get('[data-testid="input-placa-mercosul"]').type(gerar.placaMercosul(true));

    cy.contains('button', 'Enviar').click();
    cy.wait(3000);
  });
});
