
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

        this.forHomeTitle = 'Global Leader in Flash Memory Storage Solutions | SanDisk';
        this.forBusinessTitle = 'For Business - Sandisk Flash Storage Solutions';
        this.oemDesignTitle = 'Sandisk - OEM Design Solutions';
    }
}

module.exports = MainPage;