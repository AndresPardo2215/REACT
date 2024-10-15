import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('invalid Email format').required('email is required'),
        password: Yup.string().required('password is required')
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }
    return (
        <div>
        <h4>Login Formik</h4>
           <Formik
           //*** inicial values that the form will take */
            initialValues={ initialCredentials }
            /*** Yup validation schema */
            validationSchema={loginSchema}
            // * on submit event
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r,1000));
                alert(JSON.stringify(values, null, 2));
                // * we save de data in the localstorage
                localStorage.setItem('credentials', values)
            }}
            >   
                {/* we obtain props from formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,}) => (
                        <Form>
                            <label htmlFor="email">Email </label>
                            <Field id="email" type="email" name="email" placeholder="example@gmail.com" />

                            {/* email errors */}
                            {
                                errors.email && touched.email && 
                                (
                                      <ErrorMessage name="email" component='div'></ErrorMessage>  
                                )
                            }

                            <label htmlFor="password">Password </label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="pasword"
                            type="password"
                            />
                            {/* password errors */}
                            {
                                errors.password && touched.password && 
                                (
                                      <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>login your credentials...</p>) : null}
                        </Form>
                )}

            </Formik> 
        </div>
        
    );
}

export default LoginFormik;
