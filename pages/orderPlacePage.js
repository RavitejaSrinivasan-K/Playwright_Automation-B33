
import {userdata} from "../test-Data/userData.json"

export class CartPage {

    constructor(page) {
        this.page = page
        this.cartLinkTxt = page.locator('[id="cartur"]')
        this.placeOrderBtn = page.locator('//button[text()="Place Order"]')

        this.name = page.locator('[id="name"]')
        this.country = page.locator('[id="country"]')
        this.city = page.locator('[id="city"]')
        this.creditCard = page.locator('[id="card"]')
        this.month = page.locator('[id="month"]')
        this.year = page.locator('[id="year"]')

        this.purchaseBtn = page.locator('[onclick="purchaseOrder()"]')
    }

    async goToCart(){
        await this.cartLinkTxt.click()
    }

    async orderBtn(){
        await this.placeOrderBtn.click()
    }

    async fillDetails(){
        await this.name.fill(userdata.name)
        await this.country.fill(userdata.Country)
        await this.city.fill(userdata.City)
        await this.creditCard.fill(userdata.Creditcard)
        await this.month.fill(userdata.Month)
        await this.year.fill(userdata.Year)

        await this.purchaseBtn.click()
    }

    async screenshots(){
        await this.page.screenshot({path : "images/" + "orderPlaced.png"})
    }


}