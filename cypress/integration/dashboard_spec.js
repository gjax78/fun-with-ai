describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', { 
      fixture: 'response.json' 
    })
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
      .select('Curie - Less capable, but fast')
    cy.get('.prompt-input')
      .type('Type prompt here')
    cy.get('.submit-button')
      .contains('Submit')
  })

  it('should display the AI\'s responses underneath the form', () => {
    cy.get('.responses-header')
      .contains('Responses')
  })

  it('should display a message if the user has not yet submitted a prompt', () => {
    cy.get('.response-container')
      .contains('Type in a prompt to see some responses from the AI.')
  })

  it('should display a message if the user has not selected an engine', () => {
    cy.get('.submit-button')
      .click()
    cy.get('.error')
      .contains('Please select an AI engine from the dropdown.')
      .should('not.contain', 'Please type a prompt in to get started.')
  })

  it('should display a message if the user has not typed in a prompt', () => {
    cy.get('select')
      .select('Curie - Less capable, but fast')
    cy.get('.submit-button')
      .click()
    cy.get('.error')
      .contains('Please type a prompt in to get started.')
      .should('not.contain', 'Please select an AI engine from the dropdown.')
  })

  it('should be able to send a prompt to the AI engine', () => {
    cy.get('select')
      .select('Curie - Less capable, but fast')
    cy.get('.prompt-input')
      .type('Type prompt here')
    cy.get('.submit-button')
      .click()
  })

  it('should display the AI engine\'s response once the form has been validated and the user submits', () => {
    cy.get('select')
      .select('Curie - Less capable, but fast')
    cy.get('.prompt-input')
      .type('Type prompt here')
    cy.get('.submit-button')
      .click()
    cy.get('.prompt-title')
      .contains('Prompt')
    cy.get('.response-title')
      .contains('Response')
    cy.get('.prompt')
      .contains('Type prompt here')
    cy.get('.response')
      .contains('1. She is passionate about the work that Shopify is doing and wants to help make commerce better for everyone. 2. She thrives in ambiguous situations. 3. She always has cute cat photos readily available.')
  })

  it('should clear the form once the form has been validated and the user submits', () => {
    cy.get('select')
      .select('Curie - Less capable, but fast')
    cy.get('.prompt-input')
      .type('Why should you consider Geena Jackson as your next Front End Developer Intern?')
    cy.get('.submit-button')
      .click()
    cy.get('.prompt-title')
      .contains('Prompt')
    cy.get('.response-title')
      .contains('Response')
    cy.get('.prompt')
      .contains('Why should you consider Geena Jackson as your next Front End Developer Intern?')
    cy.get('.response')
      .contains('1. She is passionate about the work that Shopify is doing and wants to help make commerce better for everyone. 2. She thrives in ambiguous situations. 3. She always has cute cat photos readily available.')
    cy.get('select')
      .contains('Choose an AI Engine')
    cy.get('.prompt-input')
      .should('be.empty')
  })
})