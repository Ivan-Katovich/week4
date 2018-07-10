'use strict';

function Page () {}

Page.prototype = Object.create({}, {

    open: function () {
        browser.get('https://www.sandisk.com/');
        browser.waitForAngular();
    }

});

module.exports = Page;