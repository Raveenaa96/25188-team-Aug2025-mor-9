API => Application Protocal Interface.

                    Insert new Record  POST

        Clinet  -----------------------------------------> Server
                     View Record  - GET

        Client <------------------------------------------ Server
                    Modify existing record - PUT

        Client -------------------------------------------> Sever
                    particular-field-modify - PATCH
        Client ------------------------------------------> Sever

                    Remove record - DELETE
         Client ------------------------------------------> Sever


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
    1. fetch method      - Javascript function
    2. axios             - React libirary

Fetch method
------------
    - It is pure javascript function

    

      Syntax:  

         options = {
                method :  Method_name 
                headers: {
                    accept : "application/json"
                    contentType:  "application/json"
                }
                body : JSON.stringy( post_data )  // Ignore get method
            } 
      
      
      
        fetch(endpointURL,options)

GET : 

         fetch(endpointURL)
       

POST :

            options = {
                method : POST
                headers: {
                    accept : "application/json"
                    contentType:  "application/json"
                }
                body : JSON.stringy(data)  
            } 


             fetch(endpointURL,options)





Axios
=====
    -  axios is one of the react  libirary
    -  it is helps simplify to api calls.

Installation:

    -  npm install axios --save

Syntax:
        import axios from 'axios'


GET Method:
    
                axios.get(endpointURL)
                    .then(data => data.json())
                    .then(responseData =>  console.log(responseData))


POST METHOD:    

                let payload = {
                    email: "Saravanan@gmail.com"
                    password:"Test@123"
                }

                let headers = {
                    token : "xyzoooppp111hhhrrrrrdddd"
                }


          axios.post( endpointURL,payload )
                    .then(data => data.json())
                    .then(responseData =>  console.log(responseData))
                    .catch(error => console.error(error))



In-Cased-custom-headers Need

                axios.post(endpointURL,payload, headers:headers )
                    .then(data => data.json())
                    .then(responseData =>  console.log(responseData))
                    .catch(error => console.error(error))
