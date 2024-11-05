import {actions} from "../utilities/Actions";
import {assertions} from "../utilities/Assertoins";

class TodoPage {
    // page elements
    addTodoBtn(){
        return cy.get('button[aria-label=\'delete\']');
    }

    todoNameField() {
        return cy.get('[data-testid="new-todo"]');
    }

    createTodoBtn() {
        return cy.get('[data-testid="submit-newTask"]')
    }

    newCard() {
        return cy.get('[data-testid="todo-text"]');
    }

    // page actions
    clickOnTodoBtn() {
        actions.click(this.addTodoBtn())
    }

    typeNameOfTodo(text) {
        actions.type(this.todoNameField(), text);
    }

    clickOnCreateNewTodoBtn() {
        actions.click(this.createTodoBtn());
    }

    // page assertions
    assertNewCardIsvisible() {
        assertions.assertElementIsVisible(this.newCard())
    }
}
export const todoPage = new TodoPage();