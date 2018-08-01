let { Given, setDefaultTimeout } = require('cucumber');
let expect = require('chai').expect;

let MainPage = require('../../pages/mainPage.js');
let mainPage = new MainPage;

let ShopPage = require('../../pages/shopPage.js');
let shopPage = new ShopPage;

    setDefaultTimeout(18000);

    Given(/^I click on the Shop icon$/, function () {
        return mainPage.clickElement('shopIcon');
    });

    Given(/^I click on the Login icon$/, function () {
        browser.ignoreSynchronization = true;
        return shopPage.clickElement('loginLink');
    });


