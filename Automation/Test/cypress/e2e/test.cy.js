
it('abcd', function(){
    cy.visit('https://demoblaze.com/')
    cy.get('#signin2').click()


    cy.get('#sign-username').type(userID_Alpha())
    function userID_Alpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    cy.wait(2000)
    return text;
    
    }
    //cy.get('#sign-password').type('757t465')
    ///cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })