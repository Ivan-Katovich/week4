module.exports={
    mainMenuForHome :{
        mobileStorage: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a')),
        cardsReaders: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')),
        usbFlash: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/a')),
        ssd: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[4]/a')),
        mp3Players: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[5]/a')),
        extremeTeam: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[6]/a')),
        stories: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[7]/a')),
        shopNow: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[8]/a'))
    },

    openMobileStorage: function(){
        let mainMenuForHome = this.mainMenuForHome;
        mainMenuForHome.mobileStorage.isDisplayed();
        mainMenuForHome.mobileStorage.click();
    },

    openCardsReaders: function(){
        let mainMenuForHome = this.mainMenuForHome;
        mainMenuForHome.forBusiness.isDisplayed();
        mainMenuForHome.forBusiness.click();
    },

    openUsbFlash: function(){
        let mainMenuForHome = this.mainMenuForHome;
        mainMenuForHome.usbFlash.isDisplayed();
        mainMenuForHome.usbFlash.click();
    },

    openSsd: function(){
        let mainMenuForHome = this.mainMenuForHome;
        mainMenuForHome.ssd.isDisplayed();
        mainMenuForHome.ssd.click();
    },

    openExtremeTeam: function(){
        let mainMenuForHome = this.mainMenuForHome;
        mainMenuForHome.extremeTeam.isDisplayed();
        mainMenuForHome.extremeTeam.click();
    },

    openStories: function(){
        let mainMenuForHome = this.mainMenuForHome;
        mainMenuForHome.stories.isDisplayed();
        mainMenuForHome.stories.click();
    },

    openShopNow: function(){
        let mainMenuForHome = this.mainMenuForHome;
        mainMenuForHome.shopNow.isDisplayed();
        mainMenuForHome.shopNow.click();
    }

};