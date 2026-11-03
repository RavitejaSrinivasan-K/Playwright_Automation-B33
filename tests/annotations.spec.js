
import {test , expect} from "@playwright/test";


test.only("Test 1" , async ()=>{
    console.log("ONLY")
})

test.skip("Test 2" , async ()=>{
    console.log("SKIP")
})

test.fail("Test 3" , async ()=>{
    console.log("FAIL")
})

test.fixme("Test 4" , async ()=>{
    console.log("FIXME")
})

test.slow("Test 5" , async ()=>{
    console.log("SLOW")
})

test("Test 6" , async ()=>{
    test.setTimeout(12 * 1000)

    console.log("SET TIMEOUT")
})

test("Test 7" , async ({browserName})=>{

    if(browserName == 'chromium'){
        test.skip()
    }
    console.log("CONDITION")
})


