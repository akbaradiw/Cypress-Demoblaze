import ProductPom from "../../pom/Product/product.cy.js";

describe("Detail Product", () => {
  beforeEach(() => {
    ProductPom.visitPage();
  });

  it("Verify Success Show Detail Product", () => {
    ProductPom.selectProduct();
    cy.wait(2000);
    ProductPom.showDetailProduct();
  });
});
