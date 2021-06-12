package stepDefinations;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import java.util.List;


@RunWith(Cucumber.class)
public class stepDefination {

    @Given("^User is on landing page$")
    public void user_is_on_landing_page() {
        System.out.println("Navigate To Login URL");
    }

    @When("^User login into application with username and password$")
    public void User_login_into_application_with_username_and_password(){
        System.out.println("Logged In Successfully ");
    }

    @Then("^Home page is populated$")
    public void Home_page_is_populated(){
        System.out.println("Validated Home Page ");
    }

//    @And("^Cards are displayed$")
//    public void Cards_are_displayed(){
//        System.out.println("Validated Cards");
//    }

    @When("^User login into application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_into_application_with_something_and_something(String strArg1, String strArg2) throws Throwable {
        System.out.println(strArg1 +" -- "+strArg2);
    }

    @And("^Cards are should not displayed$")
    public void cards_are_should_not_displayed() {
        System.out.println("Card Should Not Validated ");
    }

    @When("^User sign up with following details$")
    public void user_sign_up_with_following_details(DataTable data) {
       List<List<String>>obj= data.raw();
        System.out.println(obj.get(0).get(0));
        System.out.println(obj.get(0).get(1));
        System.out.println(obj.get(0).get(2));
        System.out.println(obj.get(0).get(3));
        System.out.println(obj.get(0).get(4));
    }


//    @When("^User login application with (.+) and (.+)$")
//    public void user_login_application_with_and(String username, String password) throws Throwable {
//        System.out.println(username +" -----" + password );
//


    @When("^User login application with (.+) and (.+) and (.+)$")
    public void user_login_application_with_and_and(String username, String password, String email) throws Throwable {
        System.out.println(username +" -----" + password +"-----"+email );
    }


    @Given("^Vaildate The browser$")
    public void vaildate_the_browser() throws Throwable {
        System.out.println("Validate - BackGround");
    }

    @When("^Browser Is triggered$")
    public void browser_is_triggered() throws Throwable {
        System.out.println("Validate Browse Triggered - BackGround");
    }

    @Then("^Check If Browser Is Started$")
    public void check_if_browser_is_started() throws Throwable {
        System.out.println(" Check Browser Started - BackGround");
    }

    @When("^User login in to application with username and password$")
    public void User_login_in_to_application_with_username_and_password(){
        System.out.println("Logged In Successfully ");
    }

}
