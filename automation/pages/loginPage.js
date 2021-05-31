class loginPage {

  emailField = '//input[@id="signin-email"]'
  passwordField = '//input[@id="signin-password"]'
  signUpButton = '//button[@data-testid="Button-primary-new"]'

  submitCredential(userName, password){
    const emailTextBox = $(this.emailField)
    const passwordTexTBox = $(this.passwordField)
    emailTextBox.setValue(userName)
    passwordTexTBox.setValue(password)
    const signUpButton = $(this.signUpButton)
    signUpButton.click()


  }

  errorMessageDisplayed(message){
    const invalidEmailErrorMessage = '//p[normalize-space(text())='+message+']'
    $(invalidEmailErrorMessage).waitForDisplayed({timeout:20000})

  }

}

module.exports = loginPage;
