const Page = require (`./page.js`);

class LoginPage extends Page {

    constructor() {

        super();

        this.data = {
            emailAddress: element(by.id('loginEmail')),
            password: element(by.id('loginPassword')),
            loginButton: element(by.xpath('//*[@id="dr_siteButtons"]/input'))
        };
    }
}

module.exports = LoginPage;