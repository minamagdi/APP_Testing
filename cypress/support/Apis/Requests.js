export const registerApi = (payload) =>{
    return cy.request({
        method : 'POST',
        url: 'https://todo.qacart.com/api/v1/users/register',
        Headers: {
            'Content-Type': 'application/json',
        },
        body :payload,
    })
}