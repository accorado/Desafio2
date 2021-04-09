/// <reference types="cypress" />


import Routes from '../../routes'
const faker = require('faker')
const el = require('./elements').ELEMENTS


    class Cadastro{

    acessarLogin(){
        cy.visit('register');
    }

    preencherCadastro(){
        cy.get(el.inputUserName).type(faker.name.firstName() + faker.name.lastName())
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(12345678);
    }

    submeterCadastro(){
        cy.get(el.buttonSubmit).click();
    }

    
    verificarCadastrocomSucesso(){
        cy.wait(`@${Routes.as.postCadastroDados}`).then((POSTCadastroDados) => {
            expect(POSTCadastroDados.response.statusCode).to.eq(200)
               })
        cy.wait(`@${Routes.as.getCadastroEfetuado}`).then((GETCadastroEfetuado) => {
            expect(GETCadastroEfetuado.response.statusCode).to.eq(200)
               })
        cy.wait(`@${Routes.as.getCadastroLoadingArticles}`).then((GETCadastroLoadingArticles) => {
            expect(GETCadastroLoadingArticles.response.statusCode).to.eq(200)
               })
        }
    }


export default new Cadastro();