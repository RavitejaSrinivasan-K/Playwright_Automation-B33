

import {test , expect} from "@playwright/test";



test("Handling Mouse Hover" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com')

    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //hover
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)

    //click
    await page.locator('//a[text()="Laptops"]').click()
})



test("Handling Mouse Double Click" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com')

    //scroll
    await page.locator('text=Copy Text').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //clear
    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(2000)

    //fill
    await page.locator('[id="field1"]').fill('Raviteja')
    await page.waitForTimeout(2000)

    //click
    await page.locator('text=Copy Text').dblclick()
    await page.waitForTimeout(2000)

    //expect
    // await expect(page.locator('[id="field2"]')).toHaveText('Raviteja')
})





test("Handling Mouse Drag & Drop" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com')

    //scroll
    await page.locator('[id="droppable"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //appraoch - 1
    // await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')
    // await page.waitForTimeout(2000)

    //aprraoch - 2
    const source = page.locator('[id="draggable"]')
    const target = page.locator('[id="droppable"]')

    // await source.dragTo(target)
    // await page.waitForTimeout(2000)

    //appraoch - 3
    await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(2000)
})





test("Handling Mouse Slider" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com')

    //scroll
   await page.mouse.wheel(0, 1800)
   await page.waitForTimeout(2000)


   //approach - 1
  const leftSlider = await page.locator('[style="left: 15%;"]')

  const box = await leftSlider.boundingBox()

  await page.mouse.move(box.x , box.y + box.height/2) //100 + 20/2 = 100 + 10 = 110

  await page.mouse.down()

  await page.mouse.move(box.x + box.width , box.y + box.height/2)

  await page.mouse.up()

  await page.waitForTimeout(5000)

    //approach - 2

    // await leftSlider.click()

    // for(let i =0; i < 50; i++){
    //     await page.keyboard.press('ArrowRight')
    // }

    // await page.waitForTimeout(3000)
})



test("Handling Mouse KeyBoard" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.com')

    //Name
    await page.locator('[id="name"]').fill('Raviteja')
    await page.waitForTimeout(2000)

    //select
    await page.keyboard.press('Control+KeyA')
    await page.waitForTimeout(2000)

    //copy
    await page.keyboard.press('Control+KeyC')
    await page.waitForTimeout(2000)

    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.waitForTimeout(2000)

    //paste
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(2000)
})









