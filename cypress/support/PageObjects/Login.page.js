import { assertions } from "../cypressWrappers/assertions";
import {actions} from "../utilities/Actions";

class LoginPage {
    // Page Elements

    welcomeMessage() {
        return cy.get('[data-testid="welcome"]');
    }
    passwordField() {
        return cy.get('[name="password"]');
    }

    emailField() {
        return cy.get('[data-testid="email"]');
    }

    loginBtn() {
        return cy.get('[data-testid="submit"]');
    }

    logoutBtn = ()=> cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]')

    // Page Actions
    typePassword(userName) {
        actions.type(this.passwordField(), userName);
    }

    typeEmail(email) {
        actions.type(this.emailField(), email);
    }

    clickOnLoginBtn() {
        actions.click(this.loginBtn());
    }

    clickOnLogoutBtn = ()=> actions.click(this.logoutBtn());


    // Page Assertions
    assertWelcomeMessage(name) {
        const specificDate = new Date(2023, 11, 25, 6, 30, 0);
        const hour = 6//specificDate.getHours();
        // cy.clock(now);

        console.log(hour);
        

        let timeOfDay = "";

        if (hour >= 5 && hour < 12) {
            timeOfDay = "MORNING";
        } else if (hour >= 12 && hour < 18) {
            timeOfDay = "AFTERNOON";
        } else if (hour >= 18 && hour < 21) { // Adjust the evening range as needed
            timeOfDay = "EVENING";
        } else {
            timeOfDay = "NIGHT";
        }
            assertions.verifyElementContainsText(this.welcomeMessage(), `GOOD ${timeOfDay} ${name}`)
        }
}
export const loginPage = new LoginPage();