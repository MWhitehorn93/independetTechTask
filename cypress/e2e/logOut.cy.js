///<reference types="cypress-iframe" />

describe('Log out test', () => {
    it('Log out test', () => {
      const usernameTest = "cypress.test@gmail.com"
      const passwordTest = "Qwerty12345"
      const nametest = "A. QA Test"
      const maxTimeout = 1000 * 1000
      //Test visits the independent url
      cy.visit('https://www.independent.co.uk/')
      //Using the iframe add on, code selects the required iframe
      cy.iframe('#sp_message_iframe_849879')
      //Notice is ID for the element that holds the cookies agree button
      .find('#notice')
      //Instead of using a long CSS selector I have opted to use contains to find the agree button and then click it
      .contains('AGREE')
      .click()
      //Code clicks on the log in button via the top banner
      cy.get('.sc-1pkogcm-1')
      .contains('Log in')
      .click()
      //Code retreives the log in email text box then types the name stored above
      cy.get('#login-form-email')
      .clear()
      .type(usernameTest)
      //Code retreives the log in password text box then types the password stored above
      cy.get('#login-form-password')
      .clear()
      .type(passwordTest)
      //Login button is cicked
      cy.get('#LoginDropdownButtonInside')
      .contains('Submit')
      .click()
      //The main banner is selected and a max timeout is used to get the profile then it is clicked
      cy.get('.sc-1pkogcm-1')
      .contains(nametest, { timeout: maxTimeout})
      .click()
      //When on the profile page, the logout button is selected, asserted and clicked
      cy.get(':nth-child(7) > .sc-emyvp9-3')
      .contains('Logout')
      .click({force: true})
      //Final assertion that the user is logged out
      cy.get('.sc-1pkogcm-1')
      .contains('Log in / Register')
    })
  })