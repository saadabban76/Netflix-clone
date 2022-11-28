import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Faq } from '../components';
import {  SIGN_UP } from '../constants/routes';
import { setEmail } from '../slices/user';

function EmailContainer() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email:''
        },
        onSubmit: (values) => {
            console.log(values.email);
            dispatch(setEmail({
                email:values.email
            }));

            // Pushing the User to Other Page:)

            history.push(SIGN_UP);

        },
        validate: (values) => {
            const errors = {};
            if(!values.email) {
                errors.email = 'Email Required !';
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email format';
            }
            return errors;
        }
    })

    const inValid = Object.keys(formik.errors).length === 0;

    return (
    <>
    <Faq.Descripion>
            <Faq.DescripionText>
                Ready to watch? Enter your email to create or restart your membership.
            </Faq.DescripionText>
            {formik.errors.email ? <h3 className="error" >{formik.errors.email}</h3> : null}
            <Faq.InnerContainer onSubmit={formik.handleSubmit}>
            <Faq.DescripionInput 
                placeholder='Enter Your Email'
                onChange={formik.handleChange} 
                value={formik.values.email}
                name='email'
                type='text' />
            <Faq.DescriptionButton 
                disabled={!inValid}
                variant='contained' 
                size='large' 
                className='button'
                type='submit' >Get Started</Faq.DescriptionButton>
            </Faq.InnerContainer>
    </Faq.Descripion>
    </>
    )
}

export default EmailContainer
