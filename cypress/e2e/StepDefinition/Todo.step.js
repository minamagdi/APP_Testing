import { When, Then } from "cypress-cucumber-preprocessor/steps";
import {todoPage} from "../../support/PageObjects/Todo.page";
import {createTaskApi} from "../../support/Apis/Requests";


When('User add new todo', ()=> {
    todoPage.clickOnTodoBtn();
    todoPage.typeNameOfTodo("todo no 1");
    todoPage.clickOnCreateNewTodoBtn();
    todoPage.assertNewCardIsvisible();
})

When('User add new todo with name {string} using APIs', (taskName)=> {
    cy.readFile('cypress/fixtures/payloads/loginWithApiResponse.json').then((response) =>{
        let token = response.access_token;
        createTaskApi(taskName, token);
    })
})

Then('Assert new task is added successfully', ()=> {
    todoPage.assertNewCardIsvisible();
})