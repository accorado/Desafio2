class Routes{

    as = {
        postArticles: 'POSTArticles',
        getArticlesTittle: 'GETArticlesTittle',
        getArticlesTittleComments: 'GETArticlesTittleComments',
        postCadastroDados: 'POSTCadastroDados',
        getCadastroEfetuado:'GETCadastroEfetuado',
        getCadastroLoadingArticles:'GETCadastroLoadingArticles',
        postLogin:'POSTLogin',
        getLoginSucesso: 'GETLoginSucesso',
        getLoginArticles: 'GETLoginArticles'

        }

init(){
    cy.intercept( 'POST', '**/api/articles**').as(this.as.postArticles);        
    cy.intercept('GET', '**/api/articles/bootcamp-**').as(this.as.getArticlesTittle);
    cy.intercept( 'GET', '**/api/articles/bootcamp-**/comments**').as(this.as.getArticlesTittleComments);
    
    //Cadastro e Login
    cy.intercept('POST', '**/api/users').as(this.as.postCadastroDados);
    cy.intercept('POST', '**/api/users/**').as(this.as.postLogin);
    cy.intercept('GET', '**/api/tags').as(this.as.getCadastroEfetuado);
    cy.intercept('GET', '**/api/articles/feed?**').as(this.as.getCadastroLoadingArticles);
    
    
}



}
export default new Routes();
