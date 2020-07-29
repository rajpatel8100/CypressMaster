describe('Bedbath Test', () => {

    beforeEach(function () {
        cy.fixture('testdata').then(function(data){
         this.data=data
         
        })

    })

    it('Hover', function() {

        cy.visit("https://www.bedbathandbeyond.com/")
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
      })
    
})

   


      



    