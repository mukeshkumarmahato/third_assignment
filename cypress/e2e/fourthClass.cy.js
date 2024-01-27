///<reference types = "cypress"/>
describe("API Automation Testing", ()=>{

    it("First API", ()=>{
        cy.request({
            method : "GET",
            url : 'https://reqres.in/api/users/2'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data.first_name).to.eq('Janet')
            expect(response.body.data.last_name).to.eq('Weaver')
            const firstName = response.body.data.first_name
            const lastName = response.body.data.last_name
            cy.log(firstName)
            cy.log(lastName)
        })
    })

    it('Second API', () => {

        cy.request({
            method : "GET",
            url : 'https://reqres.in/api/unknown/2'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.name).to.eq('fuchsia rose')
            expect(response.body.support.url).to.eq('https://reqres.in/#support-heading')
            const FullName = response.body.data.name
            cy.log(FullName)
        })
        
    });

    it("Third API", ()=>{
        cy.request({
            method : "GET",
            url : 'https://reqres.in/api/unknown'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data[1].id).to.eq(2)
            expect(response.body.data[1].year).to.eq(2001)
            expect(response.body.data[1].color).to.eq('#C74375')
            expect(response.body.data[1].pantone_value).to.eq('17-2031')
            const year = response.body.data[1].year
            const color = response.body.data[1].color
            const pantone_value = response.body.data[1].pantone_value
            cy.log(year)
            cy.log(color)
            cy.log(pantone_value)
        })
    })
})