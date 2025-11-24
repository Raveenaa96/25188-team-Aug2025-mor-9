API => Application Protocal Interface.

                     post
        Clinet  -------------------> Server
                     get
        Client <------------------- Server

        Client <-------------------> Sever


Rest Api => Representational State Transfer Application Programming Interface

    HTTP Protocal
        - GET  - retrieve data
        - POST - create new data
        - PUT  – update data
        - PATCH  – update data
        - DELETE – remove data

    Status Codes

        200 OK
        201 Created
        400 Bad Request
        404 Not Found
        500 Internal Server Error



React API Call
==============
    1. fetch method
    2. axios libirary

Fetch method
------------
    - It is pure javascript function

    Syntax:  fetch(endpointURL,Options)

            Options = {
                method : GET/POST/PUT
                headers: {
                    accept : "application/json"
                    contentType:  "application/json"
                }
                body : JSON.stringy(data)  // post put patch
            } 


Axios
=====
    -  axios is one of the react  libirary
    -  it is helps simplify to api calls.

Installation:

    -  npm install axios --save

Syntax:
        import axios from 'axios'


GET Method:
    
    let response =  axios.get(endpointURL)
                    .then(data => data.json())
                    .then(responseData =>  console.log(responseData))

