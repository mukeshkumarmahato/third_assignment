

it('abcd', function()

{
    cy.visit('www.google.com')
    cy.get('#APjFqb').type('Kathmandu').type('{enter}')
    cy.scrollTo("bottom")
    cy.wait(2000)
    cy.scrollTo("top")
    cy.go("back")
    cy.go("forward")
})