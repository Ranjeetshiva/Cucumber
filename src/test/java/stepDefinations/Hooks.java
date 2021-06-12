package stepDefinations;


import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

    @Before("@MobileTest1")
    public void beforevaldiation(){
        System.out.println("Before Mobile Test Before Hook");
    }

    @After("@MobileTest1")
    public void Aftervaldiation(){
        System.out.println("After Mobile Test Before Hook");
    }

    @Before("@RegTest")
    public void beforeReg(){
        System.out.println("Before Reg Test Before Hook");
    }

    @After("@RegTest")
    public void AfterReg(){
        System.out.println("After reg Test Before Hook");
    }
}
