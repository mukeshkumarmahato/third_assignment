
describe.only('', () => {
    // beforeEach (() => {
    //     cy.visit('https://demoblaze.com/')
    //     cy.get('#login2').click()
    //     cy.wait(2000)
    // })
    it('Correct Credentials', () => {
        cy.get('#loginusername').type('mukesh321')
            cy.get('#loginpassword').type('Admin@123')
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            cy.get('#nameofuser').should('contain','Welcome mukesh321')
            cy.wait(5000)
    });
    it('Should not login with incorrect password', () => {
        cy.get('#loginusername').type('mukesh')
        cy.get('#loginpassword').type('Admin@123')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#login2').should('contain','Log in')
        cy.wait(5000)

    });
    it.only('Handling alert in Cypress', function (){
        // launch url
        cy.visit("https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert");
        
        //Running the the code snippet to generate the Popup button
        cy.get('#runbtn').click();
      
        //Accessing the popup button iframe and clicking the popup activation button
        
        //Checking the window alert text
        cy.on('window:alert',(txt)=>{
          //Assertion
          expect(txt).to.contains('I am an alert box!');
       })
      });
}); 