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

  it('should contain a dropdown, text input box, and a submit button', () => {
    cy.get('select')
      .select('Curie - CAPABLE & FAST')
    cy.get('.prompt-input')
      .type('Type prompt here')
    cy.get('.submit-button')
      .contains('Submit')
  })

  it('should display the AI\'s responses underneath the form', () => {
    cy.get('.responses-header')
      .contains('Responses')
  })

  it('should display a sentence telling the user what to do if they have not yet submitted a prompt', () => {
    cy.get('.response-container')
      .contains('Type in a prompt to see some responses from the AI.')
  })

  it('should display a message if the user has not selected an engine', () => {
    cy.get('.submit-button')
      .click()
    cy.get('.error')
      .contains('Please select an AI engine from the dropdown.')
  })

  it('should display a message if the user has not typed in a prompt', () => {
    cy.get('select')
      .select('Curie - CAPABLE & FAST')
    cy.get('.submit-button')
      .click()
    cy.get('.error')
      .contains('Please type a prompt in to get started.')
  })
})