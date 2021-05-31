class AccountInformationPage {

    directoryLink = '//div[@class="my-account__sidebar"]/descendant::a[text()="Adresboek"]'
    addNewAddressButton = '//button[@data-testid="address-add-button"]'
    firstNameField = '//input[@id="firstName"]'
    lastNameField = '//input[@id="lastName"]'
    address1Field = '//input[@id="address1"]'
    address2Field = '//input[@id="address2"]'
    cityField = '//input[@id="city"]'
    zipCodeField = '//input[@id="zipCode"]'
    saveButton = '//button[@data-testid="address-save-button"]'


    clickOnDirectoryLink(){
      const directory = $(this.directoryLink)
      directory.waitForDisplayed({timeout:20000})
      directory.click()
  
    }

    clickOnAddNewAddress(){
        const newAddressButton = $(this.addNewAddressButton)
        newAddressButton.waitForClickable({timeout:20000})
        newAddressButton.click()
    
      }

    saveNewAddress(){
      $(this.firstNameField).waitForDisplayed({timeout:20000})
      $(this.firstNameField).setValue(this.getRandomString())
      $(this.lastNameField).setValue(this.getRandomString())
      $(this.address1Field).setValue(this.getRandomString())
      $(this.address2Field).setValue(this.getRandomString())
      $(this.cityField).setValue(this.getRandomString())
      $(this.zipCodeField).setValue('1111 AB')
      $(this.saveButton).waitForClickable({timeout:20000})
      $(this.saveButton).click()
    }
    
    getRandomString(){
        return Math.random().toString(36).substring(7);
    }
  
  
  }
  
  module.exports = AccountInformationPage;