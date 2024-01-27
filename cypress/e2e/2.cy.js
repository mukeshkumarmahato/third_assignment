describe('Verify Elements present on login page', () => {

    it('Pre Login test cases of Login Page', () => {
        cy.visit('/')
        cy.get('img').should('exist')                 //logo
        cy.get('.greeting').should('exist')           //Title
        cy.get('.mt-3').contains("मा तपाईंलाई स्वागत छ")  //contains asssertion
        cy.url().should("include", "http://103.69.127.118:9091/")   //url assertion
        cy.get('#hideUnhidePsw').should('exist')                  //input field assertion
        cy.get('.form-control').should('exist')                   //input field 
        cy.get('.login-button').should('exist')                   // login button verification

        
    });
    
});

