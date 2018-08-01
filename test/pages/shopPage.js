const Page = require (`./page.js`);

class ShopPage extends Page {

    constructor() {

        super();

        this.url = 'http://shop.sandisk.com/store?Action=DisplayHomePage&Env=BASE&Locale=en_US&SiteID=sdiskus';

        this.data = {
            loginLink: element(by.css('.login_link')),
            signUp: element(by.css('.signUp'))
        };
    }
}

module.exports = ShopPage;