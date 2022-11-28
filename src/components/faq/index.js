import React, { createContext, useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { Container,Item,Title,Frame,Wrapper,Header,HeaderTitle,Body,Description,DescriptionText,DescriptionInput, InnerContainer } from '../styles/faq';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

export const ToggleContext = createContext();

export default function Faq({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            {children}
        </Item>
    )
}

Faq.Container = function FaqContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Faq.Title = function FaqTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Faq.Frame = function FaqFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Faq.Wrapper = function FaqWrapper({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
   
    return (
        <ToggleContext.Provider value={{toggleShow , setToggleShow}}>
            <Wrapper {...restProps}>{children}</Wrapper>   
        </ToggleContext.Provider>
    )
}

Faq.Header = function FaqHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return( 
    <Header onClick={()=>setToggleShow(!toggleShow)} {...restProps}>
        {children}
        {toggleShow ? (
            <CloseIcon />
        ): <AddIcon />}
    </Header>
    )
}

Faq.HeaderTitle = function FaqHeaderTitle({children, ...restProps}){
    return <HeaderTitle {...restProps}>{children}</HeaderTitle>
}

Faq.Body = function FaqBody({ children , ...restProps}){
    const {toggleShow} = useContext(ToggleContext);
    return toggleShow ? <Body toggleShow={toggleShow} {...restProps}>{children}</Body> : null
}

Faq.Descripion = function FaqDescription({children, ...restProps}){
    return <Description {...restProps}>{children}</Description>
}

Faq.DescripionText = function FaqDescriptionText({children, ...restProps}){
    return <DescriptionText {...restProps}>{children}</DescriptionText>
}

Faq.InnerContainer = function FaqInnerContainer({children , ...restProps}){
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}


Faq.DescripionInput = function FaqDescriptionInput({children, ...restProps}) {
    return <DescriptionInput {...restProps} />
}

Faq.DescriptionButton = function FaqDescriptionButton({children, ...restProps}) {
    return <Button {...restProps}>{children}<span style={{marginLeft:'6px'}}> > </span></Button>
}