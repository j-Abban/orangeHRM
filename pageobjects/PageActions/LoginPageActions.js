//Login Page Actions
const loginElementsLocators = require('../PageElements/LoginPageElements.json')

export class loginPageElements {


    username (usernamee){
        cy.get(loginElementsLocators.LoginPageLocators.username_text).type(usernamee)
        return
    }

    password(passwordd){
        cy.get(loginElementsLocators.LoginPageLocators.password_text).type(passwordd)
        return
    }

    LoginButton(){
        cy.get(loginElementsLocators.LoginPageLocators.login_button).click()
        return

    }
}