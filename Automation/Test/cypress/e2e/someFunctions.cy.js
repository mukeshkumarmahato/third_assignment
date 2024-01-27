///<reference types = "cypress"/>

it('abcd', function(){
    cy.visit("https://www.google.com/")
    cy.wait(500)
    cy.get('#APjFqb').type('info developers').type('{enter}')
    cy.wait(3000)    
    cy.scrollTo("bottom")
    cy.wait(3000)
    cy.scrollTo("top")
    cy.wait(3000)
    cy.go('back')
    
    cy.go('forward')
    
    })
