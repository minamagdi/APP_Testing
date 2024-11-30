import { utils } from "../Utils";
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
        const password = utils.generateRandomPassword();
        utils.generateRandomPassword();
        actions.type(this.firstNameField(), utils.generateRandomName());
        actions.type(this.lastNameField(), utils.generateRandomName());
        actions.type(this.emailField(), utils.getRandomEmail());
        actions.type(this.passwordField(), password);
        actions.type(this.confirmPasswordField(), password);
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