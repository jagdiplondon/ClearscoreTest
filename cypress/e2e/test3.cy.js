describe('Test 3 - ', () => {

    

    it('Email address is required', () => {
        cy.visit('https://www.clearscore.com/')
        cy.get('a').contains('Sign up').click()
        cy.get('#email').type(' ').blur()
        cy.get('.criteria_module_component__e8a4e104 > .text_module_component__a5ef3c4a').should('have.text', 'Required field')
       
      })

    
      
       
        
       
        
        
        
        it('Valid email address', () => {
          cy.visit('https://www.clearscore.com/')
          cy.get('a').contains('Sign up').click()
          
            cy.get('#email').type('test1234yahoo.com').blur()
            cy.get('.criteria_module_component__e8a4e104 > .text_module_component__a5ef3c4a').should('have.text', 'Please enter a valid email address')
            cy.get('.button_module_button__ee8dc7c3 > .text_module_component__a5ef3c4a').wait(2000).click()
          
          
        })

        it('Valid email address and get redirected to registeration page', () => {
            cy.visit('https://www.clearscore.com/')
            cy.get('a').contains('Sign up').click()
            
              cy.get('#email').type('test1234@yahoo.com')
              cy.get('.button_module_button__ee8dc7c3 > .text_module_component__a5ef3c4a').click()
            
            
          })
    
        
    
        
    
        
        

        

      })
