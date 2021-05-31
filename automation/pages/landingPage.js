const data = require('../files/testData/testData.js');

class LandingPage {

  acceptAlert = '//button[text()="ACCEPTEER ALLES"]'
  signUp = '//button[@data-testid="sign-in-button"]';
  accountIcon = '//span[@class="header__link account__icon header__link--name"]'


  goToLandingPage() {
    browser.url(data['url']);
  }

  acceptCookiesAlert(){
    $(this.acceptAlert).waitForClickable({timeout:20000})
    $(this.acceptAlert).click()
  }

  clickSignUpButton() {
    $(this.signUp).waitForClickable({ timeout: 20000 })
    const searchField = $(this.signUp)
    searchField.waitForDisplayed()
    searchField.click()

  }

}

module.exports = LandingPage;
