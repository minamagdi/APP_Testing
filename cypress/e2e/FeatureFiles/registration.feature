Feature: Registration

    Scenario: 01 Registration with valid data
        Given User navigate to signUp page
        When User fill out all fields of signUp page
        And User submit the request
        Then Verify the title after registration

        
    Scenario: 02 Registration with api
        Given User submits registration with APIS
        Then Verify the registration is sent successfully

    Scenario: 03 Registration with api
        Given User submits registration with APIS
        Then Verify the registration is sent successfully