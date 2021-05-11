@VerifyPaints&Textures

Feature: Paints&Textures 

Background: user is on Asian Paints Homepage
Given user is at the Paints&Texture drop down

@first
Scenario: verifying interior paints 
When user click on colours & textures icon 
And user click on interiors wall paints
Then user should able to see all the different types of paints 

@second
 Scenario: verifying exterior paints
When  user click on colours & textures
And click on exteriors wall paints
Then user should able to see all the different types of paints

