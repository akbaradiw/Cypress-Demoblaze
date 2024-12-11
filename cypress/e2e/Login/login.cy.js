import LoginPom from "../../pom/Login/login.cy.js";

describe("Login Feature", () => {
  beforeEach(() => {
    LoginPom.visitPage();
    LoginPom.loginMenu();
  });

  it("Verify Login Success with valid username and password", () => {
    LoginPom.inputValidUserName();
    cy.wait(1000);
    LoginPom.inputValidPassword();
    LoginPom.loginButton();
    LoginPom.displayUserName();
  });

  it("Verify Login Failed with invalid username and password", () => {
    LoginPom.inputInvalidUserName();
    LoginPom.inputInvalidPassword();
    LoginPom.loginButton();
  });

  it("Verify Login Failed with valid username and invalid password", () => {
    LoginPom.inputInvalidUserName();
    LoginPom.inputValidPassword();
    LoginPom.loginButton();
  });

  it("Verify Login Failed with empty username and password", () => {
    LoginPom.loginButton();
  });

  it("Verify Login Failed with valid username and empty password", () => {
    LoginPom.inputValidUserName();
    LoginPom.loginButton();
  });

  it("Verify Login Failed with empty username and valid password", () => {
    LoginPom.inputValidPassword();
    LoginPom.loginButton();
  });

  it("Verify Login Failed with invalid username and empty password", () => {
    LoginPom.inputInvalidUserName();
    LoginPom.loginButton();
  });

  it("Verify Login Failed with empty username and invalid password", () => {
    LoginPom.inputInvalidPassword();
    LoginPom.loginButton();
  });

});
