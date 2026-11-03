

import {test , expect} from "@playwright/test"


test("Handling Frames" , async ({page}) => {

  //browser
  await page.goto('https://ui.vision/demo/webtest/frames/')

  //count of frames
  const frameCount = page.frames()
  console.log(frameCount.length)
  

  //Handle Frame 1
  await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]').fill('JavaScript')
  await page.waitForTimeout(3000)


  //Handle Inner Frame
  const frame3 = page.frameLocator('[src="frame_3.html"]').frameLocator('//iframe[contains(@src,"https://docs.google.com/forms")]')

  await frame3.locator('[class="AB7Lab Id5V1"]').nth(1).click()
  await page.waitForTimeout(3000)

  await frame3.locator('[class="uHMk6b fsHoPb"]').first().scrollIntoViewIfNeeded()
  await page.waitForTimeout(3000)

  await frame3.locator('[class="uHMk6b fsHoPb"]').first().check()
  await page.waitForTimeout(3000)

})










































































