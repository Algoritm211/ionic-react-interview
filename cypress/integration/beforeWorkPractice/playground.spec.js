describe('Playground tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
  })
  before(() => {
    cy.then(() => {
      window.localStorage.setItem('__auth__token', Cypress.env('token'))
    })
  })
  it('Should open playground correctly', () => {
    cy.visit('https://codedamn.com/playground/html')
    cy.log('Checking load in the left bar')
    cy.contains('Trying to connect').should('exist')

    cy.log('Checking load playground files')
    cy.contains('Trying to connect').should('exist')
    cy.contains('Trying to connect', { timeout: 10000 }).should('not.exist')
  })

  it('creating new file works', () => {
    cy.visit('https://codedamn.com/playground/html')
    cy.contains('Setting up your environment').should('exist')
    cy.contains('Setting up your environment', { timeout: 60000 }).should('not.exist')
    cy.get('.xterm-cursor-layer')
      .type('{ctrl}{c}')
      .type('touch test.js{enter}')

    cy.contains('test.js').should('exist')
  })

  before(() => {
    cy.visit('https://codedamn.com/playground/html')
    cy.contains('Setting up your environment').should('exist')
    cy.contains('Setting up your environment', { timeout: 60000 }).should('not.exist')
  })
  it.only('Test rename the file in playground', () => {
    cy.contains('script.js').rightclick()
    cy.contains('Rename File').click()
    cy.get('[data-testid=renamefilefolder]').type('index.js{enter}')
    cy.contains('index.js').should('exist')
    cy.contains('script.js').should('not.exist')
  })
})
