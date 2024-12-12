import ProductPom from "../../pom/Product/product.cy.js";

describe("Pagination feature", () => {
  beforeEach(() => {
    ProductPom.visitPage();
  });

  it("Verify Success Next Pagination", () => {
    ProductPom.nextButton();
    cy.wait(2000);
  });

  it("Verify Success Prev Pagination", () => {
    ProductPom.nextButton();
    cy.wait(2000);
    ProductPom.prevButton();
  });
});
