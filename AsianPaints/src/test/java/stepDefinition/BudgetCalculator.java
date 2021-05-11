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
public class BudgetCalculator {
	WebDriver driver;
	@Test(priority=1)
	@Given("^user is on the homepage of the website$")
	public void user_is_on_the_homepage_of_the_website() throws Throwable {
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
	@When("^user put cursor on the paints&textures icon$")
	
		public void user_put_cursor_on_the_paints_textures_icon() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		obj.checkPaintsTexture();
		Thread.sleep(30000);
		obj.cookies();
		
		
	    
	}
	@Test(priority=3)
	@When("^click on PaintBudgetCalculator$")
	public void click_on_PaintBudgetCalculator() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		obj.budgetcalculator();
		Thread.sleep(3000);
}
	@Test(priority=4)
	@When("^click on quick calculator$")
	public void click_on_quick_calculator() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		obj.quickcalculator();
		Thread.sleep(30000);
		obj.checkprojecttype();
	   // Thread.sleep(30000);
	    obj.SpaceSelectorInt();
	    Thread.sleep(30000);
	    obj.carpetarea();
	    Thread.sleep(30000);
	    obj.getarea("1000");
	    //Thread.sleep(30000);
	    obj.calculatenow();
	    
}

	@Test(priority=5)
	@Then("^user should able to calculator the budget$")
	public void user_should_able_to_calculator_the_budget() throws Throwable {
		String expected = "Estimated Cost";
		  String actual = driver.findElement(By.xpath("//div[@class='slick-slide slick-current slick-active']//div[@class='budget-estimation d-flex justify-content-between']//div//span[contains(text(),'Estimated product cost:')]")).getText();
		  Assert.assertEquals(actual, expected);

		  if (actual.contentEquals("Estimated Cost")) {
		   System.out.println("we get the Estimated Cost");

		  } else {
		   System.out.println("Test Fail");
		  }

	    
	}

}