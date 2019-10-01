describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("contains a calculator", () => {
        cy.get('#calculator').should('exist');
    })
})