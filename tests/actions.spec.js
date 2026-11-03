

import {test , expect} from "@playwright/test";


test("Handling Registration Form" , async function({page}){

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait for
    await page.locator('//a[text()="Data Entry Form"]').waitFor({state : 'visible'})

    // await page.locator('text=Data Entry Form').waitFor()

    //fill
    await page.locator('//input[@id="name"]').fill("Raviteja")
    await page.waitForTimeout(1500)

    //radio
    await page.locator('[id="male"]').check()
    await page.waitForTimeout(1500)

    //assert
    await expect(page.locator('[id="male"]')).toBeChecked()

    //check box
    await page.locator('id=sunday').check()
    await page.waitForTimeout(1500)

    //assert
    await expect(await page.locator('id=sunday').isChecked() ).toBeTruthy()


    //Multi CheckBoxs
  const multiChecks = [  page.locator('[id="tuesday"]') , page.locator('//input[@id="thursday"]') ,
    page.locator('id=saturday')    ]

    for(let mc of multiChecks){
        await mc.check()
        await expect(mc).toBeChecked()
        await page.waitForTimeout(1500)
    }


    //Un check
    for(let mc of multiChecks){
        await mc.uncheck()
        await expect(mc).not.toBeChecked()
        await page.waitForTimeout(1500)
    }
})


test("Handling Single DropDown" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('text=Country:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(1500)

    //Visible Text
    await page.locator('[id="country"]').selectOption("India")
    await page.waitForTimeout(1500)

    //Label
    await page.locator('[id="country"]').selectOption({label : "China"})
    await page.waitForTimeout(1500)

    //Value
    await page.locator('[id="country"]').selectOption({value : "australia"})
    await page.waitForTimeout(1500)

    //Index
    await page.locator('[id="country"]').selectOption({index : 3})
    await page.waitForTimeout(1500)

    //Assert
    await expect(page.locator('//select[@id="country"]//option')).toHaveCount(10)

    await expect((await page.$$('//select[@id="country"]//option')).length ).toBe(10)
})




test("Handling Multiple DropDown" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('text=Colors:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(5000)

    //multiple options
    await page.locator('[id="colors"]').selectOption(["Red" , "Green" , "Yellow" , "Red" , "Green"])
    await page.waitForTimeout(5000)

    //un select
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(5000)

    //unique values
    await page.locator('[id="colors"]').selectOption([{label : "Red"},{value : "green"},{index : 4},{index :6}])
    await page.waitForTimeout(5000)


})


test("Handling Dynamic DropDown" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait
    await page.waitForLoadState('load')

    //search bar filling
    await page.locator('[id="twotabsearchtextbox"]').fill('mobiles')
    await page.waitForSelector('[class="two-pane-results-container"]')

    //suggest capture
  const list = await page.$$('//div[@class="two-pane-results-container"]//div[@class="s-suggestion-container"]//div/span')

    for (const element of list) {
       const txt = await element.textContent()

       if(txt.includes("30000")){    
        await element.click()         //select a target
        break
       }
    }

   await page.waitForTimeout(5000)

})




