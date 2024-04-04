/* eslint-disable no-undef */
import { loginUser } from "../utils/apis";
import loginSchema from "../validation/loginSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import bcrypt from "bcryptjs";
import ExitComponent from "./ExitComponent";
import ErrorComponent from "./ErrorComponent";
import showTemporarily from "../utils/utils";


function LoginComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const hashPass = await bcrypt.hash(values.password, 10);
            
            const response = await loginUser({...values, password:hashPass});
            const token = response.token
            localStorage.setItem('token', token);
            
            //console.log({ ...values, password: hashPass });
            if(hashPass){
                setShowSuccess(true);
                showTemporarily(setShowSuccess)
            }else{
                setShowError(true);
                showTemporarily(setShowError)
            } 
        } catch (error) {
            console.error("Login failed:", error.message);
            setShowError(true)
            showTemporarily(setShowError)
        }
        setSubmitting(false);
        setIsLoading(false);
    };
 
    return (
        <>  
            <div className=" d-flex justify-content-end ">
                {showSuccess && (
                    <ExitComponent/>
                )}
                {showError && (
                   <ErrorComponent/>
                )}
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow">
                    <h2 className="text-center mb-2">Iniciar sesión</h2>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="mb-1 text-start">
                                        Email*
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        name="email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-4 ">
                                    <label htmlFor="password" className="mb-1">
                                        Password*
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        name="password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary"
                                    >
                                        {isLoading ? "Cargando" : "Iniciar sesión"}
                                    </button>
                                </div>
                                <p className="mt-2">
                                    Dont have an account? <a href="/signup">Sign Up</a>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>

    );
}
export default LoginComponent;
