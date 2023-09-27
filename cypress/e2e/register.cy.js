///<reference types="cypress-iframe" />

describe('Register test', () => {
    it('Register test', () => {
        const registerEmailTest = "whitehornmatthewetoro@gmail.com"
        const registerFirstNameTest = "Buggs"
        const registerLastNameTest = "Bunny"
        const registerBirthYearTest = "2000"
        const registerPasswordTest = "Qwertyuiop1!"
        const invalidEmailTest = "sss"
        const invalidFirstName = "Sh!un%^"
        const invalidLastName = "Sh$$p"
        const lowercasePassword = "lower"
        const uppercasePassword = "UPPER"
        const numberPassword = "123456789"
        const shortPassword = "one"
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
        cy.get('#registerLink')
        .click()
        //The code below is trying to close the subscribe iframe
        cy.iframe('#offer_fbc30acb2d49a41a03d6-0', {timeout: maxTimeout})
        .find('#template-container > .showTemplate')
        .click()
        //Unhappy path
        cy.get('#reg-form-_')
        .clear({force: true})
        .type(invalidEmailTest, {force: true})
        cy.get('.sc-1letmz5-0')
        .contains('Please enter a valid email address')
        cy.get('#reg-form-firstName')
        .clear({force: true})
        .type(invalidFirstName, {force: true})
        cy.get(':nth-child(2) > .sc-1letmz5-0')
        //.contains("Special characters aren't allowed")
        cy.get('#reg-form-lastName')
        .clear({force: true})
        .type(invalidLastName, {force: true})
        cy.get(':nth-child(3) > .sc-1letmz5-0')
        //.contains("Special characters aren't allowed")
        cy.get('#reg-form-password')
        .clear({force: true})
        .type(lowercasePassword, {force: true})
        cy.get(':nth-child(5) > .sc-1letmz5-0')
        //.contains('Must be at last 6 characters, include an upper an lower case character and a number')
        cy.get('#reg-form-password')
        .clear({force: true})
        .type(uppercasePassword, {force: true})
        cy.get(':nth-child(5) > .sc-1letmz5-0')
        //.contains('Must be at last 6 characters, include an upper an lower case character and a number')
        cy.get('#reg-form-password')
        .clear({force: true})
        .type(numberPassword, {force: true})
        cy.get(':nth-child(5) > .sc-1letmz5-0')
        //.contains('Must be at last 6 characters, include an upper an lower case character and a number')
        cy.get('#reg-form-password')
        .clear({force: true})
        .type(shortPassword, {force: true})
        cy.get(':nth-child(5) > .sc-1letmz5-0')
        //.contains('Must be at last 6 characters, include an upper an lower case character and a number')
        //Happy path
        cy.get('#reg-form-_')
        .clear({force: true})
        .type(registerEmailTest, {force: true})
        cy.get('#reg-form-firstName')
        .clear({force: true})
        .type(registerFirstNameTest, {force: true})
        cy.get('#reg-form-lastName')
        .clear({force: true})
        .type(registerLastNameTest, {force: true})
        cy.get('#reg-form-birthYear')
        .type(registerBirthYearTest, {force: true})
        cy.get('#reg-form-password')
        .clear({force: true})
        .type(registerPasswordTest, {force: true})
        cy.get('.sc-76suco-0')
        .click({force: true})
        //.should('be.checked')
        cy.get('.sc-yi1opa-0')
        .click({force: true})
        cy.get('.sc-yi1opa-0')
        .click({force: true})
        cy.get('#reg-form')
        .contains('Create my account')
        .click({force: true})
    })
})