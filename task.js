/// <reference types="cypress" />

describe('CSS', () => {
    it('should open the URL, Search Product, Add to Cart, PaymentCompletation', () => {

        cy.openUrlWithViewport('https://www.weightworld.uk/');
  
        cy.searchingForProduct();

        cy.ClickonShoppingcart();

        cy.ClickonSecureCheckout();

        cy.ProceedTocheckout();

        cy.PaymentPageDeatils();

        cy.log('Test_Complete')
      
    });
  });
  