/// <reference types="Cypress"/>

import { loginPageElements} from "../../pageobjects/PageActions/LoginPageActions";

const Login_Elements = new loginPageElements

describe('Page Objects Model Tutorial', function() {
    it('Login Page', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        Login_Elements.username('Admin')
        Login_Elements.password('admin123')
        Login_Elements.LoginButton()
    })
})