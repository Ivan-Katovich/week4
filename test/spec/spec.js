/*
Steps:
1. Open https://buildinglink.com/v2/global/login/login.aspx
2. Enter username
3. Enter password
4. Click ‘Enter’ button
5. Open ‘https://buildinglink.com/v2/mgmt/instructions/grid.aspx’
6. Click on instruction with ID 11175568
7. Click on ‘Edit’ button
8. Clear Instruction Text
9. Add random Instruction Text
10. Click ‘Save and exit’ button - Check that changes are saved and Edit button is displayed
11. Close browser

*/
const urlMain = 'https://buildinglink.com/v2/global/login/login.aspx';
const urlInstruction = 'https://buildinglink.com/v2/mgmt/instructions/grid.aspx';
const userName = 'sfront';
const password = 'd99c6';
const testText = 'A-TEST 88';
const buttonText = 'Edit/Expire Instruction';
const instructionXpath = '//div[@id="ctl00_MainContentPlaceHolder_currentInstructionsDataList_ctl00_instructionItemPanel"]';
const timeOfWait = 30000;

describe ('Editing front desk instructions', function () {

    it('should save new instruction text', function () {

        return browser.get(urlMain)
            .then ( () => element(by.name('ctl00$Login1$UserName')).sendKeys(userName))
            .then ( () => element(by.name('ctl00$Login1$Password')).sendKeys(password))
            .then ( () => element(by.id('LoginButton')).click())
            .then ( () => browser.get(urlInstruction))
            .then ( () => browser.driver.switchTo().frame(browser.driver.findElement(By.xpath("//*[@id='main']"))))
            .then ( () => element(by.xpath(instructionXpath)).click())
            .then ( () => element(by.id('ctl00_MainContentPlaceHolder_EditButton')).click())
            .then ( () => element(by.id('ctl00_MainContentPlaceHolder_instructionTextEditor_contentDiv')).clear())
            .then ( () => element(by.id('ctl00_MainContentPlaceHolder_instructionTextEditor_contentDiv')).sendKeys(testText))
            .then ( () => element(by.id('ctl00_MainContentPlaceHolder_SaveButton')).click())
            .then ( () => browser.wait(protractor.ExpectedConditions.visibilityOf(element(By.id('ctl00_MainContentPlaceHolder_EditButton')))))
            .then ( () => element(by.id('ctl00_MainContentPlaceHolder_EditButton')))
            .then ( editButtonText => editButtonText.getText()
                .then ( text => expect(text).toEqual(buttonText)))
        }
    );
});