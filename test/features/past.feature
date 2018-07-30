@first
Feature: Opening pages and displaying products

  @first-1
  Scenario: Open 'For Home' page
    Given I am on the homepage
    When I click on the 'For Home' button
    Then I should see 'For Home' page

  @first-2
  Scenario: Open 'For Business' page
    Given I am on the homepage
    When I click on the 'For Business' button
    Then I should see 'For Business' page

  @first-3
  Scenario: Open 'OEM Design' page
    Given I am on the homepage
    When I click on the 'OEM Design' button
    Then I should see 'OEM Design' page

  @first-1-1
  Scenario: Open 'Mobile Storage' section from the 'For Home' page
    Given I am on the homepage
    When I click on the 'For Home' button
    And I click on the 'Mobile Storage' button
    Then I should see 'Mobile Storage' section