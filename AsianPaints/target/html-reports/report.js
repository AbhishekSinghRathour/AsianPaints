$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BudgetCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "BudgetCalculator",
  "description": "",
  "id": "budgetcalculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Quick budget calculator",
  "description": "",
  "id": "budgetcalculator;quick-budget-calculator",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user put cursor on the paints\u0026textures icon and click on PaintBudgetCalculator and click on quick calculator",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should able to calculator the budget",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintsTextures.user_is_on_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 147606267600,
  "status": "passed"
});
formatter.match({
  "location": "PaintsTextures.user_put_cursor_on_the_paints_textures_icon_and_click_on_PaintBudgetCalculator_and_click_on_quick_calculator()"
});
formatter.result({
  "duration": 1052497000,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-47HIII8\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\abhishek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62271}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e528718c2a653bbf36820b2a9dc22fb8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat PagefactoryPOM.ColourAndTexture.budgetcalculator(ColourAndTexture.java:87)\r\n\tat stepDefinition.PaintsTextures.user_put_cursor_on_the_paints_textures_icon_and_click_on_PaintBudgetCalculator_and_click_on_quick_calculator(PaintsTextures.java:85)\r\n\tat ✽.When user put cursor on the paints\u0026textures icon and click on PaintBudgetCalculator and click on quick calculator(BudgetCalculator.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PaintsTextures.user_should_able_to_calculator_the_budget()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 118723254500,
  "status": "passed"
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
  "duration": 81779500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-47HIII8\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\abhishek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62447}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8c56f465c9c4b7e5578ef3806b9739ca\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat PagefactoryPOM.ColourAndTexture.checkColourTexture(ColourAndTexture.java:72)\r\n\tat stepDefinition.PaintsTextures.user_click_on_colours_textures_icon(PaintsTextures.java:39)\r\n\tat ✽.When user click on colours \u0026 textures icon(Colour\u0026Texture.feature:10)\r\n",
  "status": "failed"
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
  "duration": 98466053600,
  "status": "passed"
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
  "duration": 243000600,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-47HIII8\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\abhishek\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e413bf5e76613a3debb06c7c7814d7f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat PagefactoryPOM.ColourAndTexture.checkColourTexture(ColourAndTexture.java:72)\r\n\tat stepDefinition.PaintsTextures.user_click_on_colours_textures(PaintsTextures.java:57)\r\n\tat ✽.When user click on colours \u0026 textures(Colour\u0026Texture.feature:16)\r\n",
  "status": "failed"
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
  "location": "PaintsTextures.user_is_at_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 197015515700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "successful in finding the contractor in our locality",
  "description": "",
  "id": "contractorfinder;successful-in-finding-the-contractor-in-our-locality",
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
  "name": "user put cursor on the paints\u0026textures icon",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on Contractor Finder",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter valid city name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to see the list of contractor",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintsTextures.user_put_cursor_on_the_paints_textures_icon()"
});
formatter.result({
  "duration": 917024900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "location": "PaintsTextures.user_is_at_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 111230346100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "unsuccessful in finding the contractor",
  "description": "",
  "id": "contractorfinder;unsuccessful-in-finding-the-contractor",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user put cursor on the paints\u0026textures icon",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user click on Contractor Finder",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "enter invalid city",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintsTextures.user_put_cursor_on_the_paints_textures_icon()"
});
formatter.result({
  "duration": 559577700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "PaintsTextures.enter_invalid_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaintsTextures.user_should_get_error_message()"
});
formatter.result({
  "status": "skipped"
});
});