
const Page = require (`./page`);

class MainPage extends Page {

    constructor() {

        super();

        this.url = 'https://www.sandisk.com/';

        this.data = {
            forHome: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a')),
            forBusiness: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')),
            oemDesign: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/a')),
            about: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[4]/a')),
            support: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[5]/a'))
        };

        this.menuElements = element.all(by.css('.nav-wrapper li'));

        this.forHomeTitle = 'Global Leader in Flash Memory Storage Solutions | SanDisk';
        this.forBusinessTitle = 'For Business - Sandisk Flash Storage Solutions';
        this.oemDesignTitle = 'Sandisk - OEM Design Solutions';
    }

    clickMenuElement(item) {
         const rootEl = this.menuElements.filter((el) => {
            return el.getText()
                .then((text) => {
                    return text === item;
                });
        }).first();
        return rootEl.click();
    }

}

module.exports = MainPage;