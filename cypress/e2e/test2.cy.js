describe('Test 2 - Login API', () => {
    it('Valid login', () => {
      cy.visit('https://www.clearscore.com/')
      cy.get('a').contains('Log in').click()
      cy.get('#email').type('studylondon2005@yahoo.com')
      cy.get('#password').type('Admin123@')
      cy.get('button[type="submit"]').should('be.visible').click()
    })

    

    // it('Invalid login', () => {
    //     cy.visit('https://www.clearscore.com/')
    //     cy.get('a').contains('Log in').click()
    //     cy.get('#email').type(' ').blur()
    //     cy.get('.criteria_module_component__e8a4e104 > .text_module_component__a5ef3c4a').should('have.text', 'Required field')
    //     cy.get('#password').type(' ')
    //     cy.get('.button_module_button__ee8dc7c3').should('be.disabled')
    //   })

    
    
  })