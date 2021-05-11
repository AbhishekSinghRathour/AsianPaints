$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BudgetCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "BudgetCalculator",
  "description": "",
  "id": "budgetcalculator",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "user is on Asian Paints Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the homepage of the website",
  "keyword": "Given "
});
formatter.match({
  "location": "BudgetCalculator.user_is_on_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 65076087500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Quick Interior budget calculator",
  "description": "",
  "id": "budgetcalculator;quick-interior-budget-calculator",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user put cursor on the paints\u0026textures icon",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on PaintBudgetCalculator",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on quick calculator",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should able to calculator the budget",
  "keyword": "Then "
});
formatter.match({
  "location": "BudgetCalculator.user_put_cursor_on_the_paints_textures_icon()"
});
formatter.result({
  "duration": 34250050500,
  "status": "passed"
});
formatter.match({
  "location": "BudgetCalculator.click_on_PaintBudgetCalculator()"
});
formatter.result({
  "duration": 9106932700,
  "status": "passed"
});
formatter.match({
  "location": "BudgetCalculator.click_on_quick_calculator()"
});
formatter.result({
  "duration": 92445704000,
  "status": "passed"
});
formatter.match({
  "location": "BudgetCalculator.user_should_able_to_calculator_the_budget()"
});
formatter.result({
  "duration": 267307500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027slick-slide slick-current slick-active\u0027]//div[@class\u003d\u0027budget-estimation d-flex justify-content-between\u0027]//div//span[contains(text(),\u0027Estimated product cost:\u0027)]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-47HIII8\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\abhishek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56927}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 705b2e63cd1f9b32d8465a2d096e0863\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027slick-slide slick-current slick-active\u0027]//div[@class\u003d\u0027budget-estimation d-flex justify-content-between\u0027]//div//span[contains(text(),\u0027Estimated product cost:\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.BudgetCalculator.user_should_able_to_calculator_the_budget(BudgetCalculator.java:73)\r\n\tat ✽.Then user should able to calculator the budget(BudgetCalculator.feature:10)\r\n",
  "status": "failed"
});
formatter.uri("Colour\u0026Texture.feature");
formatter.feature({
  "line": 3,
  "name": "Paints\u0026Textures",
  "description": "",
  "id": "paints\u0026textures",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@VerifyPaints\u0026Textures"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "user is on Asian Paints Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is at the Paints\u0026Texture drop down",
  "keyword": "Given "
});
formatter.match({
  "location": "PaintsTextures.user_is_at_the_Paints_Texture_drop_down()"
});
formatter.result({
  "duration": 57326204500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-47HIII8\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\abhishek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57072}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8aa6be816d54f61ade49dcdca34b5e04\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat stepDefinition.PaintsTextures.user_is_at_the_Paints_Texture_drop_down(PaintsTextures.java:42)\r\n\tat ✽.Given user is at the Paints\u0026Texture drop down(Colour\u0026Texture.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "verifying interior paints",
  "description": "",
  "id": "paints\u0026textures;verifying-interior-paints",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user click on colours \u0026 textures icon",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on interiors wall paints",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should able to see all the different types of paints",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintsTextures.user_click_on_colours_textures_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaintsTextures.user_click_on_interiors_wall_paints()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaintsTextures.user_should_able_to_see_all_the_different_types_of_paints()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "user is on Asian Paints Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is at the Paints\u0026Texture drop down",
  "keyword": "Given "
});
formatter.match({
  "location": "PaintsTextures.user_is_at_the_Paints_Texture_drop_down()"
});
formatter.result({
  "duration": 69051460700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-47HIII8\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\abhishek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57127}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 82d48854061a1ca4b500af85b923f211\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027iconTextLinks__text visible-in-Desktop\u0027][normalize-space()\u003d\u0027PAINTS \u0026 TEXTURES\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat PagefactoryPOM.ColourAndTexture.checkPaintsTexture(ColourAndTexture.java:78)\r\n\tat stepDefinition.PaintsTextures.user_is_at_the_Paints_Texture_drop_down(PaintsTextures.java:45)\r\n\tat ✽.Given user is at the Paints\u0026Texture drop down(Colour\u0026Texture.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "verifying exterior paints",
  "description": "",
  "id": "paints\u0026textures;verifying-exterior-paints",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user click on colours \u0026 textures",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on exteriors wall paints",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should able to see all the different types of paints",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintsTextures.user_click_on_colours_textures()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaintsTextures.click_on_exteriors_wall_paints()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaintsTextures.user_should_able_to_see_all_the_different_types_of_paints()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ContractorFinder.feature");
formatter.feature({
  "line": 3,
  "name": "ContractorFinder",
  "description": "",
  "id": "contractorfinder",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FindContractor"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "user is on Asian Paints Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is at the homepage of the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ContractorFinder.user_is_at_the_homepage_of_the_website()"
});
