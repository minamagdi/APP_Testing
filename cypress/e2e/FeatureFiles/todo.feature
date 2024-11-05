Feature: Todo - Functionality

  Background: user logging in
    Given User submits registration with APIS
    And User login with apis


  Scenario: adding new Todo task
    When User navigate to signIn page
    And User add new todo
