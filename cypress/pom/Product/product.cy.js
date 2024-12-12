export default class ProductPom {
  static visitPage() {
    cy.visit("https://demoblaze.com/index.html");
  }

  static filteringLaptops() {
    cy.get(".list-group-item").eq(2).click();
  }

  static filteringPhones() {
    cy.get(".list-group-item").eq(1).click();
  }

  static filteringMonitors() {
    cy.get(".list-group-item").eq(3).click();
  }

  static selectProduct() {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
  }

  static showDetailProduct() {
    cy.get ('[class="product-content product-wrap clearfix product-deatil"]').should('be.visible')
  }

  static nextButton() {
    cy.get("#next2").click();
  }

  static prevButton() {
    cy.get("#prev2").click();
  }
}
