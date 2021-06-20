describe('Advanced options on desktop', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
  })
  it('Login page looks good', () => {
    cy.visit('https://codedamn.com')

    cy.contains('Sign In').click()

    cy.contains('Sign in to your account').should('exist')
  })

  it('Test login page links work', () => {
    cy.visit('https://codedamn.com/login')

    cy.contains('Forgot your password').click()
    cy.url().should('include', '/password-reset')
    cy.url().then((value) => {
      cy.log(`URL right now: ${value}`)
    })
    cy.go('back')

    cy.contains('try codedamn Pro risk-free 7 days').click()
    cy.url().should('include', '/pricing')
    cy.url().then((value) => {
      cy.log(`URL right now: ${value}`)
    })
    cy.go('back')
  })

  it('Testing the correct error of login', () => {
    cy.visit('https://codedamn.com/login')

    cy.contains('Unable to authorize').should('not.exist')

    cy.get('[data-testid=username]').type('admin')
    cy.get('[data-testid=password]').type('admin')
    cy.get('[data-testid=login]').click()

    cy.contains('Unable to authorize').should('exist')
  })

  it('Testing the correct work of login', () => {
    cy.visit('https://codedamn.com/login')
    const { userName, password } = Cypress.env()
    cy.get('[data-testid=username]').type(userName)
    cy.get('[data-testid=password]').type(password)
    cy.get('[data-testid=login]').click()

    cy.url().should('include', '/dashboard')
  })

  before(() => {
    cy.then(() => {
      window.localStorage.setItem('__auth__token', Cypress.env('token'))
    })
  })

  it.only('Should have user menu', () => {
    cy.visit('https://codedamn.com')
    cy.get('[id=user-menu]').click()

    cy.contains('Log out').should('exist')
  })
})
