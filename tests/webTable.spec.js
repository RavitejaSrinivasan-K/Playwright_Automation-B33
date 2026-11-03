
import {test , expect} from "@playwright/test";


test("Reading Pagination Web Table" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="productTable"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //count of columns
   const tableColumns = await page.$$('[id="productTable"]>thead>tr>th')
   console.log(await tableColumns.length)

    //count of rows
   const tableRows = await page.locator('[id="productTable"]>tbody>tr')
   console.log(await tableRows.count())


    //1 Select a Product
    const selectProduct =  await tableRows.filter({
        has : page.locator('td') , 
        hasText : "Tablet"
    })

    await selectProduct.locator('input').click()
    await page.waitForTimeout(3000)


    //2 Select Multi Products

    // async function multiProd(prodName){
    //     const selectProduct =  await tableRows.filter({
    //     has : page.locator('td') , 
    //     hasText : prodName
    // })

    // await selectProduct.locator('input').click()
    // }

    // await multiProd("Smartphone")
    // await multiProd('Wireless Earbuds')
    // await page.waitForTimeout(3000)

   await  multiProd(tableRows , page, "Smartphone")
   await page.waitForTimeout(3000)

    
   //3 Print 1st page products list

   for(let i=0; i < await tableRows.count(); i++){   //rows count  i<5

   const tds =  await tableRows.nth(i).locator('td')
    
   for(let j=0; j < await tds.count(); j++){     //columns count j<20
    const txt = await tds.nth(j).textContent()
    console.log(txt)
   }

   }



   //4 Print all Pages List

   const tablePages = await page.locator('[id="pagination"] li a')

   for(let k=0; k < await tablePages.count(); k++){

        if(k > 0){
            await tablePages.nth(k).click()
        }

    const prods =  await page.$$('[id="productTable"]>tbody>tr>td')

    for (const element of prods) {
       const text = await element.textContent()
       console.log(text)
    }

   }

})



    async function multiProd(tableRows, page, prodName){
        const selectProduct =  await tableRows.filter({
        has : page.locator('td') , 
        hasText : prodName
    })

    await selectProduct.locator('input').click()
    }



















