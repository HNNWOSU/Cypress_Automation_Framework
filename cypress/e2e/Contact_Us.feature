@contact-us @regression
Feature: WebdriverUniversity Contact Us Form

    Background: Pre-conditions
        Given I visit the WebdriverUniversity page
        When I click on the Contact Us link

    Scenario: Valid Submission of Contact Us Form
        And I type a First Name
        And I type a Last Name
        And I enter a valid email address
        And I type a comment
        And I submit the form
        Then I should see a success message confirming the submission

    Scenario: Invalid Submission of Contact Us Form (Missing Required Fields)
        And I type a First Name
        And I type a Last Name
        And I type a comment
        And I submit the form
        Then I should see an error message indicating the required fields

    Scenario: Valid Submission of Contact Us Form - using specific data
        And I type a "First Name" field with "John"
        And I type a "Last Name" field with "Doe"
        And I enter a valid email address "john.doe@example.com"
        And I type a comment "This is a test message" and number 123
        And I submit the form
        Then I should see a success message confirming the submission

    @smoke
    Scenario Outline: Validate Contact Us Page
        And I type in a <firstName> and "<lastName>"
        And I type in a  "<email>" and "<comment>"
        And I submit the form
        Then I should be presented with a header text "<message>"

        Examples:
            | firstName | lastName | email                   | comment                   | message                        |
            | Alice     | Smith    | alice.smith@example.com | This is a test message    | Thank You for your Message!    |
            | Bob       | Johnson  | bob.johnson@example.com | Another test message      | Thank You for your Message!    |
            | Charlie   | Brown    | charli                  | This is a failed scenario | Error: Invalid email address |
