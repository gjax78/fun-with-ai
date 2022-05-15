describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', 
    { fixture: 'response.json' })
    cy.visit('http://localhost:3000/');
  })

  it('should display a title and form on page load', () => {
    cy.get('h1')
      .contains('Fun with AI')
      .get('form')
      .should('be.visible')
  })


})