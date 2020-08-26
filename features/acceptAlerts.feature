Feature: Switching accepting and dissmissing alerts

  Scenario: The user is able to switch windows and tabs
    Given The user opens the test automation practice web page
    Then The user checks that the page title is "Practice Page"
    When The user accepts the alert message
    And The user dismisses the alert message
