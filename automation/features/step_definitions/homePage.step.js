const { Given, Then } = require('cucumber');

const homePage = require('../../pages/homePage.js');
const home = new homePage();

Then(/^User should see the account name and icon$/, () => {
    home.accountIconIsVisible();
});


Then(/^User sign out from application$/, () => {
    home.signOut();
});

Given(/^User is on account information page$/, () => {
    home.goToMyAccountPage();
});