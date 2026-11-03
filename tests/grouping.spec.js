

import {test} from "@playwright/test";


test.describe("Grouping 1" , async ()=>{

test("Test 1" , async ()=>{
    console.log("LOGIN POSITIVE")
})

test("Test 2" , async ()=>{
    console.log("LOGIN NEGATIVE")
})

test("Test 3" , async ()=>{
    console.log("LOGIN EDGE")
})

})



test.describe.parallel("Grouping 2" , async ()=>{

test("Test 4" , async ()=>{
    console.log("ADD TO CART POSITIVE")
})

test("Test 5" , async ()=>{
    console.log("ADD TO CART NEGATIVE")
})

test("Test 6" , async ()=>{
    console.log("ADD TO CART EDGE")
})

})

