function Page () {}

Page.prototype.open = function () {
    browser.get('https://www.sandisk.com/');
    browser.waitForAngular();
};

module.exports = Page;