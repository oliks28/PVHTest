const { When, Then } = require('cucumber');

const accountInformationPage = require('../../pages/accountInformationPage.js');
const account = new accountInformationPage();

When(/^User clicks on direcotry link$/, () => {
    account.clickOnDirectoryLink()
});


When(/^User clicks on add new address buton$/, () => {
    account.clickOnAddNewAddress()

});

Then(/^Users should be able to save new address$/, () => {
   account.saveNewAddress()
});