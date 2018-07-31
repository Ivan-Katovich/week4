let cucumber = require('cucumber');

let MainPage = require('../pages/mainPage.js');
let mainPage = new MainPage;

let ForHomePage = require('../pages/forHomePage.js');
let forHomePage = new ForHomePage;

cucumber.defineSupportCode(function({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(180000);

    Given(/^I am on the homepage$/, function() {
        return mainPage.goToPage();
    });

    When('I click on the {string} button', function (pageName) {
        return mainPage.clickMainMenuElement(pageName);
    });

    When('I click on the {string} section', function (pageName) {
        return forHomePage.clickForHomeMenuElement(pageName);
    });

    Then('I should see {string} page', function (pageName) {
        let title = browser.getTitle();
        switch (pageName){
            case 'For Home': expect(title).toEqual(mainPage.forHomeTitle);
                                break;
            case 'For Business': expect(title).toEqual(mainPage.forBusinessTitle);
                                break;
            case 'OEM Design': expect(title).toEqual(mainPage.oemDesignTitle);
                                break;
            case 'Mobile Storage': expect(title).toEqual(forHomePage.mobileStorageTitle);
                break;
        }
    });
});