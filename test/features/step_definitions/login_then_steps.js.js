let { Then, setDefaultTimeout } = require('cucumber');
let expect = require('chai').expect;

let LoginPage = require('../../pages/loginPage.js');
let loginPage = new LoginPage;

setDefaultTimeout(20000);

Then(/^I should see "Enter a valid email address." error$/, async function () {

    let state = await loginPage.isElementVisible('emailErrorMessage');
    expect(state).to.equal(true);

});
