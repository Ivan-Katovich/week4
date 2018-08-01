@second
Feature: login - We want to test the login process


  Scenario: SC01.Check the user can login into the application
  Verify that the user can enter in the application using correct credentials and the cookies are created successfully.
    Given the user is in the Login page
    And the user set the username '<userId>'
    And the user set the password '<password>'
    When the user logs in the application
    Then the user is redirected to the Welcome page


