/// <reference types='Cypress'/>
describe('Product List Test',()=>{
    it('should print the names of all products',()=>{
        cy.viewport(1920, 1080); 
        cy.visit("https://www.weightworld.uk/")
        cy.get("a[title='Superfoods']").click()
        cy.get("a[title='Ashwagandha'] span[class='cName']").click({force:true})

        cy.get(".product-name.text-secondary.text-black")
        .should('have.length', 3)  
        .each(($el) => {
        const itemName = $el.text().trim();
        cy.log(itemName)
    })
})
})