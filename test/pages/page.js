
class Page {

    constructor() {}

    getUrl() {
        return browser.getCurrentUrl()
    }

    goToPage(){
        return browser.get(this.url)
    }

    isElementVisible(name) {
        return this.data[name].isDisplayed()
    }

    clickElement (elem) {
        return this.data[elem].click()

    }

}

module.exports = Page;