
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'


export default function ExampleFormik(){


    return(
        <div className="container">
            <div className="heading">
                <p className="h1 text-center text-primary">Example Formik</p>
            </div>
            <div className="form-render">

                <Formik
                    initialValues={ 
                        {
                            username:"",
                            password:""
                        } 
                    }

                    // validationSchema={ {} }

                    onSubmit={(values)=>{
                        console.log("Values====>",values)
                        //api-code
                    }}
                >

                    <Form>

                       <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field type = "text" name="username" id="username" className="form-control"/>
                            <ErrorMessage name= "username" component="div" />
                       </div>

                       <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type = "password" name="password" id="password" className="form-control"/>
                            <ErrorMessage name= "password" component="div" />
                       </div>

                       <div className="form-group">
                            <input type="submit" className = "btn btn-primary mt-3 form-control" />
                        </div>
                        


                       


                    </Form>


                </Formik>






            </div>
        </div>
    )
}