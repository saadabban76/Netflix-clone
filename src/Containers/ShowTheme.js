import React from 'react'
import styled from 'styled-components'
import EmailContainer from './EmailContainer'

function ShowTheme() {
    return (
        <Container>
            <InnerContainer>
                <Title>
                    Unlimited movies, TV shows and more.
                </Title>
                <SubTitle>Watch anywhere. Cancel anytime</SubTitle>
                <EmailContainer />
            </InnerContainer>
        </Container>
    )
}

export default ShowTheme

const Container = styled.div`
    width:100%;
    height:750px;
    display:flex;
    border-bottom:8px solid #222;
    padding:2px 50px;
    align-items: center;
    justify-content: center;
    background: url("/images/jumbotron/home-bg.jpg") top left / cover no-repeat;
    @media (max-width:750px) {
        height:600px;
    }
`

const InnerContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:750px) {
        width:100%;
    }
`

const Title = styled.h1`
    color:white;
    width:60%;
    text-align:center;
    margin:20px auto 20px auto;
    @media (max-width:780px) {
        width:100%;
        font-size:30px;
    }
`

const SubTitle = styled.h3`
    color:white;
    width:80%;
    text-align:center;
    @media (max-width:780px) {
        font-size:20px;
    }
`