import { useState } from "react";

export default function BasicForm() {
    const [loginData,setLoginData] = useState(null);


    const handleChange=(event)=>{
        const {name,value} = event.target;
        setLoginData ({...loginData,
                        [name] : value}
        )
    }


     const handleSubmit = (event) => {
        event.preventDefault();
        console.log("loginData==>",loginData);
    }

    return(
        <div className="container d-flex flex-column m-auto">
            <div>
                <h2 className="text-center my-5">Login(Basic Form)</h2>
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
                        <input type="submit" value="Login" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        </div>
    )
}