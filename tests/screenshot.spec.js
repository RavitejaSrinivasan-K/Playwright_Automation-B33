

import {test} from "@playwright/test";

test("Take Visible Page Screenshot", async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait 
    await page.waitForTimeout(3000)

    //screenshot
    await page.screenshot({path : "images" + "/visiblePage.png"})

})



test("Take Full Page Screenshot", async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait 
    await page.waitForTimeout(3000)

    //screenshot
    await page.screenshot({path : "images" + "/fullPage.jpeg" , fullPage : true})

})


test("Take Locator Page Screenshot", async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait 
    await page.waitForTimeout(3000)

    //screenshot
    await page.locator('[aria-label="Amazon India Home"]')
    .screenshot({path : "images" + "/locatorPage.jpg"})

})


