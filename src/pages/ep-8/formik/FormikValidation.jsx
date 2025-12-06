import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function FormikValidation() {
    const initialValue = {
        skills: [],
        gender:"",
        country:"",
        address:""
    }
const schema = Yup.object({
            skills:Yup.array()
                      .min(1,"Select at least one skill"),
            gender:Yup.string()
                      .required("Please select a gender"),
            country:Yup.string()
                       .required("Please select one option"),
            address:Yup.string()
                        .required("Address is required")
                        .min(10,"Minimum 10 characters")
        })
    return(
        <div className='container d-flex justify-content-center'>
            <Formik 
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log("values==>",values)}}
                >
                <Form>
            {/* -----------------------------Radio Button Field---------------------------------- */}
                    <div className='my-5'>
                        <div className='gender'>
                            <h2>Select Gender</h2>

                            <div className='form-check'>
                                <Field 
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="male"
                                />
                                <label className='form-check-label'>Male</label>         
                            </div>

                            <div className='form-check'>
                                <Field 
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="female"
                                />
                                <label className='form-check-label'>Female</label>
                            </div>

                            <ErrorMessage name="gender" className='text-danger' component="div" />
                        </div>

            {/* ---------------------------CheckBox Field------------------------------- */}

                        <div className='skills my-3'>
                            <h2>Select Skills</h2>
                            <div className='form-check'>
                                <Field 
                                    type="checkbox"
                                    className="form-check-input"
                                    name="skills"
                                    value="react"
                                />
                                <label className='form-check-label'>React</label>
                            </div>

                            <div className='form-check'>
                                <Field 
                                    type="checkbox"
                                    className="form-check-input"
                                    name="skills"
                                    value="js"
                                />
                                <label className='form-check-label'>Javascript</label>
                            </div>

                            <div className='form-check'>
                                <Field 
                                    type="checkbox"
                                    className="form-check-input"
                                    name="skills"
                                    value="node"
                                />
                                <label className='form-check-label'>Node</label>
                            </div>
                            <ErrorMessage name="skills" className='text-danger' component="div" />
                        </div>

         {/* -------------------------------Select Field------------------------------------------- */}

                        <div className='my-3'>
                            <h3>Select a Country</h3>
                            <Field as="select" name="country" className="form-select">
                                <option value="">Select</option>
                                <option value="usa">USA</option>
                                <option value="india">India</option>
                                <option value="australia">Australia</option>
                            </Field>
                            <ErrorMessage name="country" component="div" className='text-danger'/>
                        </div>

            {/* -------------------------------Textarea Field------------------------------------------- */}

                            <div>
                                <h3>Address</h3>
                                <div className="form-group">
                                    <Field 
                                        as="textarea" 
                                        className="form-control"
                                        rows="5" 
                                        cols="50"
                                        name="address"
                                        placeholder="Type your address"/>
                                </div>
                                <ErrorMessage name="address" component="div" className='text-danger'/>
                            </div>


                            <div className="my-4 text-center">
                            <input type="submit" className="btn btn-primary"/>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}