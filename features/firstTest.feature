Feature: My first automated test

  Scenario: Navigate to practice web page
    Given The user opens the test automation practice web page
    Then The user checks that the page title is "Practice Page"
    And The name input field is visible
    When I type "Razvan" in the name input field
    Then I check that the "Razvan" text is shown in the name input field
    When The user clicks the "3" radio button
    And The user clicks the "1" radio button
    And The user clicks the "2" radio button