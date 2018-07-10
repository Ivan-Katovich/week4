
let MainPage = require('../pages/mainPage.js');
let mainPage = new MainPage;

let ForHome = require('../pages/forHomePage.js');
let forHome = new ForHome;


describe('Opening pages and displaying products', function () {

    beforeEach ( () => {
        return mainPage.goToPage();
    });

    it('1 - should open For Home page', function () {
        return mainPage.data.forHome.click()
            .then ( () => browser.getTitle())
            .then ( text => expect(text).toEqual(mainPage.forHomeTitle))
        }
    );

    it('2 - should open For Business page', function () {
            return mainPage.data.forBusiness.click()
                .then ( () => browser.getTitle())
                .then ( text => expect(text).toEqual(mainPage.forBusinessTitle))
        }
    );

    it('3 - should open OEM Design page', function () {
            return mainPage.data.oemDesign.click()
                .then ( () => browser.getTitle())
                .then ( text => expect(text).toEqual(mainPage.oemDesignTitle))
        }
    );

    it('1.1 - should display Mobile Storage section on the For Home page', function () {
            return mainPage.data.forHome.click()
                .then ( () => forHome.data.mobileStorage.click())
                .then ( () => browser.getCurrentUrl())
                .then ( text => expect(text).toEqual(forHome.mobileStorageTitle))
        }
    );
 });


