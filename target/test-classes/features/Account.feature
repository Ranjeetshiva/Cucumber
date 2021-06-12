Feature: Account Login


  Background:
    Given Vaildate The browser
    When Browser Is triggered
    Then Check If Browser Is Started

  @JuneRelease1
  Scenario:  Home page default login
    Given User is on landing page
    When User login into application with "jin" and "123"
    Then Home page is populated
    And Cards are displayed


  @JuneRelease
  Scenario:  Home page default login
    Given User is on landing page
    When User login into application with "jin" and "123"
    Then Home page is populated
    And Cards are displayed



