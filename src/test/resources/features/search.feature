Feature: Google Search
    As a google search user
    I want to search for information I need
    So that I am  better Informed

  Scenario: Search for an item
    Given I an on Google Search page
    When I enter a search term "Java"
    And I click on the search button
    Then I should be shown a list of results relating to my search term
    