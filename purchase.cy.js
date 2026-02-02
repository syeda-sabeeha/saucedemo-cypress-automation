describe('Sauce Demo Purchase Flow', () => {

  it('should login and purchase a product successfully', () => {

    // 1. Open the website
    cy.visit('https://www.saucedemo.com/')

    // 2. Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // 3. Verify products page
    cy.url().should('include', 'inventory')

    // 4. Add product to cart
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    // 5. Go to cart
    cy.get('.shopping_cart_link').click()

    // 6. Checkout
    cy.get('#checkout').click()

    // 7. Enter checkout information
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('User')
    cy.get('#postal-code').type('12345')
    cy.get('#continue').click()

    // 8. Finish purchase
    cy.get('#finish').click()

    // 9. Assertion - verify order success
    cy.get('.complete-header')
      .should('have.text', 'Thank you for your order!')

  })

})
