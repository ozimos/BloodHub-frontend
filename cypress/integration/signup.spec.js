
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Navigation').click()
    })
  