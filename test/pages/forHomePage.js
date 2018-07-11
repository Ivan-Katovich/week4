
const Page = require (`./page`);

class ForHomePage extends Page {

    constructor() {

        super();

        this.url = 'https://www.sandisk.com/home';

        this.data = {
            mobileStorage: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[1]/a')),
            cardsReaders: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[2]/a')),
            usbFlash: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[3]/a')),
            ssd: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[4]/a')),
            mp3Players: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[5]/a')),
            extremeTeam: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[6]/a')),
            stories: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[7]/a')),
            shopNow: element(by.xpath('//*[@id="navbar"]/div[3]/nav/div[2]/ul/li[8]/a'))
        };

        this.mobileStorageTitle = 'Mobile Storage | SanDisk';
    }
}

module.exports = ForHomePage;