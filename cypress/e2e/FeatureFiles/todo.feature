Feature: Todo - Functionality

  Background: user logging in
    Given User submits registration with APIS



  Scenario: 01 adding new Todo task
    When User attempts to login with apis
    And User navigate to signIn page
    When User attempts to login
    And User add new todo

  Scenario: 02 adding new Todo task using APIs
    When User attempts to login with apis
    And User navigate to signIn page
    When User attempts to login
    And User add new todo with name "testing2" using APIs
    When Reload page
    Then Assert new task is added successfully