import LoginPom from "../../pom/Login/login.cy.js";
import ContactPom from "../../pom/Contact/contact.cy.js";

describe("Contact Feature", () => {
  beforeEach(() => {
    LoginPom.visitPage();
  });

  it("Verify Success send message with fill out all forms", () => {
    ContactPom.contactMenu();
    cy.wait(1000);
    ContactPom.inputContactEmail();
    ContactPom.inputContactName();
    ContactPom.inputContactMessage();
    ContactPom.sendButton();
  });

  it("Verify Failed send message with empty all forms", () => {
    ContactPom.contactMenu();
    cy.wait(1000);
    ContactPom.sendButton();
  });

  it("Verify Failed send message without contact email", () => {
    ContactPom.contactMenu();
    cy.wait(1000);
    ContactPom.inputContactName();
    ContactPom.inputContactMessage();
    ContactPom.sendButton();
  });

  it("Verify Failed send message without contact name", () => {
    ContactPom.contactMenu();
    cy.wait(1000);
    ContactPom.inputContactEmail();
    ContactPom.inputContactMessage();
    ContactPom.sendButton();
  });

  it("Verify Failed send message without contact message", () => {
    ContactPom.contactMenu();
    cy.wait(1000);
    ContactPom.inputContactEmail();
    ContactPom.inputContactName();
    ContactPom.sendButton();
  });
});
