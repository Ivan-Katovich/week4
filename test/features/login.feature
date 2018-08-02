@second
Feature: Testing of the login process

  @second-1
  Scenario: login with valid credentials
  Verify that the user can enter the site using correct credentials
    Given I am on the homepage
    And I click on the Shop icon
    And I click on the Login icon
    When I fill in "Email" with "svm-tut@tut.by"
    And I fill in "Password" with "Sergey147741+"
    And I press "Login"
    Then I should be on the users home page

  @second-2
  Scenario: login with invalid credentials
  Verify that the user cannot enter the site using invalid credentials
    Given I am on the homepage
    And I click on the Shop icon
    And I click on the Login icon
    When I fill in "Email" with "test@test.test"
    And I fill in "Password" with "123456789"
    And I press "Login"
    Then I should see "Enter a valid email address." error




