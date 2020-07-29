

class HomePage {


visit (){

    return cy.visit("https://www.amazon.com/")
}

clickHomeLogo(){
    const button=cy.get('.nav-logo-link')
    button.click()
}


enterKeyWordToSearch(value) {
    const serachbox=cy.get('#twotabsearchtextbox')
    serachbox.type(value)
    return this
}

clickSearchButton(){
    const button=cy.get('.nav-search-submit > .nav-input')
    button.click()
}

selectItemFromPLP(){
    const selectitem=cy.get('[data-asin="B01A9ZKRIA"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image')
    selectitem.click()
}

clickAddToCartButtononPDP(){
    const button=cy.get('#add-to-cart-button')
    button.click()
}
clickYourAddressLink(){
    const button=cy.get('#glow-ingress-line2')
    button.click()
    cy.get('#a-popover-header-3').should('contain', 'Choose your location')
    cy.wait(3000)
}

clickDoneButtonToCloseSelectMyAddressModal(){
    
    const button=cy.get('[name="glowDoneButton"]')
    button.click()

}
}
export default new HomePage()
