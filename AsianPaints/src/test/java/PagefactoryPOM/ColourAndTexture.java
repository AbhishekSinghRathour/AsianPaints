
package PagefactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class ColourAndTexture {
	WebDriver driver;
	
	@FindBy(xpath="//span[@class='iconTextLinks__text visible-in-Desktop'][normalize-space()='PAINTS & TEXTURES']")
	WebElement Paints_Texture;
	@FindBy(xpath="///img[@title='Interior Wall Paints - Asian Paints']")
	WebElement Interior_wall;
	@FindBy(xpath="//img[@title='Interior Wall Paints - Asian Paints'])")
	WebElement Interior_Paints;
	@FindBy(xpath="//div[@class='apPlpListing baseCTSpace aem-GridColumn aem-GridColumn--default--12']//div[@class='circular-image-carousel']")
	WebElement All_Interior_Paints;
	@FindBy(xpath="//a[normalize-space()='Exterior Wall Paints']")
	WebElement Exterior_Paints;
	@FindBy(xpath="//div[@class='circular-image-carousel']")
	WebElement All_Exterior_Paints;
	//@FindBy(xpath="//footer[@class='parallax-back-color']//div[4]")
	//WebElement tools;
	@FindBy(xpath="//h2[normalize-space()='Paint Budget Calculator']")
	WebElement Budget_Calculator;
	@FindBy(xpath="//a[normalize-space()='Quick calculator']")
	WebElement Quick_Calculator;
	@FindBy(xpath="//h3[normalize-space()='Type of project']")
	WebElement Project_Type;
	@FindBy(xpath="//span[@class='form-global__custom-label-text align-middle d-inline-block'][normalize-space()='Fresh Painting']")
	WebElement Fresh_Painting;
	@FindBy(xpath="//span[@class='form-global__custom-label-text align-middle d-inline-block'][normalize-space()='Re-Painting']")
	WebElement Re_Painting;
	@FindBy(xpath="//h3[normalize-space()='Select space']")
	WebElement Space_Selector;
	@FindBy(xpath="//span[@class='form-global__custom-label-text align-middle d-inline-block'][normalize-space()='Interior']")
	WebElement Interior_Space;
	@FindBy(xpath="//span[@class='form-global__custom-label-text align-middle d-inline-block'][normalize-space()='Exterior']")
	WebElement Exterior_Space;
	@FindBy(xpath="//h3[normalize-space()='Size of home']")
	WebElement Home_Size;
	@FindBy(xpath="//span[normalize-space()='1BHK']")
	WebElement One_BHK;
	@FindBy(xpath="//span[normalize-space()='2BHK']")
	WebElement Two_BHK;
	@FindBy(xpath="//span[normalize-space()='3BHK or more']")
	WebElement Three_BHK_or_more;
	@FindBy(xpath="//h3[@class='label-name text-capitalize position-relative']")
	WebElement Carpet_area;
	@FindBy(xpath="//input[@placeholder='Ex: 1200']")
	WebElement Area;
	@FindBy(xpath="//a[normalize-space()='CALCULATE NOW']")
	WebElement Calculate_now;
	@FindBy(xpath="//div[@class='slick-slide slick-current slick-active']//div[@class='budget-estimation d-flex justify-content-between']//div//span[contains(text(),'Estimated product cost:')]")
	WebElement Estimate_Price;
	@FindBy(xpath="//span[normalize-space()='Find a Contractor']")
	WebElement ContractorFinder;
	@FindBy(xpath="//div[@class='leftAlign']//input[@id='ctaPincode']")
	WebElement City;
	@FindBy(xpath="//button[normalize-space()='Search']")
	WebElement Search;
	@FindBy(xpath="//button[@class='ctaText i-understand-btn text-uppercase']")
	 WebElement understand;
	@FindBy(xpath="//img[@title='Exterior Wall Paints - Asian Paints']")
	WebElement Exterior_wall;
	public ColourAndTexture(WebDriver driver)
	 {
	  this.driver=driver;
	  PageFactory.initElements(driver, this);
	  }
	public void checkPaintsTexture()
	{
		Paints_Texture.click();
	}
	public void checkInteriorWall()
	{	//new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.xpath("//span[normalize-space()='Colours & Textures']"))).click();
		Interior_wall.click();
	}
	public void checkInteriorpaints()
	{
		Interior_Paints.click();
		All_Interior_Paints.isDisplayed();
		
	}
	public void checkExteriorWall() {
		Exterior_wall.click();
	}
	public void checkExteriorpaints()
	{
		Exterior_Paints.click();
		All_Exterior_Paints.isDisplayed();
	}
	public void budgetcalculator()
	{	//tools.isSelected();
		Budget_Calculator.click();
		//Quick_Calculator.click();
	}
	public void quickcalculator()
	{
		Quick_Calculator.click();
	} 
	public void checkprojecttype()
	{
		Project_Type.click();
		Fresh_Painting.click();
		Re_Painting.click();
	}
	/*public void paintingType()
	{
		Fresh_Painting.click();
		Re_Painting.click();
	}
	/*public void Repaint()
	{
		Re_Painting.click();
	}*/
	public void SpaceSelectorInt()
	{
		Space_Selector.click();
		Interior_Space.click();
		Home_Size.click();
		One_BHK.click();
		Two_BHK.click();
		Three_BHK_or_more.click();
		//Exterior_Space.click();
	}
	/*public void Homesize()
	{
		Home_Size.click();
		One_BHK.click();
		Two_BHK.click();
		Three_BHK_or_more.click();
	}*/
	public void SpaceSelectorExt()
	{
		Exterior_Space.click();
	}
	public void carpetarea()
	{	
		Carpet_area.click();
	}
	public void getarea(String value) {
		Area.sendKeys(value);
	}
	public void calculatenow() {
		Calculate_now.click();
	}
	public void Estimateprice()
	{
		Estimate_Price.isDisplayed();
	}
	public void ContractorFinder()
	{
		ContractorFinder.click();
		
	}
	public void getcity(String name)
	{
		City.sendKeys(name);
	}
	public void serach()
	{
		Search.click();
	}
	public void cookies()
	{
		understand.click();
	}
	
}

