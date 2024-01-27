describe('API GET REQUEST', () => {
    it('POST ', () => {
        cy.request({
            method: "POST",
            url: 'https://reqres.in/api/users',
            body: {
                name: "Ranjan Dhakal",
                job: "QA",
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('Ranjan Dhakal')
            expect(response.body.job).to.eq('QA')
        })
    });
});


///<reference types = "cypress"/>
describe("First class assignment", () => {

    it('POST Method', () => {

        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/api-clients",
            body: {
                "clientName": "Mukesh Mahato",
                "clientEmail": "mukeshm@gmail.com"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
        })

    });
})