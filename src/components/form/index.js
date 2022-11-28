import { Button } from '@material-ui/core';
import React from 'react';
import { Title, EmailInput, PasswordInput, FormContainer, Wrap1, Wrap2, Data, ClickData, Main, Item, Tick, Error } from '../styles/form';

export default function Form({children, ...restProps}) {
    return (
        <Item {...restProps}>
                {children}
        </Item>
    )
}

Form.Main = function FormMain({children,...restProps}){
    return <Main {...restProps}>{children}</Main>
}

Form.Title = function FormTitle({children,...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Form.FormContainer = function FormFormContainer({children,...restProps}) {
    return <FormContainer {...restProps}>{children}</FormContainer>
}

Form.EmailInput = function FormEmailInput({...restProps}) {
    return <EmailInput {...restProps} />
}

Form.Tick = function FormTick({...restProps}) {
    return <Tick {...restProps} />
}

Form.PasswordInput = function FormPasswordInput({...restProps}) {
    return <PasswordInput {...restProps} />
}

Form.Error = function FormError({children,...restProps}) {
    return <Error {...restProps}>{children}</Error>
}

Form.Sbutton = function FormSbutton({children,...restProps}) {
    return <Button {...restProps} >{children}</Button>
}

Form.Wrap1 = function FormWrap1({children,...restProps}) {
    return <Wrap1 {...restProps}>{children}</Wrap1>
}

Form.Wrap2 = function FormWrap2({children,...restProps}) {
    return <Wrap2 {...restProps}>{children}</Wrap2>
}

Form.Data = function FormData({children,...restProps}) {
    return <Data {...restProps}>{children}</Data>
}

Form.ClickData = function FormClickData({children,...restProps}) {
    return <ClickData {...restProps}>{children}</ClickData>
}
