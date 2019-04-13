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
  "duration": 214956924,
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
  "duration": 304699,
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
  "duration": 863314,
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
  "duration": 351892,
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
  "duration": 313932,
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
  "duration": 340606,
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
  "duration": 286233,
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
  "duration": 220574,
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
  "duration": 53580004771,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nghtbulb.svg\",\"48\":\"icons/lightbulb.svg\",\"96\":\"icons/lightbulb.svg\",\"128\":\"icons/lightbulb.svg\"},\"iconURL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1555173807447\taddons.xpi\tDEBUG\tUpdating XPIState for {\"id\":\"webcompat@mozilla.org\",\"syncGUID\":\"{a0d39ca2-bca4-4e5a-ae7c-5124376227a4}\",\"version\":\"3.0.2\",\"type\":\"extension\",\"loader\":null,\"updateURL\":null,\"optionsURL\":null,\"optionsType\":null,\"optionsBrowserStyle\":true,\"aboutURL\":null,\"defaultLocale\":{\"name\":\"Web Compat\",\"description\":\"Urgent post-release fixes for web compatibility.\",\"creator\":null,\"developers\":null,\"translators\":null,\"contributors\":null},\"visible\":true,\"active\":true,\"userDisabled\":false,\"appDisabled\":false,\"installDate\":1554571702928,\"updateDate\":1554571702928,\"applyBackgroundUpdates\":1,\"path\":\"C:\\\\Program Files (x86)\\\\Mozilla Firefox\\\\browser\\\\features\\\\webcompat@mozilla.org.xpi\",\"skinnable\":false,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":false,\"strictCompatibility\":true,\"locales\":[],\"targetApplications\":[{\"id\":\"toolkit@mozilla.org\",\"minVersion\":\"59.0b5\",\"maxVersion\":null}],\"targetPlatforms\":[],\"seen\":true,\"dependencies\":[],\"userPermissions\":{\"permissions\":[\"webRequest\",\"webRequestBlocking\"],\"origins\":[\"\u003call_urls\u003e\"]},\"icons\":{},\"iconURL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1555173807447\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1555173807451\taddons.xpi\tDEBUG\tCalling bootstrap method startup on formautofill@mozilla.org version 1.0\r\n1555173807454\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 35.0.0\r\n1555173807456\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 3.0.2\r\n1555173807459\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1555173807460\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1555173807460\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1555173807460\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1555173807461\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1555173807462\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1555173807466\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1555173807467\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1555173807467\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1555173807467\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1555173807467\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1555173807477\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1555173809358\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 28\r\n1555173810094\taddons.repository\tDEBUG\tNo addons.json found.\r\n1555173812667\taddons.xpi\tDEBUG\tIgnoring file: name is not a valid add-on ID: C:\\Users\\TriNity\\AppData\\Local\\Temp\\anonymous8253210130243637588webdriver-profile\\extensions\\webdriver-staging\r\n1555173812679\taddons.xpi\tDEBUG\tExisting add-on formautofill@mozilla.org in app-system-defaults\r\n1555173812680\taddons.xpi\tDEBUG\tExisting add-on screenshots@mozilla.org in app-system-defaults\r\n1555173812680\taddons.xpi\tDEBUG\tExisting add-on webcompat-reporter@mozilla.org in app-system-defaults\r\n1555173812681\taddons.xpi\tDEBUG\tExisting add-on webcompat@mozilla.org in app-system-defaults\r\n1555173812682\taddons.xpi\tDEBUG\tscanForChanges changed: false, state: {}\r\nJavaScript error: resource://gre/modules/addons/XPIProvider.jsm, line 2614: TypeError: addon is null\r\n1555173812866\taddons.manager\tDEBUG\tRegistering upgrade listener for formautofill@mozilla.org\r\n[Child 14696, Chrome_ChildThread] WARNING: pipe error: 109: file z:/build/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 332\r\n[Child 14696, Chrome_ChildThread] WARNING: pipe error: 109: file z:/build/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 332\r\n\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027DESKTOP-8L4ELD8\u0027, ip: \u0027192.168.15.204\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:347)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:116)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:259)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:247)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:242)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:238)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:127)\r\n\tat stepdefinition.SearchStep.i_an_on_Google_Search_page(SearchStep.java:16)\r\n\tat ✽.Given I an on Google Search page(search.feature:7)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nghtbulb.svg\",\"48\":\"icons/lightbulb.svg\",\"96\":\"icons/lightbulb.svg\",\"128\":\"icons/lightbulb.svg\"},\"iconURL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1555173807447\taddons.xpi\tDEBUG\tUpdating XPIState for {\"id\":\"webcompat@mozilla.org\",\"syncGUID\":\"{a0d39ca2-bca4-4e5a-ae7c-5124376227a4}\",\"version\":\"3.0.2\",\"type\":\"extension\",\"loader\":null,\"updateURL\":null,\"optionsURL\":null,\"optionsType\":null,\"optionsBrowserStyle\":true,\"aboutURL\":null,\"defaultLocale\":{\"name\":\"Web Compat\",\"description\":\"Urgent post-release fixes for web compatibility.\",\"creator\":null,\"developers\":null,\"translators\":null,\"contributors\":null},\"visible\":true,\"active\":true,\"userDisabled\":false,\"appDisabled\":false,\"installDate\":1554571702928,\"updateDate\":1554571702928,\"applyBackgroundUpdates\":1,\"path\":\"C:\\\\Program Files (x86)\\\\Mozilla Firefox\\\\browser\\\\features\\\\webcompat@mozilla.org.xpi\",\"skinnable\":false,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":false,\"strictCompatibility\":true,\"locales\":[],\"targetApplications\":[{\"id\":\"toolkit@mozilla.org\",\"minVersion\":\"59.0b5\",\"maxVersion\":null}],\"targetPlatforms\":[],\"seen\":true,\"dependencies\":[],\"userPermissions\":{\"permissions\":[\"webRequest\",\"webRequestBlocking\"],\"origins\":[\"\u003call_urls\u003e\"]},\"icons\":{},\"iconURL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1555173807447\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1555173807451\taddons.xpi\tDEBUG\tCalling bootstrap method startup on formautofill@mozilla.org version 1.0\r\n1555173807454\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 35.0.0\r\n1555173807456\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 3.0.2\r\n1555173807459\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1555173807460\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1555173807460\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1555173807460\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1555173807461\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1555173807462\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1555173807466\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1555173807467\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1555173807467\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1555173807467\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1555173807467\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1555173807477\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1555173809358\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 28\r\n1555173810094\taddons.repository\tDEBUG\tNo addons.json found.\r\n1555173812667\taddons.xpi\tDEBUG\tIgnoring file: name is not a valid add-on ID: C:\\Users\\TriNity\\AppData\\Local\\Temp\\anonymous8253210130243637588webdriver-profile\\extensions\\webdriver-staging\r\n1555173812679\taddons.xpi\tDEBUG\tExisting add-on formautofill@mozilla.org in app-system-defaults\r\n1555173812680\taddons.xpi\tDEBUG\tExisting add-on screenshots@mozilla.org in app-system-defaults\r\n1555173812680\taddons.xpi\tDEBUG\tExisting add-on webcompat-reporter@mozilla.org in app-system-defaults\r\n1555173812681\taddons.xpi\tDEBUG\tExisting add-on webcompat@mozilla.org in app-system-defaults\r\n1555173812682\taddons.xpi\tDEBUG\tscanForChanges changed: false, state: {}\r\nJavaScript error: resource://gre/modules/addons/XPIProvider.jsm, line 2614: TypeError: addon is null\r\n1555173812866\taddons.manager\tDEBUG\tRegistering upgrade listener for formautofill@mozilla.org\r\n[Child 14696, Chrome_ChildThread] WARNING: pipe error: 109: file z:/build/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 332\r\n[Child 14696, Chrome_ChildThread] WARNING: pipe error: 109: file z:/build/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 332\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:113)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:347)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:116)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:259)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:247)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:242)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:238)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:127)\r\n\tat stepdefinition.SearchStep.i_an_on_Google_Search_page(SearchStep.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat TestRunner.feature(TestRunner.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1191)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1116)\r\n\tat org.testng.TestNG.run(TestNG.java:1024)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "SearchStep.i_click_on_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStep.i_should_be_shown_a_list_of_results_relating_to_my_search_term()"
});
formatter.result({
  "status": "skipped"
});
});