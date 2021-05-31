Feature: Validate the Login functionality of nl.tommy.com Site

  @LoginwithInvalidCredentials
  Scenario: Verify user could see specfic error when not enough information is provided during login

    Given User is on the Tommy.com Landing Page
    When User clicks on accept Alert
    When User clicks on sign up button
    Then User submits credentials invalid@gmail.com and Password12
    Then User should see an error message 'Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens.'

  @LoginwithValidCredentials
  Scenario: Verify user can login with valid credentails

    Given User is on the Tommy.com Landing Page
    When User clicks on sign up button
    Then User submits credentials kenn.wale@gmail.com and Password12
    Then User should see the account name and icon

  @AddNewAddress
  Scenario: Verify logged in user can add new address

    Given User is on account information page
    When User clicks on direcotry link
    When User clicks on add new address buton
    Then Users should be able to save new address