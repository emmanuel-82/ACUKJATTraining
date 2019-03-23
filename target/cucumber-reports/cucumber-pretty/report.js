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
  "duration": 697056169,
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
  "duration": 302134,
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
  "duration": 307776,
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
  "duration": 407290,
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
  "duration": 1134669,
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
  "duration": 1052595,
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
  "duration": 1208022,
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
  "duration": 1378839,
  "status": "passed"
});
});