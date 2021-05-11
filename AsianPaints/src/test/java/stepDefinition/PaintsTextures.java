package stepDefinition;

import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import PagefactoryPOM.ColourAndTexture;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Test
public class PaintsTextures {
	WebDriver driver;
	//ColourAndTexture obj;
	
	            /***********INTERIOR_AND_EXTERIOR_PAINTS*********/
	
	@Test(priority=1)
	@Given("^user is at the Paints&Texture drop down$")
	public void user_is_at_the_Paints_Texture_drop_down() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:\\Capgemini Training\\capGTesting\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		//driver=new ChromeDriver();
		this.driver = new ChromeDriver();
		//driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
	   // assertTrue(driver.getTitle().contains("Wall Paints, Home Painting & Paint Colour Combinations in India - Asian Paints"));
		
		//obj = new ColourAndTexture(driver);
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		
		driver.get("https://www.asianpaints.com/");
		
		driver.manage().window().maximize();
		//driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
		Thread.sleep(30000);
		obj.checkPaintsTexture();
		//Thread.sleep(30000);
		String title = driver.getTitle();

		  // asserting page title
		  String expected_title = "Paints & Textures for Interior & Exterior Walls - Asian Paints";
		  Assert.assertEquals(title, expected_title);

		  if (title.contentEquals("Paints & Textures for Interior & Exterior Walls - Asian Paints")) {
		   System.out.println("Title Matched. User on home page");
		  } else {
		   System.out.println("Title NOT Matched.");
		  }
		  Thread.sleep(30000);
	
	}
	@Test(priority=2)
	@When("^user click on colours & textures icon$")
	public void user_click_on_colours_textures_icon() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		obj.checkInteriorWall();;
		Thread.sleep(30000);
		//new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.xpath("//span[normalize-space()='Colours & Textures']"))).click();
		String title = driver.getTitle();

		  // asserting page title
		  String expected_title = "Range of Colours, Wall Textures & Stencils for Home - Asian Paints";
		  Assert.assertEquals(title, expected_title);

		  if (title.contentEquals("Range of Colours, Wall Textures & Stencils for Home - Asian Paints")) {
		   System.out.println("Title Matched. User on home page");
		  } else {
		   System.out.println("Title NOT Matched.");
		  }
		  Thread.sleep(30000);
	 
	}
	@Test(priority=3)
	@When("^user click on interiors wall paints$")
	public void user_click_on_interiors_wall_paints() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(30000);
		obj.checkInteriorpaints();
		Thread.sleep(30000);
	   
	}
	@Test(priority=4)
	@Then("^user should able to see all the different types of paints$")
	public void user_should_able_to_see_all_the_different_types_of_paints() throws Throwable {
		String title = driver.getTitle();

		  // asserting page title
		  String expected_title = "Home Paint & Painting Colours Plain Finishes Interior Walls - Asian Paints";
		  Assert.assertEquals(title, expected_title);

		  if (title.contentEquals("Home Paint & Painting Colours Plain Finishes Interior Walls - Asian Paints")) {
		   System.out.println("Title Matched. User able to see all interior paints");
		  } else {
		   System.out.println("Title NOT Matched.");
		  }
}
	@Test(priority=5)
	@When("^user click on colours & textures$")
	public void user_click_on_colours_textures() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		Thread.sleep(30000);
		obj.checkExteriorWall();;
		//Thread.sleep(30000);
	    
	}
	@Test(priority=6)
	@When("^click on exteriors wall paints$")
	public void click_on_exteriors_wall_paints() throws Throwable {
		ColourAndTexture obj = PageFactory.initElements(driver, ColourAndTexture.class);
		Thread.sleep(30000);
		obj.checkExteriorpaints();
		String title = driver.getTitle();

		  // asserting page title
		  String expected_title = "Plain Finishes Enterior Walls for your Home - Asian Paints";
		  Assert.assertEquals(title, expected_title);

		  if (title.contentEquals("Plain Finishes Enterior Walls for your Home - Asian Paints")) {
		   System.out.println("Title Matched. User able to see all interior paints");
		  } else {
		   System.out.println("Title NOT Matched.");
		  }
		//Thread.sleep(3000);
		//driver.close();
	   
	}
	          
}
