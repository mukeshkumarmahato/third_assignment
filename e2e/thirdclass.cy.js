///<reference types = 'cypress'/>

describe('Assignment of Third Class', () => {

        it('cypress env using Json approach', () => {
            cy.visit(Cypress.env("Stagging"));                    //Cypress environment (using json approach)

            cy.intercept("GET", "**/auth/realms/**").as("wait")   
            cy.wait("@wait")                                                     //Intercept Before Login
        
        //cy.pause()

        cy.get('input[name="username"]').type('142037')     
        cy.get('input[type="password"]').type('Admin@123')
        cy.get('.login-button').click()                            
        cy.get('.d-none').should('exist')                         
        cy.get('.lang').click()
        cy.intercept("GET", "**/attendance/dashboard/get-dashboard").as("afterLogin")
        cy.wait("@afterLogin")                                                     //Intercept After Login
        
        cy.get('[href="#/e-attendance/apply-leave"]').should('exist')
        .click()
        
        
        cy.get('.ic-user').should("exist").click()
        cy.get('.css-zqovoj-menu').should("be.visible").contains('Prem').click()  //Dropdown

        cy.get('#attachStoredFile')
        .selectFile("cypress/fixtures/thirdClass.pdf",{force: true})  //File Upload
        
    });
            
        });
        
    
    