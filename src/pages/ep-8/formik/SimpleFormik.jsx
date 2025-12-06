import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function SimpleFormik () {
  return (
    <div className="container">
      <div>
        <h1>Basic Form using Formik</h1>
      </div>
      <div className='form-render'>
        <Formik 
              initialValues={
                {
                  username:'',
                  password:''}
              } 
              onSubmit={(values)=>{
                console.log("values==>",values)
              }}
        >
          <Form>
            <div className='form-group'>
                <label>Username</label>
                <Field type="text" className="form-control" name="username" id="username"/>
                <ErrorMessage name="username" component="div"/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <Field type="text" className="form-control" name="password" id="password"/>
                <ErrorMessage name="password" component="div"/>
            </div>
            <div className='form-group'>
                <input type="submit" className="form-control btn btn-primary" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}