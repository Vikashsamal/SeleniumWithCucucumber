$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "LoginFeature",
  "description": "  This feature deals with the login functionality of the application",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with correct username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/hotty/Downloads/Software/chromedriver.exe\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:589)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:147)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:142)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:177)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:363)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:100)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\n\tat steps.Hook.InitializeTest(Hook.java:47)\n",
  "status": "failed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the following for Login",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStep.iEnterTheFollowingForLogin(java.util.List\u003csteps.LoginStep$User\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStep.iClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\n\tat steps.Hook.TearDownTest(Hook.java:58)\n",
  "status": "failed"
});
});