Feature: BudgetCalculator

Background: user is on Asian Paints Homepage
Given user is on the homepage of the website

Scenario: Quick Interior budget calculator
When  user put cursor on the paints&textures icon 
And click on PaintBudgetCalculator 
And click on quick calculator  
Then user should able to calculator the budget


