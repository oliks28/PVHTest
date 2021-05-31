class HomePage {

  accountIcon = '//span[@class="header__link account__icon header__link--name"]'
  signOutButton = '//button[@data-testid="sign-out-button"]'

  accountIconIsVisible(){
    const $Icon = $(this.accountIcon)
    $Icon.waitForDisplayed({timeout:20000})
    expect($Icon).toBeDisplayed()

  }

  signOut(){
    const signOut = $(this.signOutButton)
    const account = $(this.accountIcon)
    account.waitForClickable({ timeout: 20000 })
    account.click()
    signOut.waitForClickable({ timeout: 5000 })
    signOut.click()
  }
  
  goToMyAccountPage(){
    const icon = $(this.accountIcon)
    icon.click()
  }


}

module.exports = HomePage;
