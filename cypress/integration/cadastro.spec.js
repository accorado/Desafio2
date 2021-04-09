/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'
import Routes from '../support/routes'

const faker = require('faker')
context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cadastro.acessarLogin();
        cadastro.preencherCadastro();
        cadastro.submeterCadastro();
        cadastro.verificarCadastrocomSucesso();

      

    });
});