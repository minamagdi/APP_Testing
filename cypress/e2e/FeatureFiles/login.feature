Feature: Login Functionality

    Background: User attempts to login
        Given User submits registration with APIS

    Scenario: 01 login with apis
        When User attempts to login with apis
        And User navigate to signIn page

    Scenario: 02 login functionality
        When User navigate to signIn page
        When User attempts to login
        Then Verify welcome message
