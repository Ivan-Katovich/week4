
let MainPage = require('../pages/mainPage.js');
let mainPage = new MainPage;

let ForHomePage = require('../pages/forHomePage.js');
let forHomePage = new ForHomePage;


describe('Opening pages and displaying products', function () {

    beforeEach ( () => {
        return mainPage.goToPage();
    });

    it('1 - should open For Home page', function () {
        return mainPage.clickMainMenuElement('For Home')
            .then ( () => browser.getTitle())
            .then ( text => expect(text).toEqual(mainPage.forHomeTitle))
        }
    );

    it('2 - should open For Business page', function () {
        return mainPage.clickMainMenuElement('For Business')
                .then ( () => browser.getTitle())
                .then ( text => expect(text).toEqual(mainPage.forBusinessTitle))
        }
    );

    it('3 - should open OEM Design page', function () {
        return mainPage.clickMainMenuElement('OEM Design')
                .then ( () => browser.getTitle())
                .then ( text => expect(text).toEqual(mainPage.oemDesignTitle))
        }
    );

    it('1.1 - should display Mobile Storage section on the For Home page', function () {
        return mainPage.clickElement('forHome')
                .then ( () => forHomePage.clickForHomeMenuElement('Mobile Storage'))
                .then ( () => browser.getTitle())
                .then ( text => expect(text).toEqual(forHomePage.mobileStorageTitle))
        }
    );
 });


