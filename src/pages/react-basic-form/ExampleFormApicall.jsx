import axios from "axios";
import { useState } from "react";

export default function ExampleApicall(){

    const [loginFormData,setLoginFormData] = useState(null)

    const handleChange = (event) => {

        const fieldName =  event.target.name
        const fieldValue = event.target.value

        setLoginFormData(
            {
                ...loginFormData,
                 [fieldName] : fieldValue
            }
        )  

        

    }

    const handleSubmit = async (event) => { 
        event.preventDefault();

        if(loginFormData && loginFormData != null ){
            
            let endpointUrl = "https://fakestoreapi.com/auth/login"

            let payload = {
                "username": loginFormData?.username,
                "password": loginFormData?.password
            }

            // console.log("endpointUrl====>",endpointUrl)
            // console.log("payload=====>",payload )

            let response = await axios.post(endpointUrl,payload)
            //console.log("Response ::::",response.data)
            if(response && response.data && response.data.token)
                localStorage.setItem("auth-token", response.data.token)

           
        }
        else{
            console.log("Please Fill the form")
        }
        
       
        
    }

    return (
        <div className="container">
            <div className="heading">
                <p className="h1 text-priamry text-center"> Example Form </p>
            </div>
            <div className="form">
                <form method="post" onSubmit = {handleSubmit} >

                    <div className="form-group">
                        <label>user name </label>
                        <input 
                            type="text" 
                            name="username" 
                            className="form-control"
                            onChange = {handleChange}
                            
                        />
                    </div>
                     <div className="form-group">
                        <label>Password </label>
                        <input 
                            type="password" 
                            name="password"
                            className="form-control"
                            onChange = {handleChange}
                             
                             />
                    </div>
                    <div className="form-group m-5">
                        <input 
                            type="submit"
                             value="Login" 
                             className="btn btn-success"
                             disabled = {false}
                             
                             />
                    </div>

                </form>
            </div>
        </div>
    )
}