import { gerar } from 'gerador-br';

describe('Gerador BR Formulário - Teste com Cypress', () => {
  const url = 'https://box4.dev/gerador-br/formulario-para-teste/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Validates data generation WITHOUT MASK', () => {
    const nomeCompleto = gerar.nome.aleatorioCompleto();
    cy.get('#fldNome').type(nomeCompleto);
    cy.get('#fldPai').type(gerar.nome.paiCompleto());
    cy.get('#fldMae').type(gerar.nome.maeCompleto());
    cy.get('#fldApelido').type(gerar.apelido());
    cy.get('#fldEscolaridade').type(gerar.escolaridade());
    cy.get('#fldProfissao').type(gerar.profissao());
    cy.get('#fldCorPele').type(gerar.corPele());
    cy.get('#fldGenero').type(gerar.genero());
    cy.get('#fldOrientacaoSexual').type(gerar.orientacaoSexual());
    cy.get('#fldIdentidadeGenero').type(gerar.identidadeGenero());
    cy.get('#fldTipoSanguineo').type(gerar.tipoSanguineo());
    cy.get('#fldDataNascimento').type(gerar.dataNascimento());

    // Documentos PJ
    cy.get('#fldCnpj').type(gerar.cnpj());
    cy.get('#fldInscricaoEstadual').type(gerar.inscricaoEstadual() ?? '');
    cy.get('#fldNomeEmpresa').type(gerar.nomeEmpresa("BR"));

    // Documentos PF
    cy.get('#fldCpf').type(gerar.cpf());
    cy.get('#fldCnh').type(gerar.cnh());
    cy.get('#fldCnhCategoria').type(gerar.cnhCategoria());
    cy.get('#fldRg').type(gerar.rg());
    cy.get('#fldCns').type(gerar.cns());
    cy.get('#fldPis').type(gerar.pis());
    cy.get('#fldTituloEleitor').type(gerar.tituloEleitor());
    cy.get('#fldPassaporte').type(gerar.passaporte());
    cy.get('#fldCertidaoNascimento').type(gerar.certidao.nascimento());
    cy.get('#fldCertidaoCasamento').type(gerar.certidao.casamento());
    cy.get('#fldCertidaoObito').type(gerar.certidao.obito());

    // Contatos
    cy.get('#fldEmail').type(gerar.email(nomeCompleto));
    cy.get('#fldDdd').type(gerar.ddd());
    cy.get('#fldCelular').type(gerar.celular());
    cy.get('#fldTelefone').type(gerar.telefone());

    // Endereços
    const endereco = gerar.endereco();
    cy.get('#fldLogradouro').type(endereco.logradouro);
    cy.get('#fldNumero').type(endereco.numero);
    cy.get('#fldComplemento').type(endereco.complemento ? endereco.complemento : '-');
    cy.get('#fldBairro').type(endereco.bairro);
    cy.get('#fldLocalidade').type(endereco.localidade);
    cy.get('#fldEstado').type(endereco.estado);
    cy.get('#fldCep').type(endereco.cep);

    // Cartão de Crédito
    const cartaoCredito = gerar.cartaoCredito();
    cy.get('#fldCartaoCredito').type(cartaoCredito.numero);
    cy.get('#fldBandeira').type(cartaoCredito.bandeira);
    cy.get('#fldNomeTitular').type(cartaoCredito.nomeTitular);
    cy.get('#fldCvv').type(cartaoCredito.cvv);
    cy.get('#fldDataExpiracao').type(cartaoCredito.dataExpiracao);

    // Conta Bancária
    const cb = gerar.contaBancaria();
    cy.get('#fldCodigoBanco').type(cb.codigoBanco);
    cy.get('#fldNomeBanco').type(cb.nomeBanco);
    cy.get('#fldAgencia').type(cb.agencia);
    cy.get('#fldAgenciaDv').type(cb.agenciaDv ? cb.agenciaDv : '-');
    cy.get('#fldConta').type(cb.conta);
    cy.get('#fldContaDv').type(cb.contaDv ? cb.contaDv : '-');

    // Banco
    const banco = gerar.banco();
    cy.get('#fldBancoCodigo').type(banco.codigoBanco);
    cy.get('#fldBancoNome').type(banco.nomeBanco);
    cy.get('#fldRazaoSocial').type(banco.razaoSocial);
    cy.get('#fldIspb').type(banco.ispb);

    // Veículo
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga());
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul());
    cy.get('#fldRenavam').type(gerar.renavam());

    // Lorem Ipsum
    cy.get('#fldPalavra').type(gerar.palavra());
    cy.get('#fldSentenca').type(gerar.sentenca());
    cy.get('#fldParagrafos').type(gerar.paragrafo());

    cy.contains('button', 'Enviar').click();
    cy.wait(3000);
  });

  it('Validates data generation WITH MASK', () => {
    // Documentos PJ
    cy.get('#fldCnpj').type(gerar.cnpj(true));

    // Documentos PF
    cy.get('#fldCpf').type(gerar.cpf(true));
    cy.get('#fldRg').type(gerar.rg(true));
    cy.get('#fldCns').type(gerar.cns(true));
    cy.get('#fldPis').type(gerar.pis(true));
    cy.get('#fldTituloEleitor').type(gerar.tituloEleitor(true));
    cy.get('#fldCertidaoNascimento').type(gerar.certidao.nascimento(true));
    cy.get('#fldCertidaoCasamento').type(gerar.certidao.casamento(true));
    cy.get('#fldCertidaoObito').type(gerar.certidao.obito(true));

    // Contato
    cy.get('#fldEmail').type(gerar.email(gerar.apelido()));
    cy.get('#fldDdd').type(gerar.ddd());
    cy.get('#fldCelular').type(gerar.celular(true));
    cy.get('#fldTelefone').type(gerar.telefone(true));

    // Endereço
    const endereco = gerar.endereco(true);
    cy.get('#fldCep').type(endereco.cep);

    // Cartão de Crédito
    const cartaoCredito = gerar.cartaoCredito(true);
    cy.get('#fldCartaoCredito').type(cartaoCredito.numero);

    // Veículo
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga(true));
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul(true));

    // Lorem Ipsum
    cy.get('#fldPalavra').type(gerar.palavra());
    cy.get('#fldSentenca').type(gerar.sentenca());
    cy.get('#fldParagrafos').type(gerar.paragrafo());

    cy.contains('button', 'Enviar').click();
    cy.wait(3000);
  });

  it('Validates data generation with MASK = false and with informed state', () => {
    const estado = 'SP';

    cy.get('#fldCpf').type(gerar.cpf(false, estado));
    cy.get('#fldCnpj').type(gerar.cnpj(false));
    cy.get('#fldRg').type(gerar.rg(false));
    cy.get('#fldCns').type(gerar.cns(false, 'beneficiario'));
    cy.get('#fldPis').type(gerar.pis(false));
    cy.get('#fldTituloEleitor').type(gerar.tituloEleitor(false, estado));
    cy.get('#fldCertidaoNascimento').type(gerar.certidao.nascimento(false));
    cy.get('#fldCertidaoCasamento').type(gerar.certidao.casamento(false));
    cy.get('#fldCertidaoObito').type(gerar.certidao.obito(false));
    cy.get('#fldCelular').type(gerar.celular(false, estado));
    cy.get('#fldTelefone').type(gerar.telefone(false, estado));
    cy.get('#fldCep').type(gerar.cep(false, estado));
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga(false));
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul(false));
    cy.get('#fldCartaoCredito').type(gerar.cartaoCredito(false).numero);

    cy.contains('button', 'Enviar').click();
    cy.wait(2000);
  });

  it('Validates data generation with MASK = true and with informed state', () => {
    const estado = 'SP';

    cy.get('#fldCpf').type(gerar.cpf(true, estado));
    cy.get('#fldCnpj').type(gerar.cnpj(true));
    cy.get('#fldRg').type(gerar.rg(true));
    cy.get('#fldCns').type(gerar.cns(true, 'profissional'));
    cy.get('#fldPis').type(gerar.pis(true));
    cy.get('#fldTituloEleitor').type(gerar.tituloEleitor(true, estado));
    cy.get('#fldCertidaoNascimento').type(gerar.certidao.nascimento(true));
    cy.get('#fldCertidaoCasamento').type(gerar.certidao.casamento(true));
    cy.get('#fldCertidaoObito').type(gerar.certidao.obito(true));
    cy.get('#fldCelular').type(gerar.celular(true, estado));
    cy.get('#fldTelefone').type(gerar.telefone(true, estado));
    cy.get('#fldCep').type(gerar.cep(true, estado));
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga(true));
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul(true));
    cy.get('#fldCartaoCredito').type(gerar.cartaoCredito(true).numero);

    cy.contains('button', 'Enviar').click();
    cy.wait(2000);
  });

  it('Validates data generation according to variables (mask, gender, sexual orientation, state and bank)', () => {
    const mascara = true;
    const genero = 'f';
    const nomeCompleto = gerar.nome.femininoCompleto();
    const estado = "PR";
    const banco = '237';
    const orientacaoSexual = gerar.orientacaoSexual();

    cy.get('#fldNome').type(nomeCompleto);
    cy.get('#fldPai').type(gerar.nome.paiCompleto());
    cy.get('#fldMae').type(gerar.nome.maeCompleto());
    cy.get('#fldApelido').type(gerar.apelido());
    cy.get('#fldEscolaridade').type(gerar.escolaridade());
    cy.get('#fldProfissao').type(gerar.profissao());
    cy.get('#fldCorPele').type(gerar.corPele());
    cy.get('#fldGenero').type(gerar.genero(genero));
    cy.get('#fldOrientacaoSexual').type(orientacaoSexual);
    cy.get('#fldIdentidadeGenero').type(gerar.identidadePorOrientacao(orientacaoSexual));
    cy.get('#fldTipoSanguineo').type(gerar.tipoSanguineo());
    cy.get('#fldDataNascimento').type(gerar.dataNascimento([30,40]));

    // Documentos PJ
    cy.get('#fldCnpj').type(gerar.cnpj(mascara));
    cy.get('#fldInscricaoEstadual').type(gerar.inscricaoEstadual(estado) ?? '');
    cy.get('#fldNomeEmpresa').type(gerar.nomeEmpresa());

    // Documentos PF
    cy.get('#fldCpf').type(gerar.cpf(mascara, estado));
    cy.get('#fldCnh').type(gerar.cnh());
    cy.get('#fldCnhCategoria').type(gerar.cnhCategoria());
    cy.get('#fldRg').type(gerar.rg(mascara));
    cy.get('#fldCns').type(gerar.cns(mascara));
    cy.get('#fldPis').type(gerar.pis(mascara));
    cy.get('#fldTituloEleitor').type(gerar.tituloEleitor(mascara, estado));
    cy.get('#fldPassaporte').type(gerar.passaporte());
    cy.get('#fldCertidaoNascimento').type(gerar.certidao.nascimento(mascara));
    cy.get('#fldCertidaoCasamento').type(gerar.certidao.casamento(mascara));
    cy.get('#fldCertidaoObito').type(gerar.certidao.obito(mascara));

    // Contatos
    cy.get('#fldEmail').type(gerar.email(nomeCompleto));
    cy.get('#fldDdd').type(gerar.ddd(estado));
    cy.get('#fldCelular').type(gerar.celular(mascara, estado));
    cy.get('#fldTelefone').type(gerar.telefone(mascara, estado));

    // Endereços
    const endereco = gerar.endereco(mascara, estado);
    cy.get('#fldLogradouro').type(endereco.logradouro);
    cy.get('#fldNumero').type(endereco.numero);
    cy.get('#fldComplemento').type(endereco.complemento ? endereco.complemento : '-');
    cy.get('#fldBairro').type(endereco.bairro);
    cy.get('#fldLocalidade').type(endereco.localidade);
    cy.get('#fldEstado').type(endereco.estado);
    cy.get('#fldCep').type(endereco.cep);

    // Cartão de Crédito
    const cartaoCredito = gerar.cartaoCredito(mascara, nomeCompleto);
    cy.get('#fldCartaoCredito').type(cartaoCredito.numero);
    cy.get('#fldBandeira').type(cartaoCredito.bandeira);
    cy.get('#fldNomeTitular').type(cartaoCredito.nomeTitular);
    cy.get('#fldCvv').type(cartaoCredito.cvv);
    cy.get('#fldDataExpiracao').type(cartaoCredito.dataExpiracao);

    // Conta Bancária
    const cb = gerar.contaBancaria(banco);
    cy.get('#fldCodigoBanco').type(cb.codigoBanco);
    cy.get('#fldNomeBanco').type(cb.nomeBanco);
    cy.get('#fldAgencia').type(cb.agencia);
    cy.get('#fldAgenciaDv').type(cb.agenciaDv ? cb.agenciaDv : '-');
    cy.get('#fldConta').type(cb.conta);
    cy.get('#fldContaDv').type(cb.contaDv ? cb.contaDv : '-');

    // Banco
    const bancoObj = gerar.banco(banco);
    cy.get('#fldBancoCodigo').type(bancoObj.codigoBanco);
    cy.get('#fldBancoNome').type(bancoObj.nomeBanco);
    cy.get('#fldRazaoSocial').type(bancoObj.razaoSocial);
    cy.get('#fldIspb').type(bancoObj.ispb);

    // Veículo
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga(mascara));
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul(mascara));
    cy.get('#fldRenavam').type(gerar.renavam());

    // Lorem Ipsum
    cy.get('#fldPalavra').type(gerar.palavra());
    cy.get('#fldSentenca').type(gerar.sentenca(15));
    cy.get('#fldParagrafos').type(gerar.paragrafo(3,8));

    cy.contains('button', 'Enviar').click();
    cy.wait(2000);
  });
});