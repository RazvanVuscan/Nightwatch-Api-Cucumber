Feature: Test for mouse hover example

 Scenario: The user is able mouse hover from Mouse Hover example and clicks reload
    Given The user opens the test automation practice web page
    Then The user checks that the page title is "Practice Page"
    When The user hover mouse on button Mouse Hover example
    Then The user is waiting for the menu to appear
    When The user clicks "Reload" from menu Mouse Hover example
    Then The user waits for page reloaded
    