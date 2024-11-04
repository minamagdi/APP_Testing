
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { registerPage } from "../../support/PageObjects/Registration.page";
import { registerApi } from "../../support/Apis/Requests";
import { utilis } from "../../support/Utilis";

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

When('User submits registration with APIS', ()=> {
    cy.readFile('cypress/fixtures/payloads/registerWithApiPayload.json').then((payload) => {
        payload.email = utilis.getRandomEmail();
        registerApi(payload).then((response) => {
            cy.writeFile('cypress/fixtures/payloads/registerResponseWithApiPayload.json', response);
        })
    })
    
});

Then('Verify the registration is sent successfully', () =>{
    cy.readFile('cypress/fixtures/payloads/registerResponseWithApiPayload.json').then((response) => {
        expect(response.body.firstName).to.equal('mina');
        expect(response.status).to.equal(201);
    })
})