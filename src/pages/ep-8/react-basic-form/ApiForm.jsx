import { useState } from "react";
import axios from "axios";

export default function ApiForm() {
    const [loginData,setLoginData] = useState(null);


    const handleChange=(event)=>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setLoginData ({...loginData,
                        [fieldName] : fieldValue}
        )
    }

        const handleSubmit = async(event) => {
        event.preventDefault();
        console.log("loginData==>",loginData);
        if (loginData && loginData != null) {
            let endPointurl = "https://fakestoreapi.com/auth/login"

            let payload = {
                "username" : loginData?.username,
                "password" : loginData?.password
            }

            let response = await axios.post(endPointurl,payload)
            if(response && response?.data && response?.data?.token){
                localStorage.setItem("auth-token", response?.data?.token)
            }
        }
         else {
            console.log("Please fill the form")
         }
    }
    
    return(
        <div className="container d-flex flex-column m-auto">
            <div>
                <h2 className="text-center my-5">Login(API Form)</h2>
            </div>
            <div className="form col-md-6 m-auto">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group my-2">
                        <label for="userNameInput" className="fw-bolder">Username</label>
                        <input className="form-control" name="username" type="text" id="userNameInput" onChange={handleChange} placeholder="Enter username"/>
                    </div>
                    <div className="form-group my-2">
                        <label for="passwordInput" className="fw-bolder">Password</label>
                        <input className="form-control" name="password" id="passwordInput" type="password" onChange={handleChange}  placeholder="Password"/>
                    </div>
                    <div className="form-group text-center my-3">
                        <input type="submit" value="Login" disabled = {false} className="btn btn-success"/>
                    </div>
                </form>
            </div>
        </div>
    )
}