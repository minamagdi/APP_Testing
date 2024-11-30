import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginApi } from "../../support/Apis/Requests";
import {loginPage} from "../../support/PageObjects/Login.page";
import { assertions } from "../../support/cypressWrappers/assertions";

Given('User navigate to signIn page', () => {
    cy.visit('/login');
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
})

When("User attempts to login with apis", () => {
    cy.readFile('cypress/fixtures/payloads/loginWithApiPayload.json').then((loginPayload) => {
        cy.readFile('cypress/fixtures/payloads/registerWithApiPayload.json').then((registerPayload) => {
            loginPayload.email = registerPayload.email;
            loginPayload.password = registerPayload.password;
            loginApi(loginPayload).then((response) => {
                expect(response.status).to.equal(200);
            })
        })
    })
})

When('User attempts to login', ()=> {
    cy.readFile('cypress/fixtures/payloads/registerWithApiPayload.json').then((registerPayload) => {
        loginPage.typeEmail(registerPayload.email);
        loginPage.typePassword(registerPayload.password);
        loginPage.clickOnLoginBtn();
    })
})

Then('Verify welcome message', ()=> {
    cy.readFile('cypress/fixtures/payloads/registerWithApiPayload.json').then((registerPayload) => {
        cy.wait(5000);
        loginPage.assertWelcomeMessage((registerPayload.firstName).toUpperCase());
    })
})

And('User attempts to log out', ()=> {
    loginPage.clickOnLogoutBtn();
    cy.clearCookies();
    cy.clearLocalStorage();
})

When('Reload page', ()=> {
    cy.reload();
})