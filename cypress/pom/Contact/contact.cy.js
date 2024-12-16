export default class ContactPom {

    static contactMenu() {
        cy.get('.nav-link').eq(1).click();
    }

    static inputContactEmail() {
        cy.get('#recipient-email').click().type('2Gn3o@example.com');
    }

    static inputContactName() {
        cy.get('#recipient-name').click().type('Danto');
    }

    static inputContactMessage() {
        cy.get('#message-text').click().type('Hello');
    }

    static sendButton () {
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    }

}