
const Page = require (`./page`);

class ForHomePage extends Page {

    constructor() {

        super();

        this.url = 'https://www.sandisk.com/home';

        this.menuElements = element.all(by.css('.nav-wrapper li'));

        this.data = {
            mobileStorage: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home/mobile-device-storage.html\']')),
            cardsReaders: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home/memory-cards.html\']')),
            usbFlash: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home/usb-flash.html\']')),
            ssd: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home/ssd.html\']')),
            mp3Players: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home/mp3-players.html\']')),
            extremeTeam: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home/extreme-team.html\']')),
            stories: element(by.xpath('//*[@id="navbar"]//a[@href=\'/home/stories.html\']')),
            shopNow: element(by.xpath('//*[@id="navbar"]//a[@href=\'http://shop.sandisk.com/store?Action=DisplayHomePage&Env=BASE&Locale=en_US&SiteID=sdiskus\']'))
        };

        this.mobileStorageTitle = 'Mobile Storage | SanDisk';
    }

    clickForHomeMenuElement(item) {
        const rootEl = this.menuElements.filter((el) => {
            return el.getText()
                .then((text) => {
                    return text.toLowerCase().trim() === item.toLowerCase();
                });
        }).first();
        return rootEl.click();
    }

}

module.exports = ForHomePage;