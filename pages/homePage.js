

export class HomePage {

    constructor(page){
        this.page = page
        this.prodList = '[class="hrefch"]'
        this.productName = page.locator(`//a[text()="${process.env.UI_PRODUCT}"]`)
        this.addToCartBtn = page.locator('text=Add to cart')
        
    }

    async printProducts(){
    const productsList = await this.page.$$(this.prodList)

        for (const element of productsList) {
          const txt = await element.textContent()
          console.log(txt)
        }
    }

    async selectProduct(){
        await this.productName.click()
    }

    async waitForUrl(){
        await this.page.waitForURL(/prod.html/)
    }


    async addToCartButton(){
        await this.page.on('dialog' , async (alert) =>{
            expect(alert.message()).toContain("Product added.")
            await alert.accept()
        })

        await this.addToCartBtn.click()
    }

}