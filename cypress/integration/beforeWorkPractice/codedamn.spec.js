
describe('Basic unauthenticated tests', () => {
  beforeEach(() => {
    cy.visit('https://codedamn.com/')
  })
  it('Basic tests for find existing of some elements', () => {
    cy.contains('The Perfect Practice Environment')

    cy.get('div#root').should('exist')
    cy.get('div#noroot').should('not.exist')
    cy.get('[data-testid="main-title"]').should('exist')
  })

  it('viewport change', () => {
    cy.viewport('iphone-se2')
  })
})
