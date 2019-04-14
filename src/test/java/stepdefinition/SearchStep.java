package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SearchStep {
    WebDriver driver = null;
    @Given("^I an on Google Search page$")
    public void i_an_on_Google_Search_page() throws Throwable {
        driver = new ChromeDriver();
        driver.get("http://www.google.com");
     }

    @When("^I enter a search term \"([^\"]*)\"$")
    public void i_enter_a_search_term(String arg1) throws Throwable {
       WebElement element = driver.findElement(By.name("q"));
       element.sendKeys("Cucumber");
       element.submit();
    }

    @When("^I click on the search button$")
    public void i_click_on_the_search_button() throws Throwable {


    }

    @Then("^I should be shown a list of results relating to my search term$")
    public void i_should_be_shown_a_list_of_results_relating_to_my_search_term() throws Throwable {


    }
}
