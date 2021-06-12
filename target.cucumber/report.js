$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login",
  "description": "",
  "id": "account-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Vaildate The browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser Is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Check If Browser Is Started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.vaildate_the_browser()"
});
formatter.result({
  "duration": 231482700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 1424200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_started()"
});
formatter.result({
  "duration": 673600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Home page default login",
  "description": "",
  "id": "account-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User login into application with \"jin\" and \"123\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 95200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "123",
      "offset": 44
    }
  ],
  "location": "stepDefination.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 7682000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Home_page_is_populated()"
});
formatter.result({
  "duration": 323300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Cards_are_displayed()"
});
formatter.result({
  "duration": 289100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Vaildate The browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser Is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Check If Browser Is Started",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.vaildate_the_browser()"
});
formatter.result({
  "duration": 280100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 274100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_if_browser_is_started()"
});
formatter.result({
  "duration": 71300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Home page default login",
  "description": "",
  "id": "account-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login into application with \"jin\" and \"123\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 454400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "123",
      "offset": 44
    }
  ],
  "location": "stepDefination.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 344300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Home_page_is_populated()"
});
formatter.result({
  "duration": 113100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Cards_are_displayed()"
});
formatter.result({
  "duration": 292800,
  "status": "passed"
});
});