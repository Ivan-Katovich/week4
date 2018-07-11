
const Page = require (`./page`);

class ForHome extends Page {

    constructor() {

        super();

        this.url = 'https://www.sandisk.com/home';

        this.data = {
            mobileStorage: element(by.css('nav.navbar:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')),
            cardsReaders: element(by.xpath('/html/body/div[2]/div/header/div[2]/div/div[3]/nav/div[2]/ul/li[2]/a')),
            usbFlash: element(by.xpath('/html/body/div[2]/div/header/div[2]/div/div[3]/nav/div[2]/ul/li[3]/a')),
            ssd: element(by.xpath('/html/body/div[2]/div/header/div[2]/div/div[3]/nav/div[2]/ul/li[4]/a')),
            mp3Players: element(by.xpath('/html/body/div[2]/div/header/div[2]/div/div[3]/nav/div[2]/ul/li[5]/a')),
            extremeTeam: element(by.xpath('/html/body/div[2]/div/header/div[2]/div/div[3]/nav/div[2]/ul/li[6]/a')),
            stories: element(by.xpath('/html/body/div[2]/div/header/div[2]/div/div[3]/nav/div[2]/ul/li[7]/a')),
            shopNow: element(by.xpath('/html/body/div[2]/div/header/div[2]/div/div[3]/nav/div[2]/ul/li[8]/a'))
        };

        this.mobileStorageTitle = 'Mobile Storage | SanDisk';
    }
}

module.exports = ForHome;