
const Page = require (`./test/support/pages/page`);

class ForHomePage extends Page {

    constructor() {

        super();

        this.url = 'https://www.sandisk.com/home';

        this.data = {
            menuElements: element.all(by.css('.nav-wrapper li'))
        };

        this.mobileStorageTitle = 'Mobile Storage | SanDisk';
    }

    clickForHomeMenuElement(item) {
        const rootEl = this.data.menuElements.filter((el) => {
            return el.getText()
                .then((text) => {
                    return text.toLowerCase().trim() === item.toLowerCase();
                });
        }).first();
        return rootEl.click();
    }

}

module.exports = ForHomePage;