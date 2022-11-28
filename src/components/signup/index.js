import { Button } from '@material-ui/core';
import React from 'react';
import { Container, Title, Subtitle, Form, EmailInput, PasswordInput } from '../styles/signup';

export default function Signup({children, ...restProps}) {
    return (
        <Container {...restProps} >
            {children}
        </Container>
    )
}

Signup.Title = function SignupTitle ({children,...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Signup.Subtitle = function SignupSubtitle ({children,...restProps}) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Signup.Form = function SignupForm ({children,...restProps}) {
    return <Form {...restProps}>{children}</Form>
}


Signup.Emailinput = function SignupEmailinput ({children,...restProps}) {
    return <EmailInput {...restProps}>{children}</EmailInput>
}

Signup.PasswordInput = function SignupPasswordInput ({children,...restProps}) {
    return <PasswordInput {...restProps}>{children}</PasswordInput>
}

Signup.Button = function SignupButton ({children,...restProps}) {
    return <Button {...restProps}>{children}</Button>
}