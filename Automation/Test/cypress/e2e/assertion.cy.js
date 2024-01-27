///
it('abcd', function(){
    cy.visit('https://demoblaze.com/')
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type('mukesh321')
    cy.get('#loginpassword').type('Admin@123')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    cy.get('#nameofuser').should('contain','Welcome mukesh3212')

})