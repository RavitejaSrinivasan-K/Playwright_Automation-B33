

import {test, expect} from "@playwright/test"
import { LoginPage } from "../../pages/loginPage"
import { HomePage } from "../../pages/homePage"
import { CartPage } from "../../pages/orderPlacePage"


test("Handling DemoBlaze E2E" , async ({page}) => {

    let login = new LoginPage(page)
    let home = new HomePage(page)
    let cart = new CartPage(page)

    await login.navigate()
    await login.clickLinkTxt()
    await login.enterUsername("Raviteja18")
    await login.enterPassword("Trend@123")
    await login.clickLogin()
    await login.verifyDashboard()

    await home.printProducts()
    await home.selectProduct()
    await home.waitForUrl()
    await home.addToCartButton()

    await cart.goToCart()
    await cart.orderBtn()
    await cart.fillDetails()
    await cart.screenshots()

})













