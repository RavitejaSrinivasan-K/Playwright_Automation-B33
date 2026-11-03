
const {expect} = require("@playwright/test")

export class LoginPage {

    constructor(page){
        this.page = page
        this.loginLinkTxt = '[id="login2"]'
        this.usernameField = '[id="loginusername"]'
        this.passwordField = '[id="loginpassword"]'
        this.loginBtn = '//button[text()="Log in"]'
        this.logoutTxt = '[id="logout2"]'
    }

    async navigate(){
        await this.page.goto(process.env.UI_BASEURL)
    }

    async clickLinkTxt(){
        await this.page.locator(this.loginLinkTxt).click()
    }

    async enterUsername(user){
        await this.page.locator(this.usernameField).fill(user)
    }

    async enterPassword(pass){
        await this.page.locator(this.passwordField).fill(pass)
    }

    async clickLogin(){
        await this.page.locator(this.loginBtn).click()
    }

    async verifyDashboard(){
        await expect(this.page.locator(this.logoutTxt)).toBeVisible()
    }

}





