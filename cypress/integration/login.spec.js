/// <reference types="cypress" />

import login from '../support/pages/login'


context('Login',() => {
    it('Finalizar login com sucesso', () => {
 
    login.acessarLogin()
    login.preencherFormulario()
    login.submeterFormulario()
    login.verificarFormulario()


        
    });
});