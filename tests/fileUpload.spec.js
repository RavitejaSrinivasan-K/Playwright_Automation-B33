
import {test , expect} from "@playwright/test"


test("Single & Multi Files Upload" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()

    //wait for
    await page.locator('[id="singleFileInput"]').waitFor()

    //upload a file
    await page.locator('[id="singleFileInput"]').setInputFiles('C:/Users/Dell/Downloads/dhana.TCS.xls')

    await page.waitForTimeout(5000)

    //Multiple Files
    await page.locator('[id="multipleFilesInput"]')
    .setInputFiles([
        'C:/Users/Dell/Downloads/senthamilArasi_Resume.pdf' ,
        'C:/Users/Dell/Downloads/Resume.pdf'
    ])

    await page.waitForTimeout(5000)

})







