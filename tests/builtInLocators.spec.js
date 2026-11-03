

import {test , expect} from "@playwright/test"


test("Handling BuiltIn Locators" , async function({page}){

    //browser
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //img validation - alt
    const orangeLogo = await page.getByAltText('company-branding')
    await expect(orangeLogo).toBeVisible()

    //input - placeholder
    await page.getByPlaceholder('Username').fill('Admin')

    await page.getByPlaceholder('Password').fill('admin123')


    //login button - role
    await page.getByRole('button' , {name : " Login "}).click()

    //load
    // await page.waitForLoadState()

    await page.getByRole('heading', {name : 'Dashboard'}).waitFor()

    //Text  
   const username = await page.locator('[class="oxd-userdropdown-name"]').textContent()

   await expect(page.getByText(username)).toBeVisible()
    

    //Label
    await expect(page.getByLabel('Sidepanel')).toBeVisible()

    //Title
    const [newPage] = await Promise.all([
        page.waitForEvent('popup') , 
        page.getByTitle('Help').click()
    ])
 
    await page.waitForLoadState()

    await newPage.getByPlaceholder('Search').fill('Playwright with JavaScript')

    await page.waitForTimeout(2000)

    //Test Id
    //playwright.dev

})



























