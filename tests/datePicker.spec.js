

import {test , expect} from "@playwright/test";


test("Handling Date Picker" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //click
    await page.locator('[id="datepicker"]').click()

    //targets
    let date = Math.floor(Math.random() * 30 ) + 1;
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let year = Math.floor(Math.random() * (2030 - 2020) + 1 ) + 2026;
            //  Math.floor(Math.random() * (max - min) + 1 ) + min;

    let month = months[Math.floor(Math.random() * 12 )];

    console.log(date , month, year)

    //achieve

    while(true){
      const cMonth =  await page.locator('[class="ui-datepicker-month"]').textContent()
      const cYear = await page.locator('[class="ui-datepicker-year"]').textContent()

      if(cMonth === month && cYear === String(year)  ){    //`"${year}"`
        break
      }

      await page.click('//span[text()="Next"]')
    //   await page.click('//span[text()="Prev"]')

    }

    await page.waitForTimeout(4000)

    //dates

    await page.locator(`//a[@class="ui-state-default" and @data-date="${date}"]`).click()
    await page.waitForTimeout(4000)
})




















