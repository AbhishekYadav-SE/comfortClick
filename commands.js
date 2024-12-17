Cypress.Commands.add('openUrlWithViewport', (url) => {
    cy.visit(url);           // Visit the provided URL
    cy.viewport(1920, 1080); // Set the viewport size to 1920x1080
  });


  // cypress/support/commands.js

Cypress.Commands.add('searchingForProduct', () => {
    // Click on the cookie accept button
    cy.get('#cookiescript_accept').click();
  
    // Type 'w' into the search input field
    cy.xpath("//input[@id='algo_search'][1]").type('w');
    cy.get(".btn.btn-secondary.btn-ww-search.shadow-none.text-white.btn-block.arrowRight.ml-1").first().click() // 1st item Add to basket
  });

Cypress.Commands.add('ClickonShoppingcart', () => {
    // Click on Shopping Cart button
    cy.get("img[height='20'][width='25']").click() 
    // Verify through Assertions
    cy.get('.cartProd-name').first().should('include.text', 'WeightWorld Purified Shilajit Resin 50g');

});

Cypress.Commands.add('ClickonSecureCheckout', () => {

    cy.get(".btn.btn-basketGreen.arrowRight[href='/checkout/your-basket']").click({force:true})
    // Verify through Assertions
    cy.url().should('include', 'https://www.weightworld.uk/checkout/your-basket')
});

Cypress.Commands.add('ProceedTocheckout', ()=> {
    cy.get("button[type='submit']").click({force:true})
    // Verify through Assertions
    cy.url().should('include', 'https://www.weightworld.uk/checkout/onepagebasket')
});

Cypress.Commands.add('PaymentPageDeatils', ()=> {
    cy.xpath("//*[@id='email']").type("Abc@gmail.com")
    cy.get('#del_firstname').type("Abhishek")
    cy.get("#del_lastname").type("Yadav")
    cy.get("#del_country_title > .ddlabel").click().type("Gurgaon").type("{Enter}")
    cy.get('#del_add1').type("Gurgaon")
    cy.get('#del_add2').type("Haryana")
    cy.get('#del_city').type("DLFCyberCity") //122008
    cy.get('#del_zipcode').type("12208")
    cy.get('#del_mobile').type("1234567890")
    cy.get('#shipping_83').click() // Delivery Details
    cy.get('#paymentId_24').click() // Payment Details
    cy.get('#place-order').click() // ClickOn Next




});
  