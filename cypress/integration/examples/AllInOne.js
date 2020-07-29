describe('Sample test', () => {

    beforeEach(function () {
        cy.fixture('testdata').then(function(data){
         this.data=data
         
        })

    })

    it.skip('Item search!!', function() {

    cy.visit("https://www.amazon.com/")
    cy.get('#twotabsearchtextbox').type(this.data.itemname)
    cy.get('.nav-search-submit > .nav-input').click()
    
})

   it.skip('Try catch Login Test!!', function() {

    cy.visit("https://app.hubspot.com/login",{failOnStatusCode: false})
    cy.get('#username').type('raj')
    

  })

  it.skip('Dropdown select option', function() {

    cy.visit("https://www.google.com")
    cy.get("[name='q']").type('cypress')
    cy.get('.erkvQe')
    .find('li span')
    .contains('cypress mulch').click()
    

  })

  it.skip('Hover', function() {

    cy.visit("https://www.spicejet.com/")
    cy.contains('Login / Signup').trigger('mouseover')
    cy.contains('SpiceClub Members').trigger('mouseover')
    cy.contains('Sign up').click()
  })

  it.skip('Hover and click', function() {

    cy.visit("http://automationpractice.com/index.php")
    cy.wait(3000)
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line').trigger('mouseover')
    cy.get('.ajax_add_to_cart_button').first().click()
    cy.get('.cross').click()
    cy.wait(3000)
    cy.get('.cart_block').should('be.hidden').invoke('show')
    cy.get('#button_order_cart').click()
    cy.url().should('include','controller=order')
  })

  it.skip('Click Checkbox', function() {

    cy.visit("http://automationpractice.com/index.php")
    cy.get('.sf-with-ul').first().click()
    cy.get('.checkbox').check().parent().should('have.class','checked')
  })

  it('Force click', function() {

    cy.visit("https://www.snapdeal.com/")
    cy.get('#inputValEnter').type('Laptop')
    cy.get('.searchTextSpan').click()
    cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force: true})
    cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('have.checked', 'checked')
  })
      
}) 


    