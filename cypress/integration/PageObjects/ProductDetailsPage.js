import HomePage from '../PageObjects/HomePage.js'

class ProductDetailsPage {

    clickAddToCartButtononPDP(){
        const button=cy.get('#add-to-cart-button')
        button.click()
        cy.wait(2000)
        HomePage.clickHomeLogo()

    }
  }

export default new ProductDetailsPage ()