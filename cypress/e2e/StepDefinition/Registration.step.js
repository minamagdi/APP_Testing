
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { registerPage } from "../../support/PageObjects/Registration.page";

Given("User navigate to signUp page", () => {
    cy.visit('/signup');
})

When('User fill out all fields of signUp page', () => {
    registerPage.registerWithValidData();
})

When('User submit the request', () => {
    registerPage.submit();
})

Then('Verify the title after registration', () => {
    registerPage.assertTodosLableIsVisible();
})
