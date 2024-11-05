import {actions} from "../utilities/Actions";

class LoginPage {
    addNewTodoBtn() {
        return cy.get('button[aria-label=\'delete\']')
    }


    clickAddNewTodoBtn() {
        actions.click();
    }
}
export const loginPage = new LoginPage();