/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
    beforeEach(() => {
        
        cy.backgroundLogin()
            articles.acessarFormularioDeNovaPublicacao()
    });
  
        
    it('Criar uma nova publicação', () => {
        articles.preencherFormulario()
       articles.submeterPublicacao()
       articles.verificarSeaPublicacaoFoiCriadaComSucesso()  
    });    
});
