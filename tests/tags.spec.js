

import {test } from "@playwright/test";


test("Test 1" , {tag : "@smoke"} , async ()=>{
    console.log("SMOKE")
})

test("Test 2" ,{tag : "@sanity"}, async ()=>{
    console.log("SANITY")
})

test("Test 3 @reg" , async ()=>{
    console.log("REG")
})

test("Test 4 @smoke@sanity" , async ()=>{
    console.log("SMOKE with SANITY")
})

test("Test 5" ,{tag : "@smoke@reg"}, async ()=>{
    console.log("SMOKE with REG")
})

test("Test 6" ,{ tag : "@sanity@reg"}, async ()=>{
    console.log("SANITY with REG")
})



