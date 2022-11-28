import React from 'react';
import { Main } from '../components/styles/signup';
import { FooterContainer } from '../Containers/FooterContainer';
import NavbarContainer from '../Containers/NavbarContainer';
import SignupContainer from '../Containers/SignupContainer';

function SignUp() {

    return (
        <Main>
          <NavbarContainer />
          <SignupContainer />
          <FooterContainer style={{backgroundColor:'black'}} />
        </Main>
    )
}

export default SignUp
