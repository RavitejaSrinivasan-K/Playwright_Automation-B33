

import {test , expect, request} from "@playwright/test"
import {apiEndPoints} from "../../utils/endpoints.json"


test("GET - REQ GetAllUsers" , async ()=>{

    const apiRequest = await request.newContext() 

    const response = await apiRequest.get(process.env.API_BASEURL + apiEndPoints.getAllUsers)

    const body = await response.json()
    console.log(body)

    expect( response.status()).toBe(200)
})


let token

test('POST - REQ LoginUser' , async ()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.post( process.env.API_BASEURL + apiEndPoints.loginUser , 
        {
            headers : { 'Content-Type' : "application/json" } ,
            data : { 
                username : process.env.API_USERNAME , 
                password : process.env.API_PASSWORD
            }
        }
    )

    const body = await response.json()
    console.log(body)

    token = await body.accessToken

    expect(response.status()).toBe(200)
})



test('GET - REQ GetAuthUser' , async ()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.get( process.env.API_BASEURL + apiEndPoints.authUser , 
        {
            headers : { "Authorization" : 'Bearer ' + token } ,
        }
    )

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(200)
})




test('UPDATE - REQ UpdateUser' , async ()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.patch( process.env.API_BASEURL + apiEndPoints.updateUser , 
        {
            headers : { 'Content-Type' : "application/json" } ,
            data : {
                "firstName" : "Ravi" ,
                "lastName"  : "Teja"
            }
        }
    )

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(200)
})





test('POST - REQ AddUser' , async ()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.post( process.env.API_BASEURL + apiEndPoints.addUser , 
        {
            headers : { 'Content-Type' : "application/json" } ,
            data : {
                "firstName" : "Ussain" ,
                "lastName"  : "Bolt" ,
                "age"       : 46 ,
                "gender"    : "male"
             }
        }
    )

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(201)
})



test('DELETE - REQ DeleteUser' , async ()=>{

    const apiRequest = await request.newContext()

    const response = await apiRequest.delete( process.env.API_BASEURL + apiEndPoints.deleteUser )

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(200)   //204 
})



