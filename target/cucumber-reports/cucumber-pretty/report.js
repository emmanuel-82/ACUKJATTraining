$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Profile",
  "description": "As an employee of the company\r\nI want to login my employee profile using my credentials\r\nIn order to collaborate with my colleagues",
  "id": "login-profile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "www.mycomany.com",
      "offset": 40
    }
  ],
  "location": "LoginStepdefs.iAmOnThePageOnURL(String,String)"
});
formatter.result({
  "duration": 295611873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In as Employee",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 177484,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful login",
  "description": "",
  "id": "login-profile;successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Test",
      "offset": 27
    }
  ],
  "location": "LoginStepdefs.iFillInWith(String,String)"
});
formatter.result({
  "duration": 290849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "LoginStepdefs.iFillInWith(String,String)"
});
formatter.result({
  "duration": 233910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 16
    }
  ],
  "location": "LoginStepdefs.iClickOnTheButton(String)"
});
formatter.result({
  "duration": 343171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My profile",
      "offset": 13
    },
    {
      "val": "www.mycompany.com/myprofile",
      "offset": 38
    }
  ],
  "location": "LoginStepdefs.iAmOnThePageOnURL(String,String)"
});
formatter.result({
  "duration": 319062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your profile",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 286232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheButton(String)"
});
formatter.result({
  "duration": 259558,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "  As a google search user\r\n  I want to search for information I need\r\n  So that I am  better Informed",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search for an item",
  "description": "",
  "id": "google-search;search-for-an-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I an on Google Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter a search term \"Java\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be shown a list of results relating to my search term",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.i_an_on_Google_Search_page()"
});
formatter.result({
  "duration": 25467729865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 23
    }
  ],
  "location": "SearchStep.i_enter_a_search_term(String)"
});
formatter.result({
  "duration": 8850255839,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.i_click_on_the_search_button()"
});
formatter.result({
  "duration": 41550,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.i_should_be_shown_a_list_of_results_relating_to_my_search_term()"
});
formatter.result({
  "duration": 39498,
  "status": "passed"
});
});