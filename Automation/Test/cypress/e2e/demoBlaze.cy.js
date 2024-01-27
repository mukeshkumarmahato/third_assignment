///<reference types ="cypress"/>
    
describe('login_testCase',()=> 
{
    beforeEach(() => {

        cy.visit('https://demoblaze.com/')
        cy.get('#login2').click()
        cy.wait(2000)
      
    })

it('incorrect credentials',()=>{
    cy.get('#loginusername').type('mukesh111')
    cy.get('#loginpassword').type('muk@1234')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(500)
    cy.get('#login2').should('contain','Log in')
    
    })
    
    it('incorrect password',()=>{
        cy.get('#loginusername').type('mukesh112')
        cy.get('#loginpassword').type('muk@1234')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(500)
        cy.get('#login2').should('contain','Log in')
         })
    
         it('empty username',()=>{
            cy.get('#loginusername').clear()
            cy.get('#loginpassword').type('mukesh@112')
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            cy.wait(500)
            cy.get('#login2').should('contain','Log in')
    
             })
             it('empty password',()=>{
                cy.get('#loginusername').type('mukesh112')
                cy.get('#loginpassword').clear()
                cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
                cy.wait(500)
                cy.get('#login2').should('contain','Log in')
        
                 })
             it('both empty',()=>{
                cy.get('#loginusername').clear()
                cy.get('#loginpassword').clear()
                cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
                cy.wait(500)
                cy.get('#login2').should('contain','Log in')
    
                 })
    
                 it('valid credentials',()=>{
                    cy.get('#loginusername').type('mukesh112')
                    cy.get('#loginpassword').type('mukesh@112')
                    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
                    cy.wait(500)
                    cy.get('#nameofuser').should('contain','Welcome mukesh112')
                     })}
)

