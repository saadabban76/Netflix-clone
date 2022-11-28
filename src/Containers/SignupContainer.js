import React, { useState } from 'react';
import Signup from '../components/signup';
import { useDispatch, useSelector } from 'react-redux';
import { Browse } from '../constants/routes';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase';
import { setUserStatus } from '../slices/user';

function SignupContainer() {

  const {email} = useSelector((state)=>state.users.email);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
        password:''
    },
    onSubmit: (values) => {
        console.log(values.email);

        // Pushing the User to Other Page:)

        createUserWithEmailAndPassword(auth, email,formik.values.password )
        .then((result) => {
          // result.user.updateProfile({
          //   displayName: userName
          // })
          if(result) {
            history.push(Browse);
            setError('');
            dispatch(setUserStatus({
              userStatus:true
            }));
          }
        }).catch((err)=>{
          console.log(err);
          if(err) {
            setError(err.message);
          }
        });

    },
    validate: (values) => {
        const errors = {};
        if(!values.password) {
          errors.password = 'Password Mandatory !';
      }else if (!/^(?=.*\d).{4,20}$/i.test(values.password)) {
          errors.password = 'Password must be between 4 and 8 digits long and include at least one numeric digit.'
      }
      return errors
    }
  })

  const isInvalid = Object.keys(formik.errors).length === 0;

    return (
        <>
        <Signup>
            {error ? <p className='bigerror'>{error}</p> : null}
            <Signup.Title>
              Create a password to start your membership
            </Signup.Title>
            <Signup.Subtitle>
              Just a few more steps and you're done!
              We hate paperwork, too.
            </Signup.Subtitle>
            <Signup.Form onSubmit={formik.handleSubmit} >
              <Signup.Emailinput
                placeholder='Email address'
                value={email}
              />
              <Signup.PasswordInput 
                type='text'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder='Password'
              />
              {formik.errors.password ? <p className='error'>{formik.errors.password}</p> : null}
              <Signup.Button
               className='button'
                variant="contained" 
                size='large'
                disabled={!isInvalid} 
                type='submit' >
                Welcome
              </Signup.Button>
            </Signup.Form>
        </Signup>
        </>
    )
}

export default SignupContainer
