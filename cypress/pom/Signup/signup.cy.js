export default class SignupPom {
    static visitPage() {
        cy.visit('https://demoblaze.com/')
    }

    static signupMenu() {
        cy.get('#signin2').click()
    }

    static inputUserName() {
        cy.get('#sign-username').click().type ('pom').type('pa').type('air') 
    }

    static inputPassword() {
        cy.get('#sign-password').click().type ('test').type('123')
    }

    static signupButton() {
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }

    static ExistingUserName() {
        cy.get('#sign-username').click().type ('tan').type('jung').type('putri') 
    }
}