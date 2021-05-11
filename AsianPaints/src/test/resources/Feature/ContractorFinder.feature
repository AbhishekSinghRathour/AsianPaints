@FindContractor

Feature: ContractorFinder

Background: user is on Asian Paints Homepage
Given user is at the homepage of the website

@first
Scenario: successful in finding the contractor in our locality
When user put cursor on the paints&textures icon
And user click on Contractor Finder
And enter valid city name 
Then user should able to see the list of contractor 

