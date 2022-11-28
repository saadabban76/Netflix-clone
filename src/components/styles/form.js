import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background: url("/images/jumbotron/home-bg.jpg") top left / cover no-repeat;
    background-position: center;

    .footerContainer{
        z-index:100101010101001;
        backdrop-filter: blur(1px) saturate(194%);
        -webkit-backdrop-filter: blur(3px) saturate(184%);
        background-color: rgba(0, 0, 0, 0.70);
    }
`

export const Styling = styled.div`
    margin-top:50px;
    width:100%;
    backdrop-filter: blur(1px) saturate(194%);
    -webkit-backdrop-filter: blur(3px) saturate(184%);
    background-color: rgba(0, 0, 0, 0.70);
`

export const Item = styled.div`
    position:relative;
    margin-top:100px;
    backdrop-filter: blur(1px) saturate(194%);
    -webkit-backdrop-filter: blur(3px) saturate(184%);
    background-color: rgba(0, 0, 0, 0.70);
    border-radius: 12px;
    border-radius: 12px;
    max-width:440px;
    height: 65vh;
    padding:50px 80px;
    border-radius: 8px;
    display:flex;
    flex-direction: column;

    @media(max-width:620px) {
        padding:50px 20px;
        height:76vh;
    }

`

export const Title = styled.h1`
    color:white;
    font-size:2rem;
`

export const FormContainer = styled.form`
    flex:0.7;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    .sbutton{
        margin-top: 20px;
        color:white;
        font-size:1rem;
        font-weight: bold;
        background-color: red;
        :hover{
            background-color: red;
        }
        :disabled{
            background-color: red;
            color:whitesmoke;
            opacity: 0.5;
        }
    }
`

export const EmailInput = styled.input`
    background-color: #333333;
    border:none;
    width:100%;
    /* margin-top:20px; */
    border-radius: 3px;
    padding:15px;
    color:white;

    @media (max-width:620px) {
        margin-top:20px;
    }
`

export const PasswordInput = styled.input`
    background-color: #333333;
    border:none;
    width:100%;
    /* margin-top:20px; */
    border-radius: 3px;
    padding:15px;
    color:white;

    @media (max-width:620px) {
        margin-top:20px;
    }

`

export const Error = styled.p`
    font-size:0.8rem;
    color:red;
`

export const Sbutton = styled.div`
    font-weight: 100;
    font-family:sans-serif;
    background-color: red;
    color:white;
`

export const Wrap1 =styled.div`
    position: relative;

    display:flex;
    .formData{
        position: absolute;
        right:0px;
    }
    @media (max-width:620px) {
        bottom:-10px;
    }
`

export const Wrap2 = styled.div`
    margin-top:20px;
    display:flex;
    @media (max-width:620px) {
        margin-top:50px;
    }
`

export const Data = styled.h4`
    font-size: 0.9rem;
    color:#645f5f;
`

export const ClickData = styled.h3`
    color:white;
    font-size: 1.2rem;
    cursor:pointer;
`

export const Tick = styled.input`
    padding:5px;
    margin-right:6px;
`