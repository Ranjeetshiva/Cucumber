package cucumberOptions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
//@CucumberOptions(
//        features= "src/test/java/features",
//        glue="stepDefinations")


//Tags
//  dryRun = true, -- We Need to Add


@CucumberOptions(
        features= "src/test/java/features",
        glue="stepDefinations",
        tags="@JuneRelease",
        plugin = {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cucumber.xml"},
        dryRun = false,
        monochrome = true ,
        strict=true
        )

public class TestRunner {

}
