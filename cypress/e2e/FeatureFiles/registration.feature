Feature: Registration

    Scenario: 01 Search Google with cucumber testing keyword
        Given User navigate to signUp page
        When User fill out all fields of signUp page
        And User submit the request
        Then Verify the title after registration