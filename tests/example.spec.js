
import { test, expect } from '@playwright/test';

test.skip('has title 0', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(2000)

  //Event Listner
  await page.on('dialog' , async (a)=>{
    expect(a.type()).toEqual('alert')
    expect(a.message()).toContain('alert box!')
    await page.waitForTimeout(2000)
    await a.accept()
  })

  //Click
  await page.locator('[id="alertBtn"]').click()
  
});


test.skip('has title 1', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(2000)

  //Event Listner
  await page.once('dialog' , async (a)=>{
    expect(a.type()).toEqual('confirm')
    expect(a.message()).toContain('Press a button!')
    await page.waitForTimeout(2000)
    // await a.accept()
    await a.dismiss()
  })

  //Click
  await page.locator('[id="confirmBtn"]').click()
  
});



test.skip('has title 2', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator('[id="promptBtn"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(2000)

  //Event Listner
  await page.once('dialog' , async (a)=>{
    expect(a.type()).toEqual('prompt')
    expect(a.message()).toContain('enter your name:')
    expect(a.defaultValue()).toContain('Harry Potter')
    await page.waitForTimeout(2000)
    await a.accept('Raviteja')
  
  })

  //Click
  await page.locator('[id="promptBtn"]').click()
  
});


test.skip('has title 3', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/')

 await page.locator('text=Upload Files').scrollIntoViewIfNeeded()
 await page.waitForTimeout(2000)

 //single file
 await page.locator('[id="singleFileInput"]').setInputFiles('C:/Users/Dell/Desktop/Project name.txt')
 await page.waitForTimeout(3000)


 //multiple files
 await page.locator('[id="multipleFilesInput"]').setInputFiles([
  "C:/Users/Dell/Desktop/CUCUMBER BDD.txt" , "C:/Users/Dell/Desktop/Project name.txt"
 ])

 await page.waitForTimeout(3000)
  
});



test.skip('has title 4', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/')
  await page.waitForTimeout(3000)

  //Normal Page
  await page.screenshot({path : 'images/' + 'normalPage.png'})
  await page.waitForTimeout(3000)

  //FullPage
  await page.screenshot({path : 'images' + '/FullPage.jpg' , fullPage : true})
  await page.waitForTimeout(3000)

  //Specific Locator
  await page.locator('[id="taskTable"]')
  .screenshot({path : 'images/' + 'locatorPage.jpeg'})
  await page.waitForTimeout(3000)
  
});



test("Has title 5", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/')
  
  await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(2000)

  await page.locator('[id="datepicker"]').click()

  let month = "September"
  let year = "2028"


  while (true) {

  const cMonth =  await page.locator('[class="ui-datepicker-month"]').textContent()
  const cYear =  await page.locator('[class="ui-datepicker-year"]').textContent()

    if(month === cMonth && year == cYear){
      break
    }

    await page.click('//span[text()="Next"]')
    // await page.locator('//span[text()="Prev"]').click()

  }


  await page.waitForTimeout(2000)
  //Dates

  let date = "16"
  await page.locator(`//a[@class="ui-state-default" and @data-date="${date}"]`).click()
  await page.waitForTimeout(2000)

})




















































































