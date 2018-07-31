let cucumber = require('cucumber');
let expect = require('chai').expect;

let MainPage = require('../../support/pages/mainPage.js');
let mainPage = new MainPage;

let ForHomePage = require('../../support/pages/forHomePage.js');
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

    Then('I should see {string} page', async function (pageName) {
        let title = await browser.getTitle();
        console.log(title);
        switch (pageName){
            case 'For Home': expect(title).to.equal(mainPage.forHomeTitle);
                                break;
            case 'For Business': expect(title).to.equal(mainPage.forBusinessTitle);
                                break;
            case 'OEM Design': expect(title).to.equal(mainPage.oemDesignTitle);
                                break;
            case 'Mobile Storage': expect(title).to.equal(forHomePage.mobileStorageTitle);
                break;
        }
    });
});