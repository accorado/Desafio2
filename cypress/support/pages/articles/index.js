/// <reference types="cypress" />

const faker = require('faker')

import Routes from '../../routes'
const el = require('./elements').ELEMENTS
class Articles{

    acessarFormularioDeNovaPublicacao(){
        
        cy.get(el.linkNovaPublicacao).click()
    }
    

    preencherFormulario(){
        
          cy.get(el.inputTittle).type('Bootcamp')
          cy.get(el.inputDescription).type('Cypress')
          cy.get(el.textAreaContent).type(faker.lorem.paragraph())
          cy.get(el.inputTags).type('cypress')
    }
    
      submeterPublicacao(){   
       
           cy.get(el.buttonSubmit).click()
        }   
        verificarSeaPublicacaoFoiCriadaComSucesso(){
           
            cy.wait(`@${Routes.as.postArticles}`).then((PostArticles) => {
                expect(PostArticles.response.statusCode).to.eq(200)
               })
            cy.wait(`@${Routes.as.getArticlesTittle}`).then((GetArticlesTittle) => {
                 expect(GetArticlesTittle.response.statusCode).to.eq(200)
               })
             cy.wait(`@${Routes.as.getArticlesTittleComments}`).then((GetArticlesTittleComments) => {
                    expect(GetArticlesTittleComments.response.statusCode).to.eq(200)
               })
        }
        
     }

export default new Articles();