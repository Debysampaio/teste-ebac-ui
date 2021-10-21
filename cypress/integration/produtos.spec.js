/// <reference types="cypress" />

describe('Funcionalidade pagina de produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[data-product-id')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {

            var quantidade =3
            cy.get('[data-product-id')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Purple').click()
            cy.get('.input-text').clear(2).type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
            cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });

});