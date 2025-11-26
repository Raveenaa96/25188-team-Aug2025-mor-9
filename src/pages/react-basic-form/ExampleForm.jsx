import { useState } from "react";

export default function ExampleForm(){

    const [loginFormData,setLoginFormData] = useState(null)

    const handleChange = (event) => {

        const fieldName =  event.target.name
        const fieldValue = event.target.value

        setLoginFormData({...loginFormData, [fieldName] : fieldValue})  

        /**
         *  {
         *     username: "Saravanan",
         *     password : "Test@123"
         *  }
         */

    }

    const handleSubmit = (event) => { 
        event.preventDefault();
        
        console.log("loginFormData====>",loginFormData)
        
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
                            name="passsword"
                            className="form-control"
                            onChange = {handleChange}
                             
                             />
                    </div>
                    <div className="form-group m-5">
                        <input type="submit" value="Login" className="btn btn-success "/>
                    </div>

                </form>
            </div>
        </div>
    )
}