import React from 'react';
import { Main, Styling } from '../components/styles/form';
import { FooterContainer } from '../Containers/FooterContainer';
import { FormContainer } from '../Containers/FormContainer';

function SignIn() {
    return (
        <>
            <Main>
                <FormContainer />
                <Styling>
                    <FooterContainer style={{width:'100%'}} />
                </Styling>
            </Main>
        </>
    )
}

export default SignIn
