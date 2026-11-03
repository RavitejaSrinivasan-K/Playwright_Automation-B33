
import { getExcelData } from "../../utils/excelReader";

import {test, expect} from "@playwright/test"


const data = getExcelData('Sheet1')

data.forEach((td) =>{

    try{
        test(`Reading data from excel user ${td.ID}` , async ({page}) =>{

        await page.goto('https://www.saucedemo.com/')

        await page.locator('[id="user-name"]').fill(td.USERNAME)
        await page.locator('[id="password"]').fill(td.PASSWORD)
        await page.locator('[name="login-button"]').click()
        await expect(page.locator('[data-test="title"]')).toBeVisible()
    })

    }catch(error){
        console.log("Invalid User details")
    }
})











