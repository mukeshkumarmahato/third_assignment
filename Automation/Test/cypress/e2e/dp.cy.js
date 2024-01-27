///<reference types = "cypress"/>
describe('Dropdown', ()=>
    {
        it('Dropdown',()=>{
            cy.visit('https://codenboxautomationlab.com/practice/')
            cy.wait(1000)
             //radio button
             cy.get('.radioButton').eq(1).click()
            

            //checkbox
            cy.get('#checkBoxOption2').click()

            //static Dropdown
            cy.get('#dropdown-class-example').select('API')

            
              
            //dynamic Dropdown
            cy.get('#autocomplete').type('can')

            
            cy.get('.ui-menu-item').each(($e1, index, $list) =>{
                if ($e1.text() ==='Canada'){
                    cy.wrap($e1).click()
                }
            })
        })
    })