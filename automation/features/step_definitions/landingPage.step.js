const { Given, When } = require('cucumber');

const landingPage = require('../../pages/landingPage.js');
const landing = new landingPage();


Given(/^User is on the Tommy.com Landing Page$/, () => {
    landing.goToLandingPage();
});

When(/^User clicks on sign up button$/, () => {
    landing.clickSignUpButton();
});

When(/^User clicks on accept Alert$/, () => {
    landing.acceptCookiesAlert();
});


