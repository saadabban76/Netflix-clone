import { useFormik } from 'formik';
import React from 'react';
import { Form } from '../components';
import { useHistory } from 'react-router';
import { Browse } from '../constants/routes';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { setUserStatus } from '../slices/user';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export function FormContainer() {


    const history = useHistory();
    const dispatch = useDispatch();
    const [credentialError, setCredentialError] = useState();

    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        onSubmit: values => {
            signInWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                // Push to the Browse the page
                history.push(Browse);
                dispatch(setUserStatus({
                    userStatus:false
                  }));
                console.log(res);
            })
            .catch((error) => {
                // formik.values.email = '';
                // formik.values.password = '';
                console.log(error.message);
                setCredentialError(error.message);
            });
        },
        validate: values => {
            let errors = {};

            if(!values.email) {
                errors.email = 'Email Required !';
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email format';
            }

            if(!values.password) {
                errors.password = 'Password Mandatory !';
            }else if (!/^(?=.*\d).{4,20}$/i.test(values.password)) {
                errors.password = 'Password must be between 4 and 8 digits long and include at least one numeric digit.'
            }
            return errors
        }
    })

    const isInvalid = Object.keys(formik.errors).length === 0;

    const clickEvent = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <Form.Main>
            <Form>
            <Form.Title>Sign In</Form.Title>
            <Form.FormContainer onSubmit={formik.handleSubmit} method="POST" >
                <Form.EmailInput
                    name='email'
                    placeholder="Email or phone number"
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                 />
            {formik.errors.email ? <Form.Error>{formik.errors.email}</Form.Error> : null}
                <Form.PasswordInput
                    name='password' 
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />
            {formik.errors.password ? <Form.Error>{formik.errors.password}</Form.Error> : null}
            {credentialError ? <Form.Error style={{fontSize:'1rem'}}>{credentialError}</Form.Error> : null}
                <Form.Sbutton 
                    disabled={!isInvalid}
                    type='submit'
                    variant='contained' 
                    size='large' 
                    className='sbutton'
                    >
                        Sign In
                </Form.Sbutton>
            </Form.FormContainer>
            <Form.Wrap1>
                <Form.Tick type='checkbox' />
                <Form.Data>Remember me</Form.Data>
                <Form.Data className='formData' >Need help?</Form.Data>
            </Form.Wrap1>
            <Form.Wrap2>
                <Form.Data>New to Netflix?</Form.Data>
                <Form.ClickData onClick={clickEvent} >Sign up now</Form.ClickData>
            </Form.Wrap2>
            <Form.Data style={{marginTop:'8px'}} >
                This page is Protected by Google reCAPTCHA 
                to ensure you're not a bot.                      
            </Form.Data>
            </Form>
        </Form.Main>        
    )
}

