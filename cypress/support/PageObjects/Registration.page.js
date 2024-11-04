import { utilis } from "../Utilis";
import { actions } from "../utilities/Actions";
import { assertions } from "../utilities/Assertoins";

class Registration {
    // page elements
    firstNameField() {
        return cy.get('[data-testid="first-name"]');
    }

    lastNameField() {
        return cy.get('[data-testid="last-name"]');
    }

    emailField() {
        return cy.get('[data-testid="email"]');
    }

    passwordField() {
        return cy.get('[data-testid="password"]');
    }

    confirmPasswordField() {
        return cy.get('[data-testid="confirm-password"]');
    }

    signUpBtn() {
        return cy.get('[data-testid="submit"]');
    }

    noTodosLabel() {
        return cy.get('[data-testid="no-todos"]');
    }

    // page Actions
    registerWithValidData(){
        actions.type(this.firstNameField(), utilis.gernerteRandomFirstName());
        actions.type(this.lastNameField(), 'Magdy');
        actions.type(this.emailField(), utilis.getRandomEmail());
        actions.type(this.passwordField(), 'Mina@234');
        actions.type(this.confirmPasswordField(), 'Mina@234');
    }

    submit() {
        actions.click(this.signUpBtn());
    }


    //page Assertions

    assertTodosLableIsVisible() {
        assertions.assertElementIsVisible(this.noTodosLabel());
    }
}
export const registerPage = new Registration();