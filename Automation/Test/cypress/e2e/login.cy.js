///<reference types = "cypress"/>

it('abcd', () => { 
   
    cy.visit('https://demoblaze.com/')
    //cy.get('#nava').screenshot('logo')
    //cy.screenshot('ss')

    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type('mukesh112')
    cy.get('#loginpassword').type('mukesh@112')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should('contain','Welcome mukesh112')



    
    // cy.screenshot() 
    // cy.get('#nava').screenshot('logo')


 
 })

