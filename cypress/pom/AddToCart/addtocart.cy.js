export default class AddToCartPom {
  static addToCartProduct() {
    cy.get(".btn.btn-success.btn-lg").click();
  }

  static viewCart() {
    cy.get('.nav-link').eq(3).click();
  }

  static viewProductinCart() {
    cy.get('.success > :nth-child(1)').should('be.visible');
  }

  static placeOrder() {
    cy.get('.col-lg-1 > .btn').click();
  }

  static inputName() {
    cy.get("#name").click().type("Tan").type("Jung").type("Putri");
}

static inputCountry() {
    cy.get("#country").click().type("Amerika")
}

static inputCity() {
    cy.get("#city").click().type("Jakarta Selatan")
}

static inputCard() {
    cy.get("#card").click().type("1100676")
}

static inputMonth() {
    cy.get("#month").click().type("June")
}

static inputYear() {
    cy.get("#year").click().type("2025")
}

static purchaseButton() {
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
}

static successMessage() {
    cy.get('.sweet-alert').should('be.visible');
}
static confrimButton() {
    cy.get('.confirm').click(); }   

static deleteButton() {
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();
}   

}
