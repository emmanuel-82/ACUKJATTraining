package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepdefs {


    @Given("^I am on the \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void iAmOnThePageOnURL(String arg0, String arg1) throws Throwable {
        System.out.println("This is my First step");
    }


    @Then("^I should see \"([^\"]*)\" message$")
    public void iShouldSeeMessage(String arg0) throws Throwable {
        System.out.println("This is my Second step");
    }

    @When("^I fill in \"([^\"]*)\" with \"([^\"]*)\"$")
    public void iFillInWith(String arg0, String arg1) throws Throwable {
        System.out.println("This is my Third step");
    }

    @And("^I click on the \"([^\"]*)\" button$")
    public void iClickOnTheButton(String arg0) throws Throwable {
        System.out.println("This is my Fourth step");
    }

    @And("^I should see the \"([^\"]*)\" button$")
    public void iShouldSeeTheButton(String arg0) throws Throwable {
        System.out.println("This is my Fifth step");
    }
}