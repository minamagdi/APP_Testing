import {todoPage} from "../../support/PageObjects/Todo.page";

When('User add new todo', ()=> {
    todoPage.clickOnTodoBtn();
    todoPage.typeNameOfTodo("todo no 1");
    todoPage.clickOnCreateNewTodoBtn();
    todoPage.assertNewCardIsvisible();
})