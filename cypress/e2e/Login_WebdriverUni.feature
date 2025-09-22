@login @regression
Feature: WebdriverUniversity Login Portal

  Background: Pre-conditions
    When I wait for 0 seconds
    # Given I visit the WebdriverUniversity Homepage
    # When I click on the Login Portal Link
    Given I navigate to the webdriver University Login Page

  Scenario Outline: Validate Login Page
    And I enter a <username> and <password>
    And I click on Login Button
    Then I should be presented with a pop up <expectedAlertText>

    Examples:
      | username    | password     | expectedAlertText    |
      | webdriver   | webdriver123 | validation succeeded |
      | invaliduser | invalidpass  | validation failed    |
      | invaliduser | invalidpass  | validation failed    |
