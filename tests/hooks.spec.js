
/**
 * Before All - It will execute all test script before
 * Before Each - It will execute each test script before
 * After Each - It will execute each test script after
 * After All - It will execute all test script after
 */

import {test} from "@playwright/test";


// test.beforeAll( async ({browser})=>{

//     //browser
//    const context = await browser.newContext()  //Incognito mode session
//    const page = await context.newPage()      //represent a single tab

//     //login
//     await page.goto('/')

// })



test("Test 1" , async ()=>{
    console.log('TEST 1')
})

test("Test 2" , async ()=>{
    console.log('TEST 2')
})

test("Test 3" , async ()=>{
    console.log('TEST 3')
})


test.beforeEach( async ()=>{
    console.log('BEFORE EACH')
})

test.afterEach( async ()=>{
    console.log('AFTER EACH')
})

test.beforeAll( async ()=>{
    console.log('BEFORE ALL')
})

test.afterAll( async ()=>{
    console.log('AFTER ALL')
})




