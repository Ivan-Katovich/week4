//import * as mainpage from "../pages/main.page";

let Page = require('../pages/page.js');
let page = new Page;

let MainPage = require('../pages/main.page.js');
let mainPage = new MainPage;

let ForHome = require('../pages/forHome.page.js');
let forHome = new ForHome;


describe('Opening pages and display products', function () {

    beforeEach(() => {
        page.open();
    });

    it('1 - should open For Home page', function () {

        return mainPage.openForHome()
            .then ( () => browser.getTitle()
                .then ( text => expect(text).toEqual('Global Leader in Flash Memory Storage Solutions | SanDisk')))
        }
    );

    it('2 - should open Mobile Storage page', function () {

            return mainPage.openForHome()
                .then ( () => forHome.openMobileStorage())
                .then ( () => browser.getTitle()
                    .then ( text => expect(text).toEqual('Mobile Storage | SanDisk')))
        }
    );

});