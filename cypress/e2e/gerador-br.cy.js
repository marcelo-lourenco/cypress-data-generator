import { gerar } from '@box4dev/gerador-br';

Cypress.on('uncaught:exception', () => false);

describe('Gerador-BR Form Tests', () => {
  beforeEach(() => {
    cy.visit('https://box4.dev/pt-br/brasil/formulario-teste/');
    cy.get('#fldNome', { timeout: 15000 }).should('not.be.disabled');
  });

  it('should fill form with generated data without masks', () => {
    // Generate test data
    const testData = {
      nomeCompleto: gerar.nome.aleatorioCompleto(),
      endereco: gerar.endereco(),
      cartaoCredito: gerar.cartaoCredito(),
      contaBancaria: gerar.contaBancaria(),
      banco: gerar.banco()
    };

    // Fill personal information
    cy.get('#fldNome').type(testData.nomeCompleto);
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

    // Fill company documents
    cy.get('#fldCnpj').type(gerar.cnpj());
    cy.get('#fldInscricaoEstadual').type(gerar.inscricaoEstadual() || '');
    cy.get('#fldNomeEmpresa').type(gerar.nomeEmpresa());

    // Fill personal documents
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

    // Fill contact information
    cy.get('#fldEmail').type(gerar.email(testData.nomeCompleto));
    cy.get('#fldDdd').type(gerar.ddd());
    cy.get('#fldCelular').type(gerar.celular());
    cy.get('#fldTelefone').type(gerar.telefone());

    // Fill address information
    cy.get('#fldLogradouro').type(testData.endereco.logradouro);
    cy.get('#fldNumero').type(testData.endereco.numero);
    cy.get('#fldComplemento').type(testData.endereco.complemento || '-');
    cy.get('#fldBairro').type(testData.endereco.bairro);
    cy.get('#fldLocalidade').type(testData.endereco.localidade);
    cy.get('#fldEstado').type(testData.endereco.estado);
    cy.get('#fldCep').type(testData.endereco.cep);

    // Fill credit card information
    cy.get('#fldCartaoCredito').type(testData.cartaoCredito.numero);
    cy.get('#fldBandeira').type(testData.cartaoCredito.bandeira);
    cy.get('#fldNomeTitular').type(testData.cartaoCredito.nomeTitular);
    cy.get('#fldCvv').type(testData.cartaoCredito.cvv);
    cy.get('#fldDataExpiracao').type(testData.cartaoCredito.dataExpiracao);

    // Fill bank account information
    cy.get('#fldCodigoBanco').type(testData.contaBancaria.codigoBanco);
    cy.get('#fldNomeBanco').type(testData.contaBancaria.nomeBanco);
    cy.get('#fldAgencia').type(testData.contaBancaria.agencia);
    cy.get('#fldAgenciaDv').type(testData.contaBancaria.agenciaDv || '-');
    cy.get('#fldConta').type(testData.contaBancaria.conta);
    cy.get('#fldContaDv').type(testData.contaBancaria.contaDv || '-');

    // Fill bank information
    cy.get('#fldBancoCodigo').type(testData.banco.codigoBanco);
    cy.get('#fldBancoNome').type(testData.banco.nomeBanco);
    cy.get('#fldRazaoSocial').type(testData.banco.razaoSocial);
    cy.get('#fldIspb').type(testData.banco.ispb);

    // Fill vehicle information
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga());
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul());
    cy.get('#fldRenavam').type(gerar.renavam());

    // Fill lorem ipsum text
    cy.get('#fldPalavra').type(gerar.palavra());
    cy.get('#fldSentenca').type(gerar.sentenca());
    cy.get('#fldParagrafos').type(gerar.paragrafo());

    // Submit form
    cy.get('[data-testid="button-enviar"]').click();
    
    // Wait for form submission
    cy.wait(3000);
  });

  it('should fill form with generated data with masks', () => {
    // Fill documents with masks
    cy.get('#fldCnpj').type(gerar.cnpj(true));
    cy.get('#fldCpf').type(gerar.cpf(true));
    cy.get('#fldRg').type(gerar.rg(true));
    cy.get('#fldCns').type(gerar.cns(true));
    cy.get('#fldPis').type(gerar.pis(true));
    cy.get('#fldTituloEleitor').type(gerar.tituloEleitor(true));
    cy.get('#fldCertidaoNascimento').type(gerar.certidao.nascimento(true));
    cy.get('#fldCertidaoCasamento').type(gerar.certidao.casamento(true));
    cy.get('#fldCertidaoObito').type(gerar.certidao.obito(true));

    // Fill contact with masks
    cy.get('#fldEmail').type(gerar.email(gerar.apelido()));
    cy.get('#fldDdd').type(gerar.ddd());
    cy.get('#fldCelular').type(gerar.celular(true));
    cy.get('#fldTelefone').type(gerar.telefone(true));

    // Fill address with mask
    const endereco = gerar.endereco(true);
    cy.get('#fldCep').type(endereco.cep);

    // Fill credit card with mask
    const cartaoCredito = gerar.cartaoCredito(true);
    cy.get('#fldCartaoCredito').type(cartaoCredito.numero);

    // Fill vehicles with masks
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga(true));
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul(true));

    // Fill lorem ipsum
    cy.get('#fldPalavra').type(gerar.palavra());
    cy.get('#fldSentenca').type(gerar.sentenca());
    cy.get('#fldParagrafos').type(gerar.paragrafo());

    // Submit form
    cy.get('[data-testid="button-enviar"]').click();
    cy.wait(3000);
  });

  it('should fill form with specific state and no masks', () => {
    const estado = 'SP';

    // Fill documents with specific state
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

    // Submit form
    cy.get('[data-testid="button-enviar"]').click();
    cy.wait(2000);
  });

  it('should fill form with specific state and masks', () => {
    const estado = 'SP';

    // Fill documents with specific state and masks
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

    // Submit form
    cy.get('[data-testid="button-enviar"]').click();
    cy.wait(2000);
  });

  it('should fill form with all parameters', () => {
    const mascara = true;
    const genero = 'f';
    const nomeCompleto = gerar.nome.femininoCompleto();
    const estado = 'PR';
    const banco = '237';
    const orientacaoSexual = gerar.orientacaoSexual();

    // Fill personal information with specific gender
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
    cy.get('#fldDataNascimento').type(gerar.dataNascimento([30, 40]));

    // Fill company documents
    cy.get('#fldCnpj').type(gerar.cnpj(mascara));
    cy.get('#fldInscricaoEstadual').type(gerar.inscricaoEstadual(estado) || '');
    cy.get('#fldNomeEmpresa').type(gerar.nomeEmpresa());

    // Fill personal documents
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

    // Fill contact information
    cy.get('#fldEmail').type(gerar.email(nomeCompleto));
    cy.get('#fldDdd').type(gerar.ddd(estado));
    cy.get('#fldCelular').type(gerar.celular(mascara, estado));
    cy.get('#fldTelefone').type(gerar.telefone(mascara, estado));

    // Fill address information
    const endereco = gerar.endereco(mascara, estado);
    cy.get('#fldLogradouro').type(endereco.logradouro);
    cy.get('#fldNumero').type(endereco.numero);
    cy.get('#fldComplemento').type(endereco.complemento || '-');
    cy.get('#fldBairro').type(endereco.bairro);
    cy.get('#fldLocalidade').type(endereco.localidade);
    cy.get('#fldEstado').type(endereco.estado);
    cy.get('#fldCep').type(endereco.cep);

    // Fill credit card information
    const cartaoCredito = gerar.cartaoCredito(mascara, nomeCompleto);
    cy.get('#fldCartaoCredito').type(cartaoCredito.numero);
    cy.get('#fldBandeira').type(cartaoCredito.bandeira);
    cy.get('#fldNomeTitular').type(cartaoCredito.nomeTitular);
    cy.get('#fldCvv').type(cartaoCredito.cvv);
    cy.get('#fldDataExpiracao').type(cartaoCredito.dataExpiracao);

    // Fill bank account information
    const cb = gerar.contaBancaria(banco);
    cy.get('#fldCodigoBanco').type(cb.codigoBanco);
    cy.get('#fldNomeBanco').type(cb.nomeBanco);
    cy.get('#fldAgencia').type(cb.agencia);
    cy.get('#fldAgenciaDv').type(cb.agenciaDv || '-');
    cy.get('#fldConta').type(cb.conta);
    cy.get('#fldContaDv').type(cb.contaDv || '-');

    // Fill bank information
    const bancoObj = gerar.banco(banco);
    cy.get('#fldBancoCodigo').type(bancoObj.codigoBanco);
    cy.get('#fldBancoNome').type(bancoObj.nomeBanco);
    cy.get('#fldRazaoSocial').type(bancoObj.razaoSocial);
    cy.get('#fldIspb').type(bancoObj.ispb);

    // Fill vehicle information
    cy.get('#fldPlacaAntiga').type(gerar.placaAntiga(mascara));
    cy.get('#fldPlacaMercosul').type(gerar.placaMercosul(mascara));
    cy.get('#fldRenavam').type(gerar.renavam());

    // Fill lorem ipsum text
    cy.get('#fldPalavra').type(gerar.palavra());
    cy.get('#fldSentenca').type(gerar.sentenca(15));
    cy.get('#fldParagrafos').type(gerar.paragrafo(3, 8));

    // Submit form
    cy.get('[data-testid="button-enviar"]').click();
    cy.wait(2000);
  });
});
