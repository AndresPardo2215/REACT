import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
//models
import { User } from '../../../models/userClass';
import { ROLES } from '../../../models/roles.enum';


const RegisterFormik = () => {

    //let user = new User;

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string().min(6,'username too short').max(12,'username too long').required('username is required'),
            email: Yup.string().email('invalid Email format').required('email is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], ' you must select a role: user / admin').required('role is required'),
            password: Yup.string().min(8, 'password too short').required('password is required'),
            confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
            .required('Debe confirmar la contraseña')
        }

    )

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik initialValues = {initialValues}
             /*** Yup validation schema */
             validationSchema={registerSchema}
            // * on submit event
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r,1000));
                alert(JSON.stringify(values, null, 2));
            }}
            >
            {({     values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,}) => (
                        <Form>
                        <label htmlFor="username">Username </label>
                        <Field id="username" type="text" name="username" placeholder="Your username" />
                        {/* username errors */}
                        {
                                errors.username && touched.username && 
                                (
                                      <ErrorMessage name="username" component='div'></ErrorMessage>  
                                )
                            }
                        
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

                            <label htmlFor="confirm">confirm Password </label>
                            <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                            />
                            {/*** * confirm password errors */}
                            {
                                errors.confirm && touched.confirm && 
                                (
                                      <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Register new user</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}


                        </Form>
                    )}
                

            </Formik>
        </div>
    );
}

export default RegisterFormik;
