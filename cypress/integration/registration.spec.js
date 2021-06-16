describe('Test register tab', () => {
  it('Testing form is valid', () => {
    cy.visit('http://localhost:3000/registration')

    const email = 'algoritm211@gmail.com'
    const name = 'Alexey Horbunov'
    const selectedValue = 'Психолог'

    cy.get('#email')
      .type(email)

    cy.get('#name')
      .type(name)

    cy.ionicSelect('category', selectedValue)

    cy.get('[type=submit]').should('not.be.disabled')
  })
})


export {}
