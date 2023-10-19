import cypress = require("cypress");

describe("Demo", () => {
    it("loads hot-star", () => {
        cy.visit("https://www.hotstar.com/in/explore")
        cy.get('input[type="text"]').type("white collar").click()

        // cy.get('span').contains('Watch Now').should('not.be.visible')
        // Show headless (cypress run) & video on failure.

        //Show "cypress open" here:
        cy.get('button').click().should('have.text','Watch Now')
        cy.get('span').contains('Continue with Super').should('be.visible')
    })
})