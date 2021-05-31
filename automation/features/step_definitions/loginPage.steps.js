const { Then } = require('cucumber');

const loginPage = require('../../pages/loginPage.js');
const loginObj = new loginPage();

Then(/^User submits credentials(.*) and (.*)$/, (userName, password) => {
    loginObj.submitCredential(userName, password);
});

Then(/^User should see an error message(.*)$/, (errorMessage) => {
    loginObj.errorMessageDisplayed(errorMessage);
});
