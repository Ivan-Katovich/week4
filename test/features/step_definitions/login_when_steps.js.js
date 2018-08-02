let { When, setDefaultTimeout } = require('cucumber');

let LoginPage = require('../../pages/loginPage.js');
let loginPage = new LoginPage;

setDefaultTimeout(20000);


When(/^I fill in "([^"]*)" with "([^"]*)"$/, function (field, value) {
    let em = loginPage.data.emailAddress;
    let pa = loginPage.data.password;

    if (field === 'Email') {
        return em.sendKeys(value)
    } else if  (field === 'Password') {
        return pa.sendKeys(value)
            //.then ( ()=> browser.sleep(15000))
    }
});

When(/^I press "Login"$/, function () {
    let bu = loginPage.data.loginButton;
    return bu.click()
});
