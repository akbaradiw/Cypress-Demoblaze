import ProductPom from "../../pom/Product/product.cy.js";

describe("Filter Products Feature", () => {
    beforeEach(() => {
        ProductPom.visitPage();
    });

    it("Verify Success Filter Laptops", () => {
        ProductPom.filteringLaptops();
        cy.wait(2000);
    });

    it("Verify Success Filter Phones", () => {
        ProductPom.filteringPhones();
        cy.wait(2000);
    });

    it("Verify Success Filter Monitors", () => {
        ProductPom.filteringMonitors();
        cy.wait(2000);
    });
    });