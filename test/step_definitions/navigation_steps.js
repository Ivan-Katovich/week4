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

});