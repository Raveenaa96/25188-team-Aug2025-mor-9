React Forms
=============

      - Basic Forms
      - Custom Field Forms
      - Interact to backed [ api call ]

      - Form with Validation

             - Formik Libirary
             - Yup validation 

                  (or)

                  useForm() 


     

Formik
=======
        - Formik is a React form libirary.
        - Easy form state management
        - Built-in validation (Yup integration is common)
        - Convenient form submission handling
        - Minimal boilerplate compared to managing everything manually with useState

    Step 1 :   Installation:

             npm i formik --save


    Step 2 :

            import { Formik } from 'formik';
      
     Step 3 :

            <Formik
                    initialValues={ {} }
                    validationSchema={ {} }
                    onSubmit={()=>{
                        
                    }}
                >

            </Formik>


Yup Validation
===============
      - Yup is a validation Libirary.

            Step 1 :   Installation

                        npm install yup --save

            Step 2  :  
                        import * as Yup from 'yup';
      
        

       String:
       -------
            Yup.string()
               .required("Required")
               .min(3,"error message")
               .max(20,"error message")
               .email("Invalid email")
               .matches( pattern, "Error message" )
               .oneOf([Yup.ref("reference_field"), null], "Passwords must match"),


      Number
      ------
            Yup.number()
               .required("error message")
               .min(1, "error message")
               .max(100, "error message")


      Boolean
      -------
            Yup.boolean().oneOf([true], "You must accept")
      

      Select Box
      ---------
            Yup.string().required("Please select an option")









  