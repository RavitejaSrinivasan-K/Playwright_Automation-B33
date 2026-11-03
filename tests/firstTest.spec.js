
import {test, expect} from "@playwright/test";


test("Handling WebPage" , async function ({page}){      //fixture

    //browser
    await page.goto('https://www.amazon.in/');

    await page.waitForTimeout(2000)

    //Title & URL
    const pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())

    //Assert
   await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
   await expect(page).toHaveURL('https://www.amazon.in/')
})

/**
 * npx playwright test firstTest.spec.js --project=chromium --headed
 */





