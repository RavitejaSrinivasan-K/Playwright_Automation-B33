
import {test , expect} from "@playwright/test";


test("Handling Simple Alert" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Event Listener
    await page.on('dialog' , async (a)=>{
        expect(a.type()).toEqual('alert')
        expect(a.message()).toContain('alert box!')
        await page.waitForTimeout(1500)
        await a.accept()
    })

    //Click
   await page.locator('[id="alertBtn"]').click()
   await page.waitForTimeout(3000)

})



test("Handling Confirm Alert" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Event Listener
    await page.on('dialog' , async (b)=>{
        expect(b.type()).toEqual('confirm')
        expect(b.message()).toContain('Press a button!')
        await page.waitForTimeout(1500)
        // await b.accept()
        await b.dismiss()
    })

    //Click
   await page.locator('[id="confirmBtn"]').click()
   await page.waitForTimeout(3000)

})




test("Handling Prompt Alert" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('[id="promptBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Event Listener
    await page.once('dialog' , async (c)=>{
        expect(c.type()).toEqual('prompt')
        expect(c.message()).toContain('enter your name')
        expect(c.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(1500)
        await c.accept('Raviteja')
        // await c.dismiss()
    })

    //Click
   await page.locator('[id="promptBtn"]').click()
   await page.waitForTimeout(3000)

//    await page.locator('[id="promptBtn"]').click()
//    await page.waitForTimeout(3000)

//    await page.locator('[id="promptBtn"]').click()
//    await page.waitForTimeout(3000)

})



test("Handling Alert post 5 sec" , async ({page})=>{

    await page.goto('https://demoqa.com/alerts')

    // await page.on('dialog' , async (d)=>{
    //     expect(d.message()).toContain('This alert appeared after 5 seconds')
    //     await d.accept()
    // })

    //await page.locator('[id="timerAlertButton"]').click()

    const [dialog] = await Promise.all([
        page.waitForEvent('dialog') , 
        page.locator('[id="timerAlertButton"]').click()
    ])

    console.log(await dialog.message())

    await dialog.accept()
})


















