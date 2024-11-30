import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { registerPage } from "../../support/PageObjects/Registration.page";
import { registerApi } from "../../support/Apis/Requests";
import { utils } from "../../support/Utils";

Given("User navigate to signUp page", () => {
    const specificDate = new Date(2023, 11, 25, 5, 30, 0); // December 25, 2023, 10:30 AM
    cy.clock(specificDate.getTime());
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

When('User submits registration with APIS', ()=> {
    cy.readFile('cypress/fixtures/payloads/registerWithApiPayload.json').then((payload) => {
        payload.email = utils.getRandomEmail();
        payload.password = utils.generateRandomPassword();
        payload.firstName = utils.generateRandomName();
        payload.lastName = utils.generateRandomName();
        cy.writeFile('cypress/fixtures/payloads/registerWithApiPayload.json', payload);
        registerApi(payload).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.firstName).to.equal(payload.firstName);
        })
    })
})