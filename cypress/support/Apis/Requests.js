const apiURL = Cypress.env('APIUrl');

export const registerApi = (payload) =>{
    return cy.request({
        method : 'POST',
        url: `${apiURL}/api/v1/users/register`,
        Headers: {
            'Content-Type': 'application/json',
        },
        body :payload,
    })
}

export const loginApi = (payload) =>{
    return cy.request({
        method : 'POST',
        url: `${apiURL}/api/v1/users/login`,
        Headers: {
            'Content-Type': 'application/json',
            
        },
        body :payload,
    })
}