# Exemplu de test care consuma date multiple de test si reia pasii pentru fiecare set de date
Feature: Test autocomplete for country input

  # Mare grija sa puneti Scenario Outline pentru acest tip de test!
  Scenario Outline: User enters two characters and chooses a country starting with the two letters
    Given The user opens the test automation practice web page
    Then The user checks that the page title is "Practice Page"
    When The user enters <Keyword> in the autosuggest input field
    Then The user waits for the autosuggest results to be visible
    When The user clicks on the <Country> results in autosuggest
    Then <Country> appears in the autosuggest field

    Examples:
    | Country   | Keyword |
    | "Romania" | "RO"    |
    | "Morocco" | "RO"    |
    | "Iceland" | "IC"    |
    