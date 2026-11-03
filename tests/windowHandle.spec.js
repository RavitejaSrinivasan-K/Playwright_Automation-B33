
/**
 * Browser :
 * What it is: The actual browser instance 
 * (Chromium, Firefox, or WebKit) launched by the automation process.
 * 
 * Context :
 *  An isolated, incognito-like user session within a browser instance. 
 * It has its own independent cookies, cache, local storage, and permissions.
 * 
 * Page : 
 *  A single tab, window, or frame inside a BrowserContext.
 */





import {test, expect, chromium, firefox, webkit} from "@playwright/test"


test("Handling Multiple Windows" ,async ({}) =>{

    //browser
    const browser = await chromium.launch({
        headless : false, slowMo : 1500, channel : 'msedge'
     })

     const context = await browser.newContext({
        permissions : []
     })

     const page1 = await context.newPage()

     await page1.goto('https://www.demoblaze.com/')
     await page1.locator('[id="login2"]').click()
     await page1.locator('[id="loginusername"]').fill('Raviteja18')
     await page1.locator('[id="loginpassword"]').fill('Trend@123')
     await page1.locator('[onclick="logIn()"]').click()

     await expect(page1.locator('[id="logout2"]')).toBeVisible()


     
     const page2 = await context.newPage()

     await page2.goto('https://www.saucedemo.com/')
     await page2.getByPlaceholder('Username').fill('standard_user')
     await page2.getByPlaceholder('Password').fill('secret_sauce')
     await page2.locator('[name="login-button"]').click()

     await expect(page2.locator('.title')).toHaveText('Products')

})




test.only("Handling Context " , async ({browser}) =>{

    //browser
    const context = await browser.newContext()

    //context
    const page = await context.newPage()

    //launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.waitForTimeout(5000)

    //Multiple Promises
    const [newPage] = await Promise.all([
        // page.waitForEvent('popup')
        context.waitForEvent('page') ,
        page.locator('text=OrangeHRM, Inc').click()
    ])

    await newPage.waitForLoadState()
    await newPage.waitForTimeout(2000)

    await newPage.locator('text=Allow all').click()
    await newPage.locator('[name="EmailHomePage"]').fill('raviteja786@gmail.com')
    await newPage.waitForTimeout(2000)

    await newPage.locator('[onclick="buttonClick()"]').click()
    await newPage.waitForTimeout(2000)

    //before
    await newPage.goBack()
    await newPage.waitForTimeout(2000)

    //refresh
    await newPage.reload()
    await newPage.waitForTimeout(2000)

    //forward
    await newPage.goForward()
    await newPage.waitForTimeout(2000)

    //switch one to another
    await page.bringToFront()
    await newPage.waitForTimeout(2000)

    //login
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button' , {name : ' Login '}).click()

    //expect
    await expect(page.locator('h6')).toBeVisible()

})



