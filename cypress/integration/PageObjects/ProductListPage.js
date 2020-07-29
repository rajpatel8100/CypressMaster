class ProductListPage {

    selectItemFromPLP(){
        const selectitem=cy.get('[data-asin="B01A9ZKRIA"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image')
        selectitem.click()
    }
  }

export default new ProductListPage ()