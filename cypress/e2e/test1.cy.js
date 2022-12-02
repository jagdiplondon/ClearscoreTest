describe('Test 1', () => {
    it('We use cookies is present', () => {
      cy.visit('https://www.clearscore.com/')
      cy.get('[data-qa="notification"] p[data-qa="text"]').should('have.text', 'We use cookies to improve your experience.')
    })

    it('We use cookies can be dismissed', () => {
      cy.visit('https://www.clearscore.com/')
      cy.get('.component---Tul5 > .button--qGN2P > .component--TVujP').click()

      // check the "We use cooklies" notification is not present
      cy.get('[data-qa="notification"] p[data-qa="text"]').should('not.exist')
      cy.get('.component---Tul5 > .button--qGN2P > .component--TVujP').should('not.exist')
    })

    
    
  })