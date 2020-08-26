Feature: Switching windows, tabs and iFrames

  Scenario: The user is able to switch windows, tabs and iFrames
    Given The user opens the test automation practice web page
    Then The user checks that the page title is "Practice Page"
    When The user switches to the second window
    And The user switches to the second tab
    # ! Open bug in Nightwatch, switching to iFrame not working properly !
    # And The user switches to the iFrame
    # And The user switches back to the parent frame