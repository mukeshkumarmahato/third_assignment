describe('Test Login Functionality of GIOMS', () => {                  //describe
    beforeEach(() => {                                                 //beforeEach Hook
        cy.visit('/')
    });

    afterEach(() => {
        cy.log('Please teach me about custom Command')                   //afterEach Hook
    });

    it('Invalid username and Invalid Password', () => {                //it
        cy.get('.form-control').eq(0).as('username')                 //alias
        cy.get('@username').type('142142', {delay:100})              //delay
        cy.get('.form-control').eq(1).as('password')
        cy.get('@password').type('12345')
        cy.get('.login-button').click() 
    });

    it('valid username and Invalid Password', () => {                
        cy.get('input[name="username"]').type(142037, {delay:90})     
        cy.get('input[name="password"]').type('12345')
        cy.get('.login-button').click() 
        cy.get('.message-text').should('exist').and("have.text", 'पाईको प्रयोगकर्ता कोड वा पासवर्ड मिलेन ।')  // chain asserion
        //cy.pause()                                                         //pause
    });

    it.skip('Invalid username and valid Password', () => {                  //skip          
        cy.get('input[name="username"]').type('142142', {delay:80})     
        cy.get('input[type="password"]').type('Admin@123')
        cy.get('.login-button').click() 
    });

    it('Back, Forward', () => {
         cy.go('back')                   //back
         cy.go('forward')                //forward
        
    });


    it('Empty username and valid Password', () => {                     
        cy.get('input[type="password"]').type('Admin@123')
        cy.get('.login-button').click() 
    });

    it.only('valid username and Empty Password', () => {                
        cy.get('input[name="username"]').type('       ', {delay:50})     
        cy.get('.login-button').click() 
    });

    it.skip('Empty username and Empty Password', () => {                //skip 
        cy.get('.login-button').click() 
    });

    it('valid username and valid Password', () => {                //only
        cy.get('input[name="username"]').type('142037')     
        cy.get('input[type="password"]').type('Admin@123')
        cy.get('.login-button').click()                            //Post Login
        cy.get('.d-none').should('exist')                         //title assertion
        cy.url().should("eq", "http://103.69.127.118/#/e-attendance/dashboard")   //url assertion
    });
    
});