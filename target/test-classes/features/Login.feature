Feature: Application Login

  @RegTest
  Scenario:  Home page default login
    Given User is on landing page
    When User login into application with "jin" and "123"
    Then Home page is populated
    And Cards are displayed

  @MobileTest1
  Scenario:  Home page default login
    Given User is on landing page
    When User login into application with "john" and "4321"
    Then Home page is populated
    And Cards are should not displayed


#data table
  @WeeklyTest
  Scenario:  Home page default login
    Given User is on landing page
    When User sign up with following details
    |jenny |  abcd |jenny@abc.com | Russia | 3245643 |
    Then Home page is populated
    And Cards are displayed


#Parameter
  @MobileTest
  Scenario Outline:  Home page default login
    Given User is on landing page
    When User login application with <UserName> and <Password> and <Email>
    Then Home page is populated
    And Cards are displayed

    Examples:
    | UserName | Password | Email |
    | User1    |  Pass1   | abc@xyz.com|
    | User2    |  Pass2   | abc@123.com|



  @MobileTest
  Scenario: Dummy

  @MobileTest
  Scenario:  Home page default login
    Given User is on landing page
    When User login into application with "Mobile" and "Test"
    Then Home page is populated
    And Cards are displayed
