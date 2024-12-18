import LoginPom from "../../pom/Login/login.cy.js";
import AddToCartPom from "../../pom/AddToCart/addtocart.cy.js";
import ProductPom from "../../pom/Product/product.cy.js";

describe("Add To Cart Feature", () => {
    beforeEach(() => {
        LoginPom.visitPage();
        LoginPom.loginMenu();
        LoginPom.inputValidUserName();
        LoginPom.inputValidPassword();
        LoginPom.loginButton();
        LoginPom.displayUserName();
        ProductPom.selectProduct();
        ProductPom.showDetailProduct();
    });

    it("Verify Success Add To Cart", () => {
        AddToCartPom.addToCartProduct();
        AddToCartPom.viewCart()
        AddToCartPom.viewProductinCart();    
    });

    it ("Verify Success Purchase Product from cart", () => {
        AddToCartPom.addToCartProduct();
        AddToCartPom.viewCart();
        AddToCartPom.viewProductinCart();    
        AddToCartPom.placeOrder();
        AddToCartPom.inputName();
        AddToCartPom.inputCountry();
        AddToCartPom.inputCity();
        AddToCartPom.inputCard();
        AddToCartPom.inputMonth();
        AddToCartPom.inputYear();
        AddToCartPom.purchaseButton();
        AddToCartPom.successMessage();
        AddToCartPom.confrimButton();     
    });

 it ("Verify Success delete Product from cart", () => {
    AddToCartPom.addToCartProduct();
    AddToCartPom.viewCart();
    AddToCartPom.viewProductinCart();    
    AddToCartPom.deleteButton();
 })
 
 
 it ("Verify Failed Purchase Product from cart with empty form", () => {
    AddToCartPom.addToCartProduct();
    AddToCartPom.viewCart();
    AddToCartPom.viewProductinCart(); 
    AddToCartPom.placeOrder();
    AddToCartPom.purchaseButton();   
 })


});