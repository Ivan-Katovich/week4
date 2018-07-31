
const Page = require (`./test/support/pages/page`);

class MainPage extends Page {

    constructor() {

        super();

        this.url = 'https://www.sandisk.com/';

        this.data = {
            forHome: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home.html\']')),
            forBusiness: element(by.xpath('//*[@id="navbar"]//a[@href=\'/business.html\']')),
            oemDesign: element(by.xpath('//*[@id="navbar"]//a[@href=\'/oem-design.html\']')),
            about: element(by.xpath('//*[@id="navbar"]//a[@href=\'/about.html\']')),
            support: element(by.xpath('//*[@id="navbar"]//a[@href=\'/support.html\']')),
            menuElements: element.all(by.css('.nav-wrapper li'))
        };

        this.forHomeTitle = 'Global Leader in Flash Memory Storage Solutions | SanDisk';
        this.forBusinessTitle = 'For Business - Sandisk Flash Storage Solutions';
        this.oemDesignTitle = 'Sandisk - OEM Design Solutions';
    }

    clickMainMenuElement(item) {
         const rootEl = this.data.menuElements.filter((el) => {
            return el.getText()
                .then((text) => {
                    return text.toLowerCase().trim() === item.toLowerCase();
                });
        }).first();
        return rootEl.click();
    }

}

module.exports = MainPage;