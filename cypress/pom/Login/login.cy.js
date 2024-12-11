export default class LoginPom {
    static visitPage() {
        cy.visit('https://demoblaze.com/')
    }

    static loginMenu() {
        cy.get('#login2').click()
    }

    static inputValidUserName() {
        cy.get('#loginusername').click().type('tan').type('jung').type('putri')
    }

    static inputValidPassword() {
        cy.get('#loginpassword').click().type('test').type('123')
    }

    static loginButton() {
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }

    static displayUserName() {
        cy.get('#nameofuser').should('be.visible')
    }

    static inputInvalidUserName() {
        cy.get('#loginusername').click().type('peco').type('peco')
    }

    static inputInvalidPassword() {
        cy.get('#loginpassword').click().type('test').type('555')
    }

}
