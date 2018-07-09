module.exports={
    mainMenu :{
        forHome: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a')),
        forBusiness: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')),
        oemDesign: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/a')),
        about: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[4]/a')),
        support: element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[5]/a'))
    },

    openForHome: function(){
        let mainMenu = this.mainMenu;
        mainMenu.forHome.isDisplayed();
        mainMenu.forHome.click();
    },

    openForBusiness: function(){
        let mainMenu = this.mainMenu;
        mainMenu.forBusiness.isDisplayed();
        mainMenu.forBusiness.click();
    },

    openOemDesign: function(){
        let mainMenu = this.mainMenu;
        mainMenu.oemDesign.isDisplayed();
        mainMenu.oemDesign.click();
    },

    openAbout: function(){
        let mainMenu = this.mainMenu;
        mainMenu.about.isDisplayed();
        mainMenu.about.click();
    },

    openSupport: function(){
        let mainMenu = this.mainMenu;
        mainMenu.support.isDisplayed();
        mainMenu.support.click();
    }

};