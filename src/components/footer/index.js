import React from 'react';
import { Item , Container , CallUs , InnerContainer , Data , DumbData } from '../styles/footer';

export default function Footer({children , ...restProps}) {
    return (
        <Item {...restProps}>
            {children}
        </Item>
    )
}

Footer.Container = function FooterContainer({ children , ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Footer.CallUs = function FooterCallUs({ children , ...restProps}){
    return <CallUs {...restProps}>{children}</CallUs>
}

Footer.InnerContainer = function FooterInnerContainer({children , ...restProps}){
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}

Footer.Data = function FooterData({children , ...restProps}){
    return <Data {...restProps}>{children}</Data>
}

Footer.DumbData = function FooterData({ children , ...restProps }){
    return <DumbData {...restProps}>{children}</DumbData>
}

