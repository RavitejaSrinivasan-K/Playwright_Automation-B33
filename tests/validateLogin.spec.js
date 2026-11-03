

import {test, expect} from "@playwright/test";


test("Validating Login Functionality (Positive)" , async function({page}){   //fixture

    //browser
    await page.goto('https://www.saucedemo.com/')

    //title & url
    const pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())

    //assertion
    await expect.soft(page).toHaveTitle("Swag Labs")

    await expect(page).toHaveURL('https://www.saucedemo.com/')

    //username
    await page.locator('[id="user-name"]').fill('standard_user')

    //password
    await page.locator('[name="password"]').fill('secret_sauce')

    //login button
    await page.locator('[data-test="login-button"]').click()

    //wait for
    // await page.waitForTimeout(2 * 1000)

    await page.locator('[class="app_logo"]').waitFor()

    //dashboard validation
    await expect( page.locator('[class="app_logo"]') ).toBeVisible({timeout : 3000})
    await page.waitForTimeout(2 * 1000)

})





































