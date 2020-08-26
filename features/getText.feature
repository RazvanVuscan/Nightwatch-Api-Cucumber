Feature: Getting text from elements on the page

  Scenario: The user is able get text from the elements of the page
    Given The user opens the test automation practice web page
    Then The user checks that the page title is "Practice Page"
    When The user gets the text from the table and checks it
    And The user gets the value from the Hide button and checks it