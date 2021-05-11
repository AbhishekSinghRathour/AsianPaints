package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import PagefactoryPOM.ColourAndTexture;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Test

public class ContractorFinder {
	WebDriver driver;
	@Test(priority=1)
	@Given("^user is at the homepage of the website$")
	public void user_is_at_the_homepage_of_the_website() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:\\Capgemini Training\\capGTesting\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		//driver=new ChromeDriver();
		this.driver = new ChromeDriver();
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		obj = new ColourAndTexture(driver);
		obj = PageFactory.initElements(driver, ColourAndTexture.class);
		
		driver.get("https://www.asianpaints.com/");
		driver.manage().window().maximize();
		Thread.sleep(30000);
	   
	}
	@Test(priority=2)
	@When("^user click on Contractor Finder$")
	public void user_click_on_Contractor_Finder() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		//obj.checkPaintsTexture();
		obj.ContractorFinder();
	    
	}
	@Test(priority=3)
	@When("^enter valid city name$")
	public void enter_valid_city() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		obj.getcity("Chandigarh");
	    obj.serach();
	}
	@Test(priority=4)
	@Then("^user should able to see the list of contractor$")
	public void user_should_able_to_see_the_list_of_contractor() throws Throwable {
		String expected = "Ayodhya Verma";
		  String actual = driver.findElement(By.xpath("//h3[normalize-space()='Ayodhya Verma']")).getText();
		  Assert.assertEquals(actual, expected);

		  if (actual.contentEquals("Ayodhya Verma")) {
		   System.out.println("we get the list");

		  } else {
		   System.out.println("Test Fail");
		  }
	    
	}

}

