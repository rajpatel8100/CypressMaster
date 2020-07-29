
import HomePage from '../PageObjects/HomePage.js'
import ProductListPage from '../PageObjects/ProductListPage.js'
import ProductDetailsPage from '../PageObjects/ProductDetailsPage.js'


describe('Regression test', () => {


    beforeEach(function () {
        cy.fixture('testdata').then(function(data){
         this.data=data
        })

    })

    it('Item search!!', function() {
    
      HomePage.visit()
      HomePage.enterKeyWordToSearch(this.data.itemname)
      HomePage.clickSearchButton()
      ProductListPage.selectItemFromPLP()
      ProductDetailsPage.clickAddToCartButtononPDP()
      
      }) 

    it('Select your address', function() {
    
        HomePage.visit()
        HomePage.clickYourAddressLink()
        HomePage.clickDoneButtonToCloseSelectMyAddressModal()
        
      })
      
}) 