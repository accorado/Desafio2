/// <reference types="cypress" />

import Routes from '../../routes'
const el= require('./elements').ELEMENTS
class Login{

    acessarLogin(){
        cy.visit('login');
    }

    preencherFormulario(){
         
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }   

    submeterFormulario(){
        cy.get(el.buttonSubmit).click();
   
    }   

    verificarFormulario(){
        cy.wait(`@${Routes.as.postLogin}`).then((POSTLogin) => {
            expect(POSTLogin.response.statusCode).to.eq(200)
               })
        cy.wait(`@${Routes.as.getCadastroEfetuado}`).then((GETCadastroEfetuado) => {
            expect(GETCadastroEfetuado.response.statusCode).to.eq(200)
               })
        cy.wait(`@${Routes.as.getCadastroLoadingArticles}`).then((GETCadastroLoadingArticles) => {
            expect(GETCadastroLoadingArticles.response.statusCode).to.eq(200)
               })
        
    }

}
      


export default new Login();