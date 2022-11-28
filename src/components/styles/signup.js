import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    flex-direction: column;
    background-color: white;

    .bigerror {
        margin-top:8px;
        font-size:1.2rem;
        font-weight: bolder;
        letter-spacing: 2px;
        color:white;
        opacity: 0.4;
        text-align: center;
        background-color: red;
        padding:10px;
    }

`;

export const Container = styled.div`
    align-self: center;
    display:flex;
    flex-direction: column;
    color:black;
    margin-top:100px;
    margin-bottom:100px;
    max-width:480px;
`;

export const Form = styled.form`
    margin-top:10px;
    display:flex;
    flex-direction: column;

    .MuiButton-containedSizeLarge {
        margin-top:20px;
        background-color: red;
        border:none;
        color:white;
        :hover{
            background-color:red;
        }
        :disabled {
            background-color:red;
            color:whitesmoke;
            opacity: 0.6;
        }
    }

    .error {
        margin-top:8px;
        font-size:1rem;
        color:red;
    }
`;

export const Title = styled.h2`

`;

export const Subtitle = styled.h3`
    margin-top:20px;
    font-weight: lighter;
    width:80%;
`;

export const EmailInput = styled.input`
    padding:20px 20px;
    width:100%;
    border-radius:1px;
    border:solid 1px grey;

    ::placeholder{
        padding-left:15px;
    }

`;

export const PasswordInput = styled.input`
    margin-top:8px;
    padding:20px 20px;
    width:100%;
    border-radius:1px;
    border:solid 1px grey;
    
    ::placeholder{
        padding-left:15px;
    }
`;

export const SignButton = styled(Button)`

`;