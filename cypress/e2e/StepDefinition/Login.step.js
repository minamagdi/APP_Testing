import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginApi } from "../../support/Apis/Requests";

Given('User navigate to signIn page', () => {
    cy.visit('/login');
})
When("User login with apis", () => {
    cy.readFile('cypress/fixtures/payloads/loginWithApiPayload.json').then((loginPayload) => {
        cy.readFile('cypress/fixtures/payloads/registerWithApiPayload.json').then((registerPayload) => {
            loginPayload.email = registerPayload.email;
            loginPayload.password = registerPayload.password;
            loginApi(loginPayload).then((response) => {
                cy.writeFile('cypress/fixtures/payloads/loginWithApiResponse.json', response);
            })
            cy.writeFile('cypress/fixtures/payloads/loginWithApiPayload.json', loginPayload);
        })
    })
})

Then('Verify user logged in successfully' ,() => {
    cy.readFile('cypress/fixtures/payloads/loginWithApiResponse.json').then((response) => {
        expect(response.status).to.equal(200);
    })    
})